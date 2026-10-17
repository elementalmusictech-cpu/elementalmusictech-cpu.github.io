"use client";

import { useEffect, useRef } from "react";

export default function ManualFrame() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const origin = window.location.origin;

    const syncSection = () => {
      frame.contentWindow?.postMessage({
        type: "prism-manual:navigate",
        hash: window.location.hash,
      }, origin);
    };

    const receiveSection = (event: MessageEvent) => {
      if (event.origin !== origin || event.source !== frame.contentWindow) return;
      if (event.data?.type !== "prism-manual:section") return;
      const hash = event.data.hash;
      if (typeof hash !== "string" || (hash !== "" && !hash.startsWith("#"))) return;
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", window.location.pathname + window.location.search + hash);
      }
    };

    window.addEventListener("message", receiveSection);
    window.addEventListener("popstate", syncSection);
    window.addEventListener("hashchange", syncSection);
    frame.addEventListener("load", syncSection);
    syncSection();

    return () => {
      window.removeEventListener("message", receiveSection);
      window.removeEventListener("popstate", syncSection);
      window.removeEventListener("hashchange", syncSection);
      frame.removeEventListener("load", syncSection);
    };
  }, []);

  return (
    <iframe
      ref={frameRef}
      src="/manual/index.html"
      title="Prism manual"
      className="block h-[calc(100dvh-4rem)] w-full border-0"
    />
  );
}
