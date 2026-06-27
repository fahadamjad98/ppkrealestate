"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const FINE_POINTER_QUERY = "(pointer: fine)";

function subscribeFinePointer(callback: () => void): () => void {
  const mq = window.matchMedia(FINE_POINTER_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the pointer in viewport coordinates. Only attaches on fine pointers
 * (desktop) so it never runs on touch devices.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return position;
}

/**
 * Returns true when the current device has a fine pointer (mouse).
 * Resolves after mount to stay SSR-safe.
 */
export function useHasFinePointer(): boolean {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia(FINE_POINTER_QUERY).matches,
    () => false, // server snapshot: assume coarse pointer
  );
}
