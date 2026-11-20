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
const LOAD_STEP = 12;

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

const getOptimizedUrl = (url: string, width = 600, quality = 75) => {
  if (!url) return "";
  if (url.startsWith("https://cdn.swastixa.com/")) {
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
  }
  return url;
};

interface GridItemProps {
  item: SMMItem;
  globalIndex: number;
}

const GridItem = memo(({ item, globalIndex }: GridItemProps) => {
  const [currentSrc, setCurrentSrc] = useState(() => getOptimizedUrl(item.image, 600, 75));
  const isTopPriority = globalIndex < 4;
  const isTall = item.isTall;

  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: isTall ? "auto 520px" : "auto 360px",
      }}
      className="w-full mb-5 sm:mb-6 relative rounded-2xl overflow-hidden bg-neutral-900 group shadow-2xl transition-transform duration-300 ease-out hover:-translate-y-1.5"
    >
      <div
        className="relative w-full overflow-hidden bg-neutral-900"
        style={{ aspectRatio: isTall ? "9 / 16" : "1 / 1" }}
      >
        <img
          src={currentSrc}
          srcSet={`
            ${getOptimizedUrl(item.image, 400, 70)} 400w,
            ${getOptimizedUrl(item.image, 650, 75)} 650w
          `}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          alt={item.title || "Social Media Content"}
          width={600}
          height={isTall ? 1067 : 600}
          onError={() => {
            if (currentSrc !== item.image) setCurrentSrc(item.image);
          }}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-full block object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
  preconnect("https://wsrv.nl", { crossOrigin: "anonymous" });

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
            <span className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              Loading More
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(SMMGrid);
