import React from "react";
import loadable from "@loadable/component";
import { RemixiconReactIconComponentType } from "remixicon-react";

// Using `<svg />` as a loading fallback – to make sure sizes set by <IconWrapper>
// apply even while the full icon is still loading.
const LOADING_FALLBACK = <svg />;

export function loadableForSvg(
  importFn: () => Promise<typeof import("*.svg")>,
) {
  return loadable(importFn, {
    resolveComponent: (m) => m.ReactComponent,
    fallback: LOADING_FALLBACK,
  });
}

export function loadableForRemixIcons(
  importFn: () => Promise<{ default: RemixiconReactIconComponentType }>,
) {
  return loadable(importFn, {
    fallback: LOADING_FALLBACK,
  });
}
