"use client";

import React, {
  memo,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { preconnect } from "react-dom";
import type { SMMItem } from "@/data/smmContent";

const INITIAL_BATCH = 12;
const LOAD_STEP = 8;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const getColumnCount = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w >= 1536) return 4;
  if (w >= 1024) return 3;
  if (w >= 640) return 2;
  return 1;
};

interface GridItemProps {
  item: SMMItem;
  globalIndex: number;
}

const GridItem = memo(({ item, globalIndex }: GridItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setIsImageLoaded(true);
    }
  }, []);

  const isTopPriority = globalIndex < 4;
  const isInitialBatch = globalIndex < 8;

  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: item.isTall ? "auto 520px" : "auto 360px",
      }}
      className="w-full mb-5 sm:mb-6 relative rounded-2xl overflow-hidden bg-neutral-900 group shadow-2xl transform-gpu transition-transform duration-300 ease-out hover:-translate-y-1.5"
    >
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${
          isImageLoaded
            ? "min-h-0"
            : item.isTall
            ? "min-h-[340px] sm:min-h-[420px]"
            : "min-h-[240px] sm:min-h-[280px]"
        }`}
      >
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-800/50 to-neutral-900 animate-pulse" />
        )}

        <img
          ref={imgRef}
          src={item.image}
          alt={item.title || "Social Media Content"}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(true)}
          loading={isInitialBatch ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={isTopPriority ? "high" : isInitialBatch ? "auto" : "low"}
          className={`w-full h-auto block object-cover transition-[opacity,transform] duration-500 ease-out group-hover:scale-[1.03] ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
});

GridItem.displayName = "GridItem";

interface SMMGridProps {
  smmContent: SMMItem[];
}

const SMMGrid = ({ smmContent }: SMMGridProps) => {
  preconnect("https://cdn.swastixa.com", { crossOrigin: "anonymous" });

  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [columns, setColumns] = useState<number>(3);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const isMoreLoadingRef = useRef(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const totalCount = smmContent ? smmContent.length : 0;

  // Sync column count before paint via matchMedia breakpoints (no per-pixel resize churn)
  useIsomorphicLayoutEffect(() => {
    const syncCols = () => setColumns(getColumnCount());
    syncCols();
    setIsLayoutReady(true);

    const queries = [
      window.matchMedia("(min-width: 1536px)"),
      window.matchMedia("(min-width: 1024px)"),
      window.matchMedia("(min-width: 640px)"),
    ];
    queries.forEach((mq) => mq.addEventListener("change", syncCols));
    return () => {
      queries.forEach((mq) => mq.removeEventListener("change", syncCols));
    };
  }, []);

  const loadMore = useCallback(() => {
    if (isMoreLoadingRef.current) return;
    isMoreLoadingRef.current = true;
    setVisibleCount((prev) => Math.min(prev + LOAD_STEP, totalCount));
    requestAnimationFrame(() => {
      isMoreLoadingRef.current = false;
    });
  }, [totalCount]);

  useEffect(() => {
    if (!isLayoutReady || visibleCount >= totalCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.01, rootMargin: "500px 0px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      observer.disconnect();
    };
  }, [loadMore, visibleCount, totalCount, isLayoutReady]);

  // Distribute items into balanced masonry lanes using precomputed heightFactor
  const lanes = useMemo(() => {
    if (!smmContent || smmContent.length === 0) return [];
    const items = smmContent.slice(0, visibleCount);
    const result: { item: SMMItem; globalIndex: number }[][] = Array.from(
      { length: columns },
      () => []
    );
    const heights = new Array(columns).fill(0);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      let minColIdx = 0;
      let minHeight = heights[0];
      for (let c = 1; c < columns; c++) {
        if (heights[c] < minHeight) {
          minHeight = heights[c];
          minColIdx = c;
        }
      }
      result[minColIdx].push({ item, globalIndex: i });
      heights[minColIdx] += item.heightFactor;
    }
    return result;
  }, [visibleCount, smmContent, columns]);

  if (!smmContent || smmContent.length === 0) return null;

  const hasMore = visibleCount < totalCount;

  return (
    <section className="w-full min-h-screen bg-black px-4 py-16 sm:py-20">
      <div className="max-w-[2500px] mx-auto flex flex-row gap-4 sm:gap-6">
        {lanes.map((laneItems, laneIdx) => (
          <div key={`lane-${laneIdx}`} className="flex-1 flex flex-col min-w-0">
            {laneItems.map(({ item, globalIndex }) => (
              <GridItem key={item.id} item={item} globalIndex={globalIndex} />
            ))}
          </div>
        ))}
      </div>

      <div
        ref={loaderRef}
        className={`w-full flex flex-col items-center justify-center bg-black transition-all duration-300 ${
          hasMore ? "h-32 mt-10" : "h-0 mt-0 overflow-hidden"
        }`}
      >
        {hasMore && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-white/10 border-t-blue-500 animate-spin" />
            <span className="text-blue-400/60 text-[10px] font-bold tracking-[0.3em] uppercase">
              Loading More
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(SMMGrid);
