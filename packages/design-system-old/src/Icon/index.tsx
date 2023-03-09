import React, { forwardRef, Ref } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";
import { noop } from "lodash";
import Spinner from "Spinner";
import { ControlIcons } from "ControlIcons";
import { loadableForRemixIcons, loadableForSvg } from "utils/icon-loadables";

const BookLineIcon = loadableForSvg(() =>
  import("../assets/icons/ads/book-open-line.svg"),
);
const BugIcon = loadableForSvg(() => import("../assets/icons/ads/bug.svg"));
const CancelIcon = loadableForSvg(() =>
  import("../assets/icons/ads/cancel.svg"),
);
const CrossIcon = loadableForSvg(() => import("../assets/icons/ads/cross.svg"));
const Fork2Icon = loadableForSvg(() =>
  import("../assets/icons/ads/fork-2.svg"),
);
const OpenIcon = loadableForSvg(() => import("../assets/icons/ads/open.svg"));
const UserIcon = loadableForSvg(() => import("../assets/icons/ads/user.svg"));
const GeneralIcon = loadableForSvg(() =>
  import("../assets/icons/ads/general.svg"),
);
const BillingIcon = loadableForSvg(() =>
  import("../assets/icons/ads/billing.svg"),
);
const ErrorIcon = loadableForSvg(() => import("../assets/icons/ads/error.svg"));
const ShineIcon = loadableForSvg(() => import("../assets/icons/ads/shine.svg"));
const SuccessIcon = loadableForSvg(() =>
  import("../assets/icons/ads/success.svg"),
);
const CloseIcon = loadableForSvg(() => import("../assets/icons/ads/close.svg"));
const WarningTriangleIcon = loadableForSvg(() =>
  import("../assets/icons/ads/warning-triangle.svg"),
);
const ShareIcon2 = loadableForSvg(() =>
  import("../assets/icons/ads/share-2.svg"),
);
const InviteUserIcon = loadableForSvg(() =>
  import("../assets/icons/ads/invite-users.svg"),
);
const ManageIcon = loadableForSvg(() =>
  import("../assets/icons/ads/manage.svg"),
);
const ArrowLeft = loadableForSvg(() =>
  import("../assets/icons/ads/arrow-left.svg"),
);
const ChevronLeft = loadableForSvg(() =>
  import("../assets/icons/ads/chevron_left.svg"),
);
const LinkIcon = loadableForSvg(() => import("../assets/icons/ads/link.svg"));
const NoResponseIcon = loadableForSvg(() =>
  import("../assets/icons/ads/no-response.svg"),
);
const LightningIcon = loadableForSvg(() =>
  import("../assets/icons/ads/lightning.svg"),
);
const TrendingFlat = loadableForSvg(() =>
  import("../assets/icons/ads/trending-flat.svg"),
);
const PlayIcon = loadableForSvg(() => import("../assets/icons/ads/play.svg"));
const DesktopIcon = loadableForSvg(() =>
  import("../assets/icons/ads/desktop.svg"),
);
const WandIcon = loadableForSvg(() => import("../assets/icons/ads/wand.svg"));
const MobileIcon = loadableForSvg(() =>
  import("../assets/icons/ads/mobile.svg"),
);
const TabletIcon = loadableForSvg(() =>
  import("../assets/icons/ads/tablet.svg"),
);
const TabletLandscapeIcon = loadableForSvg(() =>
  import("../assets/icons/ads/tablet-landscape.svg"),
);
const FluidIcon = loadableForSvg(() => import("../assets/icons/ads/fluid.svg"));
const CardContextMenu = loadableForSvg(() =>
  import("../assets/icons/ads/card-context-menu.svg"),
);
const SendButton = loadableForSvg(() =>
  import("../assets/icons/comments/send-button.svg"),
);
const Pin = loadableForSvg(() => import("../assets/icons/comments/pin.svg"));
const TrashOutline = loadableForSvg(() =>
  import("../assets/icons/form/trash.svg"),
);
const ReadPin = loadableForSvg(() =>
  import("../assets/icons/comments/read-pin.svg"),
);
const UnreadPin = loadableForSvg(() =>
  import("../assets/icons/comments/unread-pin.svg"),
);
const Chat = loadableForSvg(() => import("../assets/icons/comments/chat.svg"));
const Unpin = loadableForSvg(() =>
  import("../assets/icons/comments/unpinIcon.svg"),
);
const Reaction = loadableForSvg(() =>
  import("../assets/icons/comments/reaction.svg"),
);
const Reaction2 = loadableForSvg(() =>
  import("../assets/icons/comments/reaction-2.svg"),
);
const Upload = loadableForSvg(() => import("../assets/icons/ads/upload.svg"));
const ArrowForwardIcon = loadableForSvg(() =>
  import("../assets/icons/control/arrow_forward.svg"),
);
const DoubleArrowRightIcon = loadableForSvg(() =>
  import("../assets/icons/ads/double-arrow-right.svg"),
);
const CapSolidIcon = loadableForSvg(() =>
  import("../assets/icons/control/cap_solid.svg"),
);
const CapDotIcon = loadableForSvg(() =>
  import("../assets/icons/control/cap_dot.svg"),
);
const LineDottedIcon = loadableForSvg(() =>
  import("../assets/icons/control/line_dotted.svg"),
);
const LineDashedIcon = loadableForSvg(() =>
  import("../assets/icons/control/line_dashed.svg"),
);
const TableIcon = loadableForSvg(() =>
  import("../assets/icons/ads/tables.svg"),
);
const ColumnIcon = loadableForSvg(() =>
  import("../assets/icons/ads/column.svg"),
);
const GearIcon = loadableForSvg(() => import("../assets/icons/ads/gear.svg"));
const UserV2Icon = loadableForSvg(() =>
  import("../assets/icons/ads/user-v2.svg"),
);
const SupportIcon = loadableForSvg(() =>
  import("../assets/icons/ads/support.svg"),
);
const Snippet = loadableForSvg(() => import("../assets/icons/ads/snippet.svg"));
const WorkspaceIcon = loadableForSvg(() =>
  import("../assets/icons/ads/workspaceIcon.svg"),
);
const SettingIcon = loadableForSvg(() =>
  import("../assets/icons/control/settings.svg"),
);
const DropdownIcon = loadableForSvg(() =>
  import("../assets/icons/ads/dropdown.svg"),
);
const ChatIcon = loadableForSvg(() =>
  import("../assets/icons/ads/app-icons/chat.svg"),
);
const JsIcon = loadableForSvg(() => import("../assets/icons/ads/js.svg"));
const ExecuteIcon = loadableForSvg(() =>
  import("../assets/icons/ads/execute.svg"),
);
const PackageIcon = loadableForSvg(() =>
  import("../assets/icons/ads/package.svg"),
);

// remix icons
const AddMoreIcon = loadableForRemixIcons(() =>
  import("remixicon-react/AddCircleLineIcon"),
);
const AddMoreFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/AddCircleFillIcon"),
);
const ArrowLeftRightIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowLeftRightLineIcon"),
);
const ArrowDownLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowDownLineIcon"),
);
const BookIcon = loadableForRemixIcons(() =>
  import("remixicon-react/BookOpenLineIcon"),
);
const BugLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/BugLineIcon"),
);
const ChevronRight = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowRightSFillIcon"),
);
const CheckLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CheckLineIcon"),
);
const CloseLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CloseLineIcon"),
);
const CloseCircleIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CloseCircleFillIcon"),
);
const CloudOfflineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CloudOffLineIcon"),
);
const CommentContextMenu = loadableForRemixIcons(() =>
  import("remixicon-react/More2FillIcon"),
);
const More2FillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/More2FillIcon"),
);
const CompassesLine = loadableForRemixIcons(() =>
  import("remixicon-react/CompassesLineIcon"),
);
const ContextMenuIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MoreFillIcon"),
);
const CreateNewIcon = loadableForRemixIcons(() =>
  import("remixicon-react/AddLineIcon"),
);
const Database2Line = loadableForRemixIcons(() =>
  import("remixicon-react/Database2LineIcon"),
);
const DatasourceIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CloudFillIcon"),
);
const DeleteBin7 = loadableForRemixIcons(() =>
  import("remixicon-react/DeleteBin7LineIcon"),
);
const DiscordIcon = loadableForRemixIcons(() =>
  import("remixicon-react/DiscordLineIcon"),
);
const DownArrow = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowDownSFillIcon"),
);
const Download = loadableForRemixIcons(() =>
  import("remixicon-react/DownloadCloud2LineIcon"),
);
const DuplicateIcon = loadableForRemixIcons(() =>
  import("remixicon-react/FileCopyLineIcon"),
);
const EditIcon = loadableForRemixIcons(() =>
  import("remixicon-react/PencilFillIcon"),
);
const EditLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/EditLineIcon"),
);
const EditUnderlineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/EditLineIcon"),
);
const Emoji = loadableForRemixIcons(() =>
  import("remixicon-react/EmotionLineIcon"),
);
const ExpandMore = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowDownSLineIcon"),
);
const DownArrowIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowDownSLineIcon"),
);
const ExpandLess = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowUpSLineIcon"),
);
const EyeOn = loadableForRemixIcons(() =>
  import("remixicon-react/EyeLineIcon"),
);
const EyeOff = loadableForRemixIcons(() =>
  import("remixicon-react/EyeOffLineIcon"),
);
const FileTransfer = loadableForRemixIcons(() =>
  import("remixicon-react/FileTransferLineIcon"),
);
const FileLine = loadableForRemixIcons(() =>
  import("remixicon-react/FileLineIcon"),
);
const Filter = loadableForRemixIcons(() =>
  import("remixicon-react/Filter2FillIcon"),
);
const ForbidLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ForbidLineIcon"),
);
const GitMerge = loadableForRemixIcons(() =>
  import("remixicon-react/GitMergeLineIcon"),
);
const GitCommit = loadableForRemixIcons(() =>
  import("remixicon-react/GitCommitLineIcon"),
);
const GitPullRequst = loadableForRemixIcons(() =>
  import("remixicon-react/GitPullRequestLineIcon"),
);
const GlobalLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/GlobalLineIcon"),
);
const GuideIcon = loadableForRemixIcons(() =>
  import("remixicon-react/GuideFillIcon"),
);
const HelpIcon = loadableForRemixIcons(() =>
  import("remixicon-react/QuestionMarkIcon"),
);
const LightbulbFlashLine = loadableForRemixIcons(() =>
  import("remixicon-react/LightbulbFlashLineIcon"),
);
const LinksLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LinksLineIcon"),
);
const InfoIcon = loadableForRemixIcons(() =>
  import("remixicon-react/InformationLineIcon"),
);
const KeyIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Key2LineIcon"),
);
const LeftArrowIcon2 = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowLeftSLineIcon"),
);
const Link2 = loadableForRemixIcons(() => import("remixicon-react/LinkIcon"));
const LeftArrowIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowLeftLineIcon"),
);
const NewsPaperLine = loadableForRemixIcons(() =>
  import("remixicon-react/NewspaperLineIcon"),
);
const OvalCheck = loadableForRemixIcons(() =>
  import("remixicon-react/CheckboxCircleLineIcon"),
);
const OvalCheckFill = loadableForRemixIcons(() =>
  import("remixicon-react/CheckboxCircleFillIcon"),
);
const Pin3 = loadableForRemixIcons(() =>
  import("remixicon-react/Pushpin2FillIcon"),
);
const PlayCircleLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/PlayCircleLineIcon"),
);
const QueryIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CodeSSlashLineIcon"),
);
const RemoveIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SubtractLineIcon"),
);
const RightArrowIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowRightLineIcon"),
);
const RightArrowIcon2 = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowRightSLineIcon"),
);
const RocketIcon = loadableForRemixIcons(() =>
  import("remixicon-react/RocketLineIcon"),
);
const SearchIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SearchLineIcon"),
);
const SortAscIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SortAscIcon"),
);
const SortDescIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SortDescIcon"),
);
const ShareBoxLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ShareBoxLineIcon"),
);
const ShareBoxFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ShareBoxFillIcon"),
);
const ShareForwardIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ShareForwardFillIcon"),
);
const Trash = loadableForRemixIcons(() =>
  import("remixicon-react/DeleteBinLineIcon"),
);
const UpArrow = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowUpSFillIcon"),
);
const WarningIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ErrorWarningFillIcon"),
);
const WarningLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ErrorWarningLineIcon"),
);
const LoginIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LoginBoxLineIcon"),
);
const LogoutIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LogoutBoxRLineIcon"),
);
const ShareLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ShareLineIcon"),
);
const LoaderLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LoaderLineIcon"),
);
const WidgetIcon = loadableForRemixIcons(() =>
  import("remixicon-react/FunctionLineIcon"),
);
const RefreshLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/RefreshLineIcon"),
);
const GitBranchLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/GitBranchLineIcon"),
);
const EditBoxLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/EditBoxLineIcon"),
);
const StarLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/StarLineIcon"),
);
const StarFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/StarFillIcon"),
);
const Settings2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Settings2LineIcon"),
);
const DownloadIcon = loadableForRemixIcons(() =>
  import("remixicon-react/DownloadLineIcon"),
);
const UploadCloud2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UploadCloud2LineIcon"),
);
const DownloadLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/DownloadLineIcon"),
);
const UploadLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UploadLineIcon"),
);
const FileListLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/FileListLineIcon"),
);
const HamburgerIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MenuLineIcon"),
);
const MagicLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MagicLineIcon"),
);
const UserHeartLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserHeartLineIcon"),
);
const DvdLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/DvdLineIcon"),
);
const Group2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Group2LineIcon"),
);
const CodeViewIcon = loadableForRemixIcons(() =>
  import("remixicon-react/CodeViewIcon"),
);
const GroupLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/GroupLineIcon"),
);
const ArrowRightUpLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowRightUpLineIcon"),
);
const MailCheckLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MailCheckLineIcon"),
);
const UserFollowLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserFollowLineIcon"),
);
const AddBoxLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/AddBoxLineIcon"),
);
const ArrowRightSFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowRightSFillIcon"),
);
const ArrowDownSFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowDownSFillIcon"),
);
const MailLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MailLineIcon"),
);
const LockPasswordLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LockPasswordLineIcon"),
);
const Timer2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Timer2LineIcon"),
);
const MapPin2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MapPin2LineIcon"),
);
const User3LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/User3LineIcon"),
);
const User2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/User2LineIcon"),
);
const Key2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Key2LineIcon"),
);
const FileList2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/FileList2LineIcon"),
);
const Lock2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/Lock2LineIcon"),
);
const SearchEyeLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SearchEyeLineIcon"),
);
const AlertLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/AlertLineIcon"),
);
const SettingsLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/SettingsLineIcon"),
);
const LockUnlockLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/LockUnlockLineIcon"),
);
const PantoneLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/PantoneLineIcon"),
);
const QuestionFillIcon = loadableForRemixIcons(() =>
  import("remixicon-react/QuestionFillIcon"),
);
const QuestionLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/QuestionLineIcon"),
);
const UserSharedLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserSharedLineIcon"),
);
const UserReceived2LineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserReceived2LineIcon"),
);
const UserAddLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserAddLineIcon"),
);
const UserUnfollowLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/UserUnfollowLineIcon"),
);
const DeleteRowIcon = loadableForRemixIcons(() =>
  import("remixicon-react/DeleteRowIcon"),
);
const ArrowUpLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/ArrowUpLineIcon"),
);
const MoneyDollarCircleLineIcon = loadableForRemixIcons(() =>
  import("remixicon-react/MoneyDollarCircleLineIcon"),
);

export enum IconSize {
  XXS = "extraExtraSmall",
  XS = "extraSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XL = "extraLarge",
  XXL = "extraExtraLarge",
  XXXL = "extraExtraExtraLarge",
  XXXXL = "extraExtraExtraExtraLarge",
}

const ICON_SIZE_LOOKUP = {
  [IconSize.XXS]: 8,
  [IconSize.XS]: 10,
  [IconSize.SMALL]: 12,
  [IconSize.MEDIUM]: 14,
  [IconSize.LARGE]: 15,
  [IconSize.XL]: 16,
  [IconSize.XXL]: 18,
  [IconSize.XXXL]: 20,
  [IconSize.XXXXL]: 22,
  undefined: 12,
};

export const sizeHandler = (size?: IconSize): number => {
  return (
    ICON_SIZE_LOOKUP[size as keyof typeof ICON_SIZE_LOOKUP] ||
    ICON_SIZE_LOOKUP[IconSize.SMALL]
  );
};

export const IconWrapper = styled.span<IconProps>`
  &:focus {
    outline: none;
  }

  display: flex;
  align-items: center;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : props.clickable ? "pointer" : "default"};
  svg {
    width: ${(props) => sizeHandler(props.size)}px;
    height: ${(props) => sizeHandler(props.size)}px;
    ${(props) =>
      !props.keepColors
        ? `
          fill: ${props.fillColor || ""};
          circle {
            fill: ${props.fillColor || ""};
          }
          path {
            fill: ${props.fillColor || ""};
          }
          `
        : ""};
    ${(props) => (props.invisible ? `visibility: hidden;` : null)};

    &:hover {
      ${(props) =>
        !props.keepColors
          ? `
            fill: ${props.hoverFillColor || ""};
            path {
              fill: ${props.hoverFillColor || ""};
            }
          `
          : ""}
    }
  }
`;

function getControlIcon(iconName: string) {
  const ControlIcon = ControlIcons[iconName];
  return <ControlIcon height={24} width={24} />;
}

const ICON_LOOKUP = {
  undefined: null,
  HEADING_ONE: getControlIcon("HEADING_ONE"),
  HEADING_THREE: getControlIcon("HEADING_THREE"),
  HEADING_TWO: getControlIcon("HEADING_TWO"),
  PARAGRAPH: getControlIcon("PARAGRAPH"),
  PARAGRAPH_TWO: getControlIcon("PARAGRAPH_TWO"),
  "add-box-line": <AddBoxLineIcon />,
  "add-more": <AddMoreIcon />,
  "add-more-fill": <AddMoreFillIcon />,
  "alert-line": <AlertLineIcon />,
  "arrow-down-s-fill": <ArrowDownSFillIcon />,
  "arrow-forward": <ArrowForwardIcon />,
  "arrow-left": <ArrowLeft />,
  "arrow-right-s-fill": <ArrowRightSFillIcon />,
  "arrow-right-up-line": <ArrowRightUpLineIcon />,
  "arrow-up-line": <ArrowUpLineIcon />,
  "book-line": <BookLineIcon />,
  "bug-line": <BugLineIcon />,
  "cap-dot": <CapDotIcon />,
  "cap-solid": <CapSolidIcon />,
  "card-context-menu": <CardContextMenu />,
  "chat-help": <ChatIcon />,
  "check-line": <CheckLineIcon />,
  "chevron-left": <ChevronLeft />,
  "chevron-right": <ChevronRight />,
  "close-circle": <CloseCircleIcon />,
  "close-modal": <CloseLineIcon />,
  "close-x": <CloseLineIcon />,
  "cloud-off-line": <CloudOfflineIcon />,
  "comment-context-menu": <CommentContextMenu />,
  "compasses-line": <CompassesLine />,
  "context-menu": <ContextMenuIcon />,
  "database-2-line": <Database2Line />,
  "delete-blank": <DeleteBin7 />,
  "delete-row": <DeleteRowIcon />,
  "double-arrow-right": <DoubleArrowRightIcon />,
  "down-arrow": <DownArrowIcon />,
  "down-arrow-2": <ArrowDownLineIcon />,
  "download-line": <DownloadLineIcon />,
  "edit-box-line": <EditBoxLineIcon />,
  "edit-line": <EditLineIcon />,
  "edit-underline": <EditUnderlineIcon />,
  "expand-less": <ExpandLess />,
  "expand-more": <ExpandMore />,
  "eye-off": <EyeOff />,
  "eye-on": <EyeOn />,
  "file-line": <FileLine />,
  "file-list-2-line": <FileList2LineIcon />,
  "file-list-line": <FileListLineIcon />,
  "file-transfer": <FileTransfer />,
  "fork-2": <Fork2Icon />,
  "forbid-line": <ForbidLineIcon />,
  "git-branch": <GitBranchLineIcon />,
  "git-commit": <GitCommit />,
  "git-pull-request": <GitPullRequst />,
  "global-line": <GlobalLineIcon />,
  "group-2-line": <Group2LineIcon />,
  "group-line": <GroupLineIcon />,
  "invite-user": <InviteUserIcon />,
  "key-2-line": <Key2LineIcon />,
  "left-arrow-2": <LeftArrowIcon2 />,
  "lightbulb-flash-line": <LightbulbFlashLine />,
  "line-dashed": <LineDashedIcon />,
  "line-dotted": <LineDottedIcon />,
  "link-2": <Link2 />,
  "links-line": <LinksLineIcon />,
  "lock-2-line": <Lock2LineIcon />,
  "lock-password-line": <LockPasswordLineIcon />,
  "lock-unlock-line": <LockUnlockLineIcon />,
  "magic-line": <MagicLineIcon />,
  "mail-check-line": <MailCheckLineIcon />,
  "mail-line": <MailLineIcon />,
  "map-pin-2-line": <MapPin2LineIcon />,
  "more-2-fill": <More2FillIcon />,
  "news-paper": <NewsPaperLine />,
  "no-response": <NoResponseIcon />,
  "oval-check": <OvalCheck />,
  "oval-check-fill": <OvalCheckFill />,
  "pin-3": <Pin3 />,
  "play-circle-line": <PlayCircleLineIcon />,
  "question-fill": <QuestionFillIcon />,
  "question-line": <QuestionLineIcon />,
  "reaction-2": <Reaction2 />,
  "read-pin": <ReadPin />,
  "right-arrow": <RightArrowIcon />,
  "right-arrow-2": <RightArrowIcon2 />,
  "search-eye-line": <SearchEyeLineIcon />,
  "send-button": <SendButton />,
  "settings-2-line": <Settings2LineIcon />,
  "settings-line": <SettingsLineIcon />,
  "share-2": <ShareIcon2 />,
  "share-box": <ShareBoxFillIcon />,
  "share-box-line": <ShareBoxLineIcon />,
  "share-line": <ShareLineIcon />,
  "sort-asc": <SortAscIcon />,
  "sort-desc": <SortDescIcon />,
  "star-fill": <StarFillIcon />,
  "star-line": <StarLineIcon />,
  "swap-horizontal": <ArrowLeftRightIcon />,
  "timer-2-line": <Timer2LineIcon />,
  "trash-outline": <TrashOutline />,
  "trending-flat": <TrendingFlat />,
  "unread-pin": <UnreadPin />,
  "upload-cloud": <UploadCloud2LineIcon />,
  "upload-line": <UploadLineIcon />,
  "user-2": <UserV2Icon />,
  "user-2-line": <User2LineIcon />,
  "user-3-line": <User3LineIcon />,
  "user-add-line": <UserAddLineIcon />,
  "user-follow-line": <UserFollowLineIcon />,
  "user-heart-line": <UserHeartLineIcon />,
  "user-received-2-line": <UserReceived2LineIcon />,
  "user-shared-line": <UserSharedLineIcon />,
  "user-unfollow-line": <UserUnfollowLineIcon />,
  "view-all": <RightArrowIcon />,
  "view-less": <LeftArrowIcon />,
  "warning-line": <WarningLineIcon />,
  "warning-triangle": <WarningTriangleIcon />,
  "money-dollar-circle-line": <MoneyDollarCircleLineIcon />,
  billing: <BillingIcon />,
  book: <BookIcon />,
  bug: <BugIcon />,
  cancel: <CancelIcon />,
  chat: <Chat />,
  close: <CloseIcon />,
  code: <CodeViewIcon />,
  column: <ColumnIcon />,
  cross: <CrossIcon />,
  danger: <ErrorIcon />,
  datasource: <DatasourceIcon />,
  delete: <Trash />,
  desktop: <DesktopIcon />,
  discord: <DiscordIcon />,
  downArrow: <DownArrow />,
  download2: <DownloadIcon />,
  download: <Download />,
  dropdown: <DropdownIcon />,
  duplicate: <DuplicateIcon />,
  edit: <EditIcon />,
  emoji: <Emoji />,
  enterprise: <MagicLineIcon />,
  error: <ErrorIcon />,
  execute: <ExecuteIcon />,
  filter: <Filter />,
  fluid: <FluidIcon />,
  fork: <GitMerge />,
  gear: <GearIcon />,
  general: <GeneralIcon />,
  guide: <GuideIcon />,
  hamburger: <HamburgerIcon />,
  help: <HelpIcon />,
  info: <InfoIcon />,
  js: <JsIcon />,
  key: <KeyIcon />,
  lightning: <LightningIcon />,
  link: <LinkIcon />,
  loader: <LoaderLineIcon />,
  login: <LoginIcon />,
  logout: <LogoutIcon />,
  manage: <ManageIcon />,
  member: <UserHeartLineIcon />,
  minus: <RemoveIcon />,
  mobile: <MobileIcon />,
  open: <OpenIcon />,
  pantone: <PantoneLineIcon />,
  pin: <Pin />,
  play: <PlayIcon />,
  plus: <CreateNewIcon />,
  query: <QueryIcon />,
  reaction: <Reaction />,
  refresh: <RefreshLineIcon />,
  rocket: <RocketIcon />,
  search: <SearchIcon />,
  setting: <SettingIcon />,
  share: <ShareForwardIcon />,
  shine: <ShineIcon />,
  snippet: <Snippet />,
  success: <SuccessIcon />,
  support: <SupportIcon />,
  tables: <TableIcon />,
  tablet: <TabletIcon />,
  tabletLandscape: <TabletLandscapeIcon />,
  trash: <Trash />,
  unpin: <Unpin />,
  upArrow: <UpArrow />,
  upgrade: <DvdLineIcon />,
  upload: <Upload />,
  user: <UserIcon />,
  wand: <WandIcon />,
  warning: <WarningIcon />,
  widget: <WidgetIcon />,
  workspace: <WorkspaceIcon />,
  package: <PackageIcon />,
};

export const IconCollection = Object.keys(ICON_LOOKUP);

export type IconName = typeof IconCollection[number];

export type IconProps = {
  size?: IconSize;
  name?: IconName;
  invisible?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  fillColor?: string;
  hoverFillColor?: string;
  keepColors?: boolean;
  loaderWithIconWrapper?: boolean;
  clickable?: boolean;
  disabled?: boolean;
};

const Icon = forwardRef(
  (
    { onClick, ...props }: IconProps & CommonComponentProps,
    ref: Ref<HTMLSpanElement>,
  ) => {
    const iconName = props.name;
    const returnIcon =
      ICON_LOOKUP[iconName as keyof typeof ICON_LOOKUP] || null;

    const clickable = props.clickable === undefined ? true : props.clickable;

    let loader = <Spinner size={props.size} />;
    if (props.loaderWithIconWrapper) {
      loader = (
        <IconWrapper className={Classes.ICON} clickable={clickable} {...props}>
          <Spinner size={props.size} />
        </IconWrapper>
      );
    }

    return returnIcon && !props.isLoading ? (
      <IconWrapper
        className={`${Classes.ICON} ${props.className}`}
        clickable={clickable}
        data-cy={props.cypressSelector}
        onClick={props.disabled ? noop : onClick}
        ref={ref}
        {...props}
      >
        {returnIcon}
      </IconWrapper>
    ) : props.isLoading ? (
      loader
    ) : null;
  },
);

Icon.displayName = "Icon";

export default React.memo(Icon);
