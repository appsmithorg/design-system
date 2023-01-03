import { PopperCustomModifer } from "@blueprintjs/popover2";

export const applyMaxSize: PopperCustomModifer = {
  name: "applyMaxSize",
  enabled: true,
  phase: "beforeWrite",
  requires: ["maxSize"],
  fn({ state }) {
    const { height } = state.modifiersData.maxSize;
    console.log({ height });
    state.styles.popper.maxHeight = `${height}px`;
  },
};

export const sameWidth: PopperCustomModifer = {
  name: "sameWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state }) => {
    console.log({ state });
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${
      state.elements.reference.getBoundingClientRect().width
    }px`;
  },
};
