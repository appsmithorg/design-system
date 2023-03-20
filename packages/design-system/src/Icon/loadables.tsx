// IMPORTANT: please keep this file in sync with packages/design-system-old/src/utils/icon-loadables.tsx.

import React, { Suspense } from "react";
import {
  RemixiconReactIconProps,
  RemixiconReactIconComponentType,
} from "remixicon-react";

function importIconImpl(
  importFn: () => Promise<{ default: React.ComponentType }>,
) {
  const Icon = React.lazy(importFn);

  return function AppsmithLoadable(props: any) {
    return (
      // Using `<svg />` as a loading fallback – to make sure sizes set by <IconWrapper>
      // apply even while the full icon is still loading.
      // And passing all props – if the parent component sets `width` or `height`,
      // we want to make sure it’s applied to the loading fallback as well.
      <Suspense fallback={<svg {...props} />}>
        <Icon {...props} />
      </Suspense>
    );
  };
}

export function importSvg(
  importFn: () => Promise<typeof import("*.svg")>,
): React.ComponentType<React.SVGProps<SVGSVGElement>> {
  return importIconImpl(() =>
    importFn().then((m) => ({ default: m.ReactComponent })),
  );
}

export function importRemixIcon(
  importFn: () => Promise<{ default: RemixiconReactIconComponentType }>,
): React.ComponentType<RemixiconReactIconProps> {
  return importIconImpl(importFn);
}
