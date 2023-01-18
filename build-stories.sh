#!/usr/bin/env bash

set -o errexit
set -o xtrace

cd "$(dirname "$0")"

_build-storybook() {
  yarn install --frozen-lockfile
  yarn build-storybook --loglevel warn --quiet --disable-telemetry --output-dir "$1"
}

echo "Building stories for new DS components"
cd packages/design-system
_build-storybook ../../storybook-static

echo "Building stories for old DS components"
cd ../design-system-old
_build-storybook ../../storybook-static/old
