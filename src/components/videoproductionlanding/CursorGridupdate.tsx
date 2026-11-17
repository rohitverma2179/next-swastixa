'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

export type CursorGridFalloff = 'linear' | 'smooth' | 'sharp';
export type CursorGridHighlight = 'area' | 'cell';
export type CursorGridStyle = 'lines' | 'dashed' | 'dots' | 'crosses';

export interface CursorGridProps {
  cellSize?: number;
  color?: string;
  gridColor?: string;
  radius?: number;
  falloff?: CursorGridFalloff;
  highlight?: CursorGridHighlight;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  gridStyle?: CursorGridStyle;
  cellRadius?: number;
  cellGap?: number;
  spotlight?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  ambient?: number;
  edgeFade?: number;
  intro?: boolean;
  lightMode?: boolean;
  dpr?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

type Pulse = { x: number; y: number; t0: number; strength: number };

type Program = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation | null>;
};

const VERTEX = `#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform float uPresence;
uniform float uSpotlight;
uniform float uEdgeFade;
uniform vec4 uPulses[4];

out vec4 outColor;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
  float aspect = uResolution.x / max(uResolution.y, 1.0);

  // Normalized centered coordinates with aspect correction
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  // Mouse in same coordinate space (flip Y for WebGL gl_FragCoord)
  vec2 mUv = vec2(uMouse.x / max(uResolution.x, 1.0), 1.0 - uMouse.y / max(uResolution.y, 1.0));
  vec2 mPos = (mUv - 0.5) * vec2(aspect, 1.0);

  vec2 toMouse = p - mPos;
  float mDist = length(toMouse);

  // Click shockwave distortion + ring glow
  float rippleWarp = 0.0;
  float rippleGlow = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 pulse = uPulses[i];
    if (pulse.w <= 0.001) continue;
    vec2 pUv = vec2(pulse.x / max(uResolution.x, 1.0), 1.0 - pulse.y / max(uResolution.y, 1.0));
    vec2 pCenter = (pUv - 0.5) * vec2(aspect, 1.0);
    float d = length(p - pCenter);
    float radius = pulse.z * 0.95;
    float diff = d - radius;
    float ring = exp(-diff * diff * 180.0) * pulse.w;
    rippleGlow += ring;
    rippleWarp += sin(diff * 28.0) * exp(-abs(diff) * 14.0) * 0.03 * pulse.w;
  }

  // Flowing cinema light ribbons
  vec3 ribbonCol = vec3(0.0);
  float ribbonAlpha = 0.0;

  vec3 cBlue = vec3(0.18, 0.44, 0.98);
  vec3 cIndigo = vec3(0.42, 0.34, 0.96);
  vec3 cCyan = vec3(0.45, 0.80, 1.00);
  vec3 cWhite = vec3(0.92, 0.96, 1.00);

  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float offset = (fi - 2.0) * 0.115;
    float freq = 2.1 + fi * 0.38;
    float speed = 0.42 + fi * 0.09;
    float phase = fi * 1.35;

    float wave =
      sin(p.x * freq + uTime * speed + phase) * 0.095 +
      cos(p.x * (freq * 1.65) - uTime * (speed * 0.72) + fi) * 0.045 +
      sin(p.x * 0.9 + uTime * 0.25 + fi * 2.1) * 0.035;

    // Subtle cursor attraction / magnetic ripple
    float mousePull = exp(-mDist * mDist * 5.2) * uPresence * (
      -toMouse.y * 0.28 + sin(mDist * 12.0 - uTime * 2.8) * 0.025
    );

    float dist = abs(p.y - offset - wave - mousePull - rippleWarp);

    // Core crisp filament + soft volumetric bloom
    float core = exp(-dist * 58.0);
    float midGlow = exp(-dist * 16.0) * 0.42;
    float softGlow = exp(-dist * 5.5) * 0.14;

    vec3 layerColor = mix(cBlue, cIndigo, fi / 4.0);
    layerColor = mix(layerColor, cCyan, smoothstep(0.25, 0.85, core));
    layerColor = mix(layerColor, cWhite, core * 0.75);

    float intensity = core * 0.65 + midGlow + softGlow;
    ribbonCol += layerColor * intensity;
    ribbonAlpha = max(ribbonAlpha, clamp(intensity, 0.0, 1.0));
  }

  // Anamorphic horizontal cinema lens flare tracking cursor
  float flareStreak = exp(-abs(toMouse.y) * 38.0) * exp(-abs(toMouse.x) * 2.6);
  float flareCore = exp(-mDist * mDist * 16.0);
  float flareHalo = exp(-mDist * mDist * 3.8) * 0.35;
  float spotPower = (flareStreak * 0.55 + flareCore * 0.45 + flareHalo) * uPresence * uSpotlight;
  vec3 flareColor = mix(cBlue, cCyan, 0.5) * spotPower + cWhite * (flareStreak * flareCore * 0.45 * uPresence * uSpotlight);

  // Subtle floating cinematic bokeh dust particles
  float dust = 0.0;
  for (int layer = 0; layer < 2; layer++) {
    float fl = float(layer);
    float scale = 11.0 + fl * 9.0;
    vec2 drift = vec2(uTime * (0.04 + fl * 0.03), -uTime * (0.07 + fl * 0.04));
    vec2 gridUv = (p + drift) * scale;
    vec2 id = floor(gridUv);
    vec2 f = fract(gridUv) - 0.5;
    float rnd = hash21(id + fl * 37.0);
    if (rnd > 0.72) {
      vec2 jitter = vec2(hash21(id * 2.1) - 0.5, hash21(id * 3.7) - 0.5) * 0.55;
      float d = length(f - jitter);
      float twinkle = 0.55 + 0.45 * sin(uTime * 1.8 + rnd * 25.0);
      float size = mix(0.05, 0.14, fract(rnd * 13.7));
      dust += smoothstep(size, 0.0, d) * twinkle * (0.28 - fl * 0.08);
    }
  }
  vec3 dustColor = mix(cCyan, cWhite, 0.6) * dust;

  // Shockwave color highlight
  vec3 shockColor = mix(cBlue, cWhite, 0.55) * rippleGlow * 0.75;

  // Edge fade so animation melts smoothly into black borders
  float fade = 1.0;
  if (uEdgeFade > 0.0) {
    vec2 norm = uv;
    vec2 a = clamp(norm / uEdgeFade, 0.0, 1.0);
    vec2 b = clamp((1.0 - norm) / uEdgeFade, 0.0, 1.0);
    vec2 sa = a * a * (3.0 - 2.0 * a);
    vec2 sb = b * b * (3.0 - 2.0 * b);
    fade = sa.x * sa.y * sb.x * sb.y;
  }

  // Soft center vignette to keep Hero H1 & subtitle crisp and readable
  float centerMask = 1.0 - smoothstep(0.0, 0.55, length(p * vec2(0.7, 1.15))) * 0.25;

  vec3 totalColor = (ribbonCol * 0.62 + flareColor + dustColor + shockColor) * fade * centerMask;
  float alpha = clamp(max(max(totalColor.r, totalColor.g), totalColor.b) * 1.35, 0.0, 1.0);

  outColor = vec4(totalColor, alpha);
}`;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const compile = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
};

const link = (gl: WebGL2RenderingContext): Program | null => {
  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < count; i++) {
    const info = gl.getActiveUniform(program, i);
    if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms };
};

const CursorGridupdate = ({
  spotlight = 0.6,
  clickPulse = true,
  edgeFade = 0.2,
  dpr,
  children,
  className = '',
  style,
}: CursorGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef({
    spotlight: clamp(spotlight, 0, 1),
    clickPulse,
    edgeFade: clamp(edgeFade, 0, 0.5),
    dpr,
  });

  settingsRef.current = {
    spotlight: clamp(spotlight, 0, 1),
    clickPulse,
    edgeFade: clamp(edgeFade, 0, 0.5),
    dpr,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
    });

    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, inside: false };
    const mouse = { x: 0, y: 0 };
    const pulses: Pulse[] = [];
    let presence = 0;
    let clock = 0;
    let raf = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      const s = settingsRef.current;
      view.width = Math.max(1, container.clientWidth);
      view.height = Math.max(1, container.clientHeight);
      view.ratio = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(view.width * view.ratio));
      canvas.height = Math.max(1, Math.round(view.height * view.ratio));
      if (!pointer.inside && mouse.x === 0 && mouse.y === 0) {
        mouse.x = view.width * 0.5;
        mouse.y = view.height * 0.5;
        pointer.x = mouse.x;
        pointer.y = mouse.y;
      }
    };

    // WebGL2 Cinema Light Ribbons Renderer
    if (gl && !gl.isContextLost()) {
      const shader = link(gl);
      if (!shader) return undefined;
      const u = shader.uniforms;
      const vao = gl.createVertexArray();
      const pulseBuffer = new Float32Array(16);

      const onContextLost = (e: Event) => {
        e.preventDefault();
        cancelAnimationFrame(raf);
        raf = 0;
      };
      canvas.addEventListener('webglcontextlost', onContextLost, false);

      const drawWebGL = () => {
        const s = settingsRef.current;
        const ratio = view.ratio;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(shader.program);
        gl.bindVertexArray(vao);

        pulseBuffer.fill(0);
        for (let i = 0; i < Math.min(pulses.length, 4); i++) {
          const p = pulses[i];
          const age = clock - p.t0;
          const strength = Math.max(0, 1 - age / 1.4) * p.strength;
          pulseBuffer[i * 4 + 0] = p.x * ratio;
          pulseBuffer[i * 4 + 1] = p.y * ratio;
          pulseBuffer[i * 4 + 2] = age;
          pulseBuffer[i * 4 + 3] = strength;
        }

        gl.uniform2f(u.uResolution, canvas.width, canvas.height);
        gl.uniform1f(u.uTime, clock);
        gl.uniform2f(u.uMouse, mouse.x * ratio, mouse.y * ratio);
        gl.uniform1f(u.uPresence, presence);
        gl.uniform1f(u.uSpotlight, s.spotlight);
        gl.uniform1f(u.uEdgeFade, s.edgeFade);
        if (u['uPulses[0]']) gl.uniform4fv(u['uPulses[0]'], pulseBuffer);
        else if (u.uPulses) gl.uniform4fv(u.uPulses, pulseBuffer);

        gl.drawArrays(gl.TRIANGLES, 0, 3);
        gl.bindVertexArray(null);
      };

      const frame = (now: number) => {
        raf = 0;
        if (!visible || document.hidden) return;
        const dt = last ? clamp((now - last) / 1000, 0, 1 / 20) : 1 / 60;
        last = now;
        if (!reduce) clock += dt;

        const follow = 1 - Math.exp(-dt / 0.08);
        mouse.x += (pointer.x - mouse.x) * follow;
        mouse.y += (pointer.y - mouse.y) * follow;

        const presenceGoal = pointer.inside ? 1 : 0;
        presence += (presenceGoal - presence) * (1 - Math.exp(-dt / 0.25));

        for (let i = pulses.length - 1; i >= 0; i--) {
          if (clock - pulses[i].t0 > 1.45) pulses.splice(i, 1);
        }

        drawWebGL();
        if (!reduce) raf = requestAnimationFrame(frame);
      };

      const wake = () => {
        if (!raf && visible && !document.hidden) {
          last = 0;
          raf = requestAnimationFrame(frame);
        }
      };

      const locate = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {
          x,
          y,
          inside: x >= 0 && y >= 0 && x <= rect.width && y <= rect.height,
        };
      };

      const onPointerMove = (event: PointerEvent) => {
        const { x, y, inside } = locate(event);
        const was = pointer.inside;
        pointer.inside = inside;
        if (!inside) return;
        pointer.x = x;
        pointer.y = y;
        if (!was) {
          mouse.x = x;
          mouse.y = y;
        }
        wake();
      };

      const onPointerDown = (event: PointerEvent) => {
        const { x, y, inside } = locate(event);
        if (!inside || !settingsRef.current.clickPulse || reduce) return;
        if (pulses.length >= 4) pulses.shift();
        pulses.push({ x, y, t0: clock, strength: 1 });
        wake();
      };

      const onPointerLeave = () => {
        pointer.inside = false;
      };

      const onVisibility = () => {
        if (!document.hidden && visible) wake();
      };

      const resizeObserver = new ResizeObserver(() => {
        resize();
        drawWebGL();
      });
      resizeObserver.observe(container);

      const intersection = new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) wake();
      });
      intersection.observe(container);

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });
      document.documentElement.addEventListener('pointerleave', onPointerLeave);
      document.addEventListener('visibilitychange', onVisibility);

      resize();
      drawWebGL();
      if (!reduce) wake();

      return () => {
        cancelAnimationFrame(raf);
        resizeObserver.disconnect();
        intersection.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
        document.documentElement.removeEventListener('pointerleave', onPointerLeave);
        document.removeEventListener('visibilitychange', onVisibility);
        canvas.removeEventListener('webglcontextlost', onContextLost);
        gl.deleteVertexArray(vao);
        gl.deleteProgram(shader.program);
      };
    }

    // Lightweight 2D Canvas fallback if WebGL2 is unavailable
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const draw2D = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const baseY = h * (0.3 + i * 0.1);
        for (let x = 0; x <= w; x += 24) {
          const nx = x / Math.max(w, 1);
          const y =
            baseY +
            Math.sin(nx * 5 + clock * (0.6 + i * 0.15) + i) * (h * 0.055) +
            Math.cos(nx * 8 - clock * 0.4) * (h * 0.025);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle =
          i % 2 === 0
            ? 'rgba(59, 130, 246, 0.28)'
            : 'rgba(99, 102, 241, 0.24)';
        ctx.lineWidth = 2 * view.ratio;
        ctx.stroke();
      }
    };

    const frame2D = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      const dt = last ? clamp((now - last) / 1000, 0, 1 / 20) : 1 / 60;
      last = now;
      if (!reduce) clock += dt;
      draw2D();
      if (!reduce) raf = requestAnimationFrame(frame2D);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw2D();
    });
    resizeObserver.observe(container);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible && !reduce && !raf) {
        last = 0;
        raf = requestAnimationFrame(frame2D);
      }
    });
    intersection.observe(container);

    resize();
    draw2D();
    if (!reduce) raf = requestAnimationFrame(frame2D);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={['relative h-full w-full overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 block h-full w-full"
        aria-hidden="true"
      />
      {children ? <div className="relative h-full w-full">{children}</div> : null}
    </div>
  );
};

export default CursorGridupdate;
