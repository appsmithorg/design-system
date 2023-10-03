import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";
import { Text } from "../Text";

export default {
  title: "Design System/Box",
  component: Box,
  argTypes: {
    width: {
      control: {
        type: "text",
      },
      description: "Width of the box",
    },
    height: {
      control: {
        type: "text",
      },
      description: "Height of the box",
    },
    m: {
      control: {
        type: "text",
      },
      description: "Margin on top, left, bottom and right",
    },
    margin: {
      control: {
        type: "text",
      },
      description: "Margin on top, left, bottom and right",
    },
    mt: {
      control: {
        type: "text",
      },
      description: "Margin on top",
    },
    marginTop: {
      control: {
        type: "text",
      },
      description: "Margin on top",
    },
    mr: {
      control: {
        type: "text",
      },
      description: "Margin on right",
    },
    marginRight: {
      control: {
        type: "text",
      },
      description: "Margin on right",
    },
    mb: {
      control: {
        type: "text",
      },
      description: "Margin on bottom",
    },
    marginBottom: {
      control: {
        type: "text",
      },
      description: "Margin on bottom",
    },
    ml: {
      control: {
        type: "text",
      },
      description: "Margin on left",
    },
    marginLeft: {
      control: {
        type: "text",
      },
      description: "Margin on left",
    },
    mx: {
      control: {
        type: "text",
      },
      description: "Margin on left and right",
    },
    marginX: {
      control: {
        type: "text",
      },
      description: "Margin on left and right",
    },
    my: {
      control: {
        type: "text",
      },
      description: "Margin on top and bottom",
    },
    marginY: {
      control: {
        type: "text",
      },
      description: "Margin on top and bottom",
    },
    p: {
      control: {
        type: "text",
      },
      description: "Padding on top, left, bottom and right",
    },
    padding: {
      control: {
        type: "text",
      },
      description: "Padding on top, left, bottom and right",
    },
    pt: {
      control: {
        type: "text",
      },
      description: "Padding on top",
    },
    paddingTop: {
      control: {
        type: "text",
      },
      description: "Padding on top",
    },
    pr: {
      control: {
        type: "text",
      },
      description: "Padding on right",
    },
    paddingRight: {
      control: {
        type: "text",
      },
      description: "Padding on right",
    },
    pb: {
      control: {
        type: "text",
      },
      description: "Padding on bottom",
    },
    paddingBottom: {
      control: {
        type: "text",
      },
      description: "Padding on bottom",
    },
    pl: {
      control: {
        type: "text",
      },
      description: "Padding on left",
    },
    paddingLeft: {
      control: {
        type: "text",
      },
      description: "Padding on left",
    },
    px: {
      control: {
        type: "text",
      },
      description: "Padding on left and right",
    },
    paddingX: {
      control: {
        type: "text",
      },
      description: "Padding on left and right",
    },
    py: {
      control: {
        type: "text",
      },
      description: "Padding on top and bottom",
    },
    paddingY: {
      control: {
        type: "text",
      },
      description: "Padding on top and bottom",
    },
    display: {
      control: {
        type: "select",
      },
      options: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "flow",
        "flow-root",
        "contents",
        "table",
        "table-row",
        "table-cell",
        "table-caption",
        "none",
        "inherit",
        "initial",
        "unset",
      ],
      table: {
        type: {
          summary:
            "block | inline-block | inline | flex | inline-flex | grid | inline-grid | flow | flow-root | contents | table | table-row | table-cell | table-caption | none | inherit | initial | unset",
        },
        defaultValue: { summary: "block" },
      },
      description: "Display of the box",
    },
    alignItems: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Align items of the box",
    },
    alignContent: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Align content of the box",
    },
    justifyContent: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Justify content of the box",
    },
    justifyItems: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Justify items of the box",
    },
    flexWrap: {
      control: {
        type: "select",
      },
      options: ["nowrap", "wrap", "wrap-reverse"],
      table: {
        type: {
          summary: "nowrap | wrap | wrap-reverse",
        },
        defaultValue: { summary: "nowrap" },
      },
      description: "Flex wrap of the box",
    },
    flexGrow: {
      control: {
        type: "text",
      },
      description: "Flex grow of the box",
    },
    flexShrink: {
      control: {
        type: "text",
      },
      description: "Flex shrink of the box",
    },
    flexBasis: {
      control: {
        type: "text",
      },
      description: "Flex basis of the box",
    },
    flexDirection: {
      control: {
        type: "select",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
      table: {
        type: {
          summary: "row | row-reverse | column | column-reverse",
        },
        defaultValue: { summary: "row" },
      },
      description: "Flex direction of the box",
    },
    flex: {
      control: {
        type: "text",
      },
      description: "Flex of the box",
    },
    justifySelf: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Justify self of the box",
    },
    alignSelf: {
      control: {
        type: "select",
      },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
      ],
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline",
        },
        defaultValue: { summary: "normal" },
      },
      description: "Align self of the box",
    },
    order: {
      control: {
        type: "text",
      },
      description: "Order of the box",
    },
    row: {
      control: {
        type: "text",
      },
      description: "Row of the box",
    },
    col: {
      control: {
        type: "text",
      },
      description: "Column of the box",
    },
    gap: {
      control: {
        type: "text",
      },
      description: "Gap of the box",
    },
    columnGap: {
      control: {
        type: "text",
      },
      description: "Column gap of the box",
    },
    rowGap: {
      control: {
        type: "text",
      },
      description: "Row gap of the box",
    },
    gridColumn: {
      control: {
        type: "text",
      },
      description: "Grid column of the box",
    },
    gridRow: {
      control: {
        type: "text",
      },
      description: "Grid row of the box",
    },
    gridAutoFlow: {
      control: {
        type: "text",
      },
      description: "Grid auto flow of the box",
    },
    gridAutoColumns: {
      control: {
        type: "text",
      },
      description: "Grid auto columns of the box",
    },
    gridAutoRows: {
      control: {
        type: "text",
      },
      description: "Grid auto rows of the box",
    },
    gridTemplateColumns: {
      control: {
        type: "text",
      },
      description: "Grid template columns of the box",
    },
    gridTemplateRows: {
      control: {
        type: "text",
      },
      description: "Grid template rows of the box",
    },
    gridTemplateAreas: {
      control: {
        type: "text",
      },
      description: "Grid template areas of the box",
    },
    gridArea: {
      control: {
        type: "text",
      },
      description: "Grid area of the box",
    },
    minWidth: {
      control: {
        type: "text",
      },
      description: "Minimum width of the box",
    },
    maxWidth: {
      control: {
        type: "text",
      },
      description: "Maximum width of the box",
    },
    minHeight: {
      control: {
        type: "text",
      },
      description: "Minimum height of the box",
    },
    maxHeight: {
      control: {
        type: "text",
      },
      description: "Maximum height of the box",
    },
    size: {
      control: {
        type: "text",
      },
      description: "Size of the box. Sets width and height",
    },
    id: {
      control: {
        type: "text",
      },
      description: "Id of the box",
    },
    className: {
      control: {
        type: "text",
      },
      description: "Classname of the box",
    },
    verticalAlign: {
      control: {
        type: "select",
      },
      options: [
        "baseline",
        "top",
        "middle",
        "bottom",
        "text-top",
        "text-bottom",
        "initial",
        "inherit",
        "unset",
        "revert",
        "sub",
        "super",
      ],
      description: "Vertical align of the box",
    },
    overflow: {
      control: {
        type: "text",
      },
      description: "Overflow of the box",
    },
    overflowX: {
      control: {
        type: "text",
      },
      description: "Overflow of the box on the x axis",
    },
    overflowY: {
      control: {
        type: "text",
      },
      description: "Overflow of the box on the y axis",
    },
    bg: {
      control: {
        type: "color",
      },
      description: "Background color of the box",
    },
    backgroundColor: {
      control: {
        type: "color",
      },
      description: "Background color of the box",
    },
    opacity: {
      control: {
        type: "text",
      },
      description: "Opacity of the box",
    },
    border: {
      control: {
        type: "text",
      },
      description: "Border of the box",
    },
    borderWidth: {
      control: {
        type: "text",
      },
      description: "Border width of the box",
    },
    borderStyle: {
      control: {
        type: "text",
      },
      description: "Border style of the box",
    },
    borderColor: {
      control: {
        type: "color",
      },
      description: "Border color of the box",
    },
    borderRadius: {
      control: {
        type: "text",
      },
      description: "Border radius of the box",
    },
    borderTop: {
      control: {
        type: "text",
      },
      description: "Border top of the box",
    },
    borderTopWidth: {
      control: {
        type: "text",
      },
      description: "Border top width of the box",
    },
    borderTopStyle: {
      control: {
        type: "text",
      },
      description: "Border top style of the box",
    },
    borderTopColor: {
      control: {
        type: "color",
      },
      description: "Border top color of the box",
    },
    borderTopLeftRadius: {
      control: {
        type: "text",
      },
      description: "Border top left radius of the box",
    },
    borderTopRightRadius: {
      control: {
        type: "text",
      },
      description: "Border top right radius of the box",
    },
    borderRight: {
      control: {
        type: "text",
      },
      description: "Border right of the box",
    },
    borderRightWidth: {
      control: {
        type: "text",
      },
      description: "Border right width of the box",
    },
    borderRightStyle: {
      control: {
        type: "text",
      },
      description: "Border right style of the box",
    },
    borderRightColor: {
      control: {
        type: "color",
      },
      description: "Border right color of the box",
    },
    borderBottom: {
      control: {
        type: "text",
      },
      description: "Border bottom of the box",
    },
    borderBottomWidth: {
      control: {
        type: "text",
      },
      description: "Border bottom width of the box",
    },
    borderBottomStyle: {
      control: {
        type: "text",
      },
      description: "Border bottom style of the box",
    },
    borderBottomColor: {
      control: {
        type: "color",
      },
      description: "Border bottom color of the box",
    },
    borderBottomLeftRadius: {
      control: {
        type: "text",
      },
      description: "Border bottom left radius of the box",
    },
    borderBottomRightRadius: {
      control: {
        type: "text",
      },
      description: "Border bottom right radius of the box",
    },
    borderLeft: {
      control: {
        type: "text",
      },
      description: "Border left of the box",
    },
    borderLeftWidth: {
      control: {
        type: "text",
      },
      description: "Border left width of the box",
    },
    borderLeftStyle: {
      control: {
        type: "text",
      },
      description: "Border left style of the box",
    },
    borderLeftColor: {
      control: {
        type: "color",
      },
      description: "Border left color of the box",
    },
    borderX: {
      control: {
        type: "text",
      },
      description: "Border left and right of the box",
    },
    borderY: {
      control: {
        type: "text",
      },
      description: "Border top and bottom of the box",
    },
    position: {
      control: {
        type: "text",
      },
      description: "Position of the box",
    },
    zIndex: {
      control: {
        type: "text",
      },
      description: "Z-index of the box",
    },
    top: {
      control: {
        type: "text",
      },
      description: "Top of the box",
    },
    right: {
      control: {
        type: "text",
      },
      description: "Right of the box",
    },
    bottom: {
      control: {
        type: "text",
      },
      description: "Bottom of the box",
    },
    left: {
      control: {
        type: "text",
      },
      description: "Left of the box",
    },
    boxShadow: {
      control: {
        type: "text",
      },
      description: "Box shadow of the box",
    },
  },
} as Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const BoxStory: Story = {
  name: "Box",
  args: {
    bg: "var(--ads-v2-color-bg-brand)",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  render: (args) => (
    <Box {...args}>
      <Text color="#fff">Box</Text>
    </Box>
  ),
};
