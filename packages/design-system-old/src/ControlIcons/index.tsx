import React, { JSXElementConstructor } from "react";
import { IconProps, IconWrapper } from "Constants/Icon";
import { loadableForRemixIcons, loadableForSvg } from "Utils/icon-loadables";
import PlayIcon from "../assets/icons/control/play-icon.png";

const DeleteIcon = loadableForSvg(() =>
  import("../assets/icons/control/delete.svg"),
);
const MoveIcon = loadableForSvg(() =>
  import("../assets/icons/control/move.svg"),
);
const EditIcon = loadableForSvg(() =>
  import("../assets/icons/control/edit.svg"),
);
const ViewIcon = loadableForSvg(() =>
  import("../assets/icons/control/view.svg"),
);
const MoreVerticalIcon = loadableForSvg(() =>
  import("../assets/icons/control/more-vertical.svg"),
);
const OverflowMenuIcon = loadableForSvg(() =>
  import("../assets/icons/menu/overflow-menu.svg"),
);
const JsToggleIcon = loadableForSvg(() =>
  import("../assets/icons/control/js-toggle.svg"),
);
const IncreaseIcon = loadableForSvg(() =>
  import("../assets/icons/control/increase.svg"),
);
const DecreaseIcon = loadableForSvg(() =>
  import("../assets/icons/control/decrease.svg"),
);
const DraggableIcon = loadableForSvg(() =>
  import("../assets/icons/control/draggable.svg"),
);
const CloseCircleIcon = loadableForSvg(() =>
  import("../assets/icons/control/close-circle.svg"),
);
const AddCircleIcon = loadableForSvg(() =>
  import("../assets/icons/control/add-circle.svg"),
);
const HelpIcon = loadableForSvg(() =>
  import("../assets/icons/control/help.svg"),
);
const CollapseIcon = loadableForSvg(() =>
  import("../assets/icons/control/collapse.svg"),
);
const PickMyLocationSelectedIcon = loadableForSvg(() =>
  import("../assets/icons/control/pick-location-selected.svg"),
);
const RemoveIcon = loadableForSvg(() =>
  import("../assets/icons/control/remove.svg"),
);
const DragIcon = loadableForSvg(() =>
  import("../assets/icons/control/drag.svg"),
);
const SortIcon = loadableForSvg(() =>
  import("../assets/icons/control/sort-icon.svg"),
);
const EditWhiteIcon = loadableForSvg(() =>
  import("../assets/icons/control/edit-white.svg"),
);
const LaunchIcon = loadableForSvg(() =>
  import("../assets/icons/control/launch.svg"),
);
const BackIcon = loadableForSvg(() =>
  import("../assets/icons/control/back.svg"),
);
const DeleteColumnIcon = loadableForSvg(() =>
  import("../assets/icons/control/delete-column.svg"),
);
const BoldFontIcon = loadableForSvg(() =>
  import("../assets/icons/control/bold.svg"),
);
const UnderlineIcon = loadableForSvg(() =>
  import("../assets/icons/control/underline.svg"),
);
const ItalicsFontIcon = loadableForSvg(() =>
  import("../assets/icons/control/italics.svg"),
);
const LeftAlignIcon = loadableForSvg(() =>
  import("../assets/icons/control/left-align.svg"),
);
const CenterAlignIcon = loadableForSvg(() =>
  import("../assets/icons/control/center-align.svg"),
);
const RightAlignIcon = loadableForSvg(() =>
  import("../assets/icons/control/right-align.svg"),
);
const VerticalAlignRight = loadableForSvg(() =>
  import("../assets/icons/control/align_right.svg"),
);
const VerticalAlignLeft = loadableForSvg(() =>
  import("../assets/icons/control/align_left.svg"),
);
const VerticalAlignBottom = loadableForSvg(() =>
  import("../assets/icons/control/vertical_align_bottom.svg"),
);
const VerticalAlignCenter = loadableForSvg(() =>
  import("../assets/icons/control/vertical_align_center.svg"),
);
const VerticalAlignTop = loadableForSvg(() =>
  import("../assets/icons/control/vertical_align_top.svg"),
);
const Copy2Icon = loadableForSvg(() =>
  import("../assets/icons/control/copy2.svg"),
);
const CutIcon = loadableForSvg(() => import("../assets/icons/control/cut.svg"));
const GroupIcon = loadableForSvg(() =>
  import("../assets/icons/control/group.svg"),
);
const HeadingOneIcon = loadableForSvg(() =>
  import("../assets/icons/control/heading_1.svg"),
);
const HeadingTwoIcon = loadableForSvg(() =>
  import("../assets/icons/control/heading_2.svg"),
);
const HeadingThreeIcon = loadableForSvg(() =>
  import("../assets/icons/control/heading_3.svg"),
);
const ParagraphIcon = loadableForSvg(() =>
  import("../assets/icons/control/paragraph.svg"),
);
const ParagraphTwoIcon = loadableForSvg(() =>
  import("../assets/icons/control/paragraph_2.svg"),
);
const BulletsIcon = loadableForSvg(() =>
  import("../assets/icons/control/bullets.svg"),
);
const DividerCapRightIcon = loadableForSvg(() =>
  import("../assets/icons/control/divider_cap_right.svg"),
);
const DividerCapLeftIcon = loadableForSvg(() =>
  import("../assets/icons/control/divider_cap_left.svg"),
);
const DividerCapAllIcon = loadableForSvg(() =>
  import("../assets/icons/control/divider_cap_all.svg"),
);
const TrendingFlat = loadableForSvg(() =>
  import("../assets/icons/ads/trending-flat.svg"),
);
const AlignLeftIcon = loadableForSvg(() =>
  import("../assets/icons/control/align_left.svg"),
);
const AlignRightIcon = loadableForSvg(() =>
  import("../assets/icons/control/align_right.svg"),
);
const BorderRadiusSharpIcon = loadableForSvg(() =>
  import("../assets/icons/control/border-radius-sharp.svg"),
);
const BorderRadiusRoundedIcon = loadableForSvg(() =>
  import("../assets/icons/control/border-radius-rounded.svg"),
);
const BorderRadiusCircleIcon = loadableForSvg(() =>
  import("../assets/icons/control/border-radius-circle.svg"),
);
const BoxShadowNoneIcon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-none.svg"),
);
const BoxShadowVariant1Icon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-variant1.svg"),
);
const BoxShadowVariant2Icon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-variant2.svg"),
);
const BoxShadowVariant3Icon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-variant3.svg"),
);
const BoxShadowVariant4Icon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-variant4.svg"),
);
const BoxShadowVariant5Icon = loadableForSvg(() =>
  import("../assets/icons/control/box-shadow-variant5.svg"),
);
const IncreaseV2Icon = loadableForRemixIcons(() =>
  import("remixicon-react/AddLineIcon"),
);
const CopyIcon = loadableForRemixIcons(() =>
  import("remixicon-react/FileCopyLineIcon"),
);
const QuestionIcon = loadableForRemixIcons(() =>
  import("remixicon-react/QuestionLineIcon"),
);
const SettingsIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Settings5LineIcon"),
);
const EyeIcon = loadableForRemixIcons(() =>
  import("remixicon-react/EyeLineIcon"),
);
const EyeOffIcon = loadableForRemixIcons(() =>
  import("remixicon-react/EyeOffLineIcon"),
);
const CloseIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CloseLineIcon"),
);
const SubtractIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SubtractFillIcon"),
);

/* eslint-disable react/display-name */

export const ControlIcons: {
  [id: string]: JSXElementConstructor<IconProps>;
} = {
  DELETE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DeleteIcon />
    </IconWrapper>
  ),
  MOVE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <MoveIcon />
    </IconWrapper>
  ),
  EDIT_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <EditIcon />
    </IconWrapper>
  ),
  VIEW_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <ViewIcon />
    </IconWrapper>
  ),
  MORE_VERTICAL_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <MoreVerticalIcon />
    </IconWrapper>
  ),
  MORE_HORIZONTAL_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <OverflowMenuIcon />
    </IconWrapper>
  ),
  JS_TOGGLE: (props: IconProps) => (
    <IconWrapper {...props}>
      <JsToggleIcon />
    </IconWrapper>
  ),
  INCREASE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <IncreaseIcon />
    </IconWrapper>
  ),
  DECREASE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DecreaseIcon />
    </IconWrapper>
  ),
  DRAGGABLE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DraggableIcon />
    </IconWrapper>
  ),
  CLOSE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CloseIcon />
    </IconWrapper>
  ),
  CLOSE_CIRCLE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CloseCircleIcon />
    </IconWrapper>
  ),
  ADD_CIRCLE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <AddCircleIcon />
    </IconWrapper>
  ),
  PICK_MY_LOCATION_SELECTED_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <PickMyLocationSelectedIcon />
    </IconWrapper>
  ),
  SETTINGS_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <SettingsIcon />
    </IconWrapper>
  ),
  HELP_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <HelpIcon />
    </IconWrapper>
  ),
  PLAY_VIDEO: (props: IconProps) => (
    <IconWrapper {...props}>
      <img
        alt="Datasource"
        src={PlayIcon}
        style={{ height: "30px", width: "30px" }}
      />
    </IconWrapper>
  ),
  REMOVE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <RemoveIcon />
    </IconWrapper>
  ),
  DRAG_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DragIcon />
    </IconWrapper>
  ),
  COLLAPSE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CollapseIcon />
    </IconWrapper>
  ),
  SORT_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <SortIcon />
    </IconWrapper>
  ),
  EDIT_WHITE: (props: IconProps) => (
    <IconWrapper {...props}>
      <EditWhiteIcon />
    </IconWrapper>
  ),
  LAUNCH_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <LaunchIcon />
    </IconWrapper>
  ),
  BACK_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <BackIcon />
    </IconWrapper>
  ),
  SHOW_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <EyeIcon />
    </IconWrapper>
  ),
  HIDE_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <EyeOffIcon />
    </IconWrapper>
  ),
  DELETE_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <DeleteColumnIcon />
    </IconWrapper>
  ),
  BOLD_FONT: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoldFontIcon />
    </IconWrapper>
  ),
  UNDERLINE: (props: IconProps) => (
    <IconWrapper {...props}>
      <UnderlineIcon />
    </IconWrapper>
  ),
  ITALICS_FONT: (props: IconProps) => (
    <IconWrapper {...props}>
      <ItalicsFontIcon />
    </IconWrapper>
  ),
  LEFT_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <LeftAlignIcon />
    </IconWrapper>
  ),
  CENTER_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <CenterAlignIcon />
    </IconWrapper>
  ),
  RIGHT_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <RightAlignIcon />
    </IconWrapper>
  ),
  VERTICAL_RIGHT: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignRight />
    </IconWrapper>
  ),
  VERTICAL_LEFT: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignLeft />
    </IconWrapper>
  ),
  VERTICAL_TOP: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignTop />
    </IconWrapper>
  ),
  VERTICAL_CENTER: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignCenter />
    </IconWrapper>
  ),
  VERTICAL_BOTTOM: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignBottom />
    </IconWrapper>
  ),
  COPY_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CopyIcon />
    </IconWrapper>
  ),
  COPY2_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <Copy2Icon />
    </IconWrapper>
  ),
  CUT_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CutIcon />
    </IconWrapper>
  ),
  GROUP_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <GroupIcon />
    </IconWrapper>
  ),
  HEADING_ONE: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingOneIcon />
    </IconWrapper>
  ),
  HEADING_TWO: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingTwoIcon />
    </IconWrapper>
  ),
  HEADING_THREE: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingThreeIcon />
    </IconWrapper>
  ),
  PARAGRAPH: (props: IconProps) => (
    <IconWrapper {...props}>
      <ParagraphIcon />
    </IconWrapper>
  ),
  PARAGRAPH_TWO: (props: IconProps) => (
    <IconWrapper {...props}>
      <ParagraphTwoIcon />
    </IconWrapper>
  ),
  BULLETS: (props: IconProps) => (
    <IconWrapper {...props}>
      <BulletsIcon />
    </IconWrapper>
  ),
  DIVIDER_CAP_RIGHT: (props: IconProps) => (
    <IconWrapper {...props}>
      <DividerCapRightIcon />
    </IconWrapper>
  ),
  DIVIDER_CAP_LEFT: (props: IconProps) => (
    <IconWrapper {...props}>
      <DividerCapLeftIcon />
    </IconWrapper>
  ),
  DIVIDER_CAP_ALL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DividerCapAllIcon />
    </IconWrapper>
  ),
  BIND_DATA_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <TrendingFlat />
    </IconWrapper>
  ),
  ICON_ALIGN_LEFT: (props: IconProps) => (
    <IconWrapper {...props}>
      <AlignLeftIcon />
    </IconWrapper>
  ),
  ICON_ALIGN_RIGHT: (props: IconProps) => (
    <IconWrapper {...props}>
      <AlignRightIcon />
    </IconWrapper>
  ),
  BORDER_RADIUS_SHARP: (props: IconProps) => (
    <IconWrapper {...props}>
      <BorderRadiusSharpIcon />
    </IconWrapper>
  ),
  BORDER_RADIUS_ROUNDED: (props: IconProps) => (
    <IconWrapper {...props}>
      <BorderRadiusRoundedIcon />
    </IconWrapper>
  ),
  BORDER_RADIUS_CIRCLE: (props: IconProps) => (
    <IconWrapper {...props}>
      <BorderRadiusCircleIcon />
    </IconWrapper>
  ),
  BOX_SHADOW_NONE: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowNoneIcon />
    </IconWrapper>
  ),
  BOX_SHADOW_VARIANT1: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowVariant1Icon />
    </IconWrapper>
  ),
  BOX_SHADOW_VARIANT2: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowVariant2Icon />
    </IconWrapper>
  ),
  BOX_SHADOW_VARIANT3: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowVariant3Icon />
    </IconWrapper>
  ),
  BOX_SHADOW_VARIANT4: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowVariant4Icon />
    </IconWrapper>
  ),
  BOX_SHADOW_VARIANT5: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoxShadowVariant5Icon />
    </IconWrapper>
  ),
  INCREASE_CONTROL_V2: (props: IconProps) => (
    <IconWrapper {...props}>
      <IncreaseV2Icon />
    </IconWrapper>
  ),
  QUESTION: (props: IconProps) => (
    <IconWrapper {...props}>
      <QuestionIcon />
    </IconWrapper>
  ),
  COLUMN_UNFREEZE: (props: IconProps) => (
    <IconWrapper {...props}>
      <SubtractIcon />
    </IconWrapper>
  ),
};

export type ControlIconName = keyof typeof ControlIcons;
