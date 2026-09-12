import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

/**
 * Lazy image with an intrinsic aspect ratio so the space is reserved before the
 * file arrives — reveals can never cause layout shift on slow devices.
 */
export function LazyImage({
  className,
  width,
  height,
  style,
  eager = false,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { eager?: boolean }) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Covers images already complete from cache before hydration.
    if (ref.current?.complete) setLoaded(true);
  }, []);

  const ratio =
    Number(width) > 0 && Number(height) > 0 ? `${Number(width)} / ${Number(height)}` : undefined;

  return (
    <img
      ref={ref}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      data-loaded={loaded ? "true" : "false"}
      onLoad={() => setLoaded(true)}
      style={{ aspectRatio: ratio, ...style }}
      className={cn("img-fade", className)}
      {...rest}
    />
  );
}
