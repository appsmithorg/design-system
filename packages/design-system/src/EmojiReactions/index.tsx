import React from "react";
import styled from "styled-components";
import EmojiPicker from "EmojiPicker";
import { IconSize } from "Icon";
import TooltipComponent from "Tooltip";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Bubble = styled.div<{ active?: boolean }>`
  --ads-emoji-reactions-bubble-background-color: var(--ads-color-background-secondary);
  --ads-emoji-reactions-bubble-active-background-color: var(--ads-color-brand-secondary-active);
  --ads-emoji-reactions-bubble-active-border-color: var(--ads-color-border-active);
  --ads-emoji-reactions-bubble-hover-background-color: var(--ads-color-brand-secondary-hover);
  --ads-emoji-reactions-count-text-color: var(--ads-color-text);
  --ads-emoji-reactions-count-active-text-color: var(--ads-color-text-active);
  --ads-emoji-reactions-count-hover-text-color: var(--ads-color-text-hover);

  font-size: 12px; // emoji
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px var(--ads-spaces-1);

  background-color: ${(props) =>
    props.active
      ? `var(--ads-emoji-reactions-bubble-active-background-color)`
      : `var(--ads-emoji-reactions-bubble-background-color)`};

  ${(props) =>
    !props.active &&
    `
    &:hover {
      background-color: var(--ads-emoji-reactions-bubble-hover-background-color);
    }
  `}

  border: 1px solid
    ${(props) =>
      props.active
        ? "var(--ads-emoji-reactions-bubble-active-border-color)"
        : "transparent"};

  border-radius: var(--ads-radius-4);
  margin-right: var(--ads-spaces-1);

  & span.emoji {
    /*
    * center align emoji for non-retina displays
    * https://bugs.chromium.org/p/chromium/issues/detail?id=551420#c15
    * ref: https://stackoverflow.com/a/31578187/1543567 (mq for non-retina displays)
    */
    @media not screen and (-webkit-min-device-pixel-ratio: 2),
      not screen and (min--moz-device-pixel-ratio: 2),
      not screen and (-o-min-device-pixel-ratio: 2/1),
      not screen and (min-device-pixel-ratio: 2),
      not screen and (min-resolution: 192dpi),
      not screen and (min-resolution: 2dppx) {
      /* margin-right: 3px;*/
    }
  }
`;

const Count = styled.div<{ active?: boolean }>`
  display: inline;
  color: ${(props) =>
    props.active
      ? "var(--ads-emoji-reactions-count-active-text-color)"
      : "var(--ads-emoji-reactions-count-text-color)"};
  max-width: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 2px;
  ${(props) =>
    !props.active &&
    `
  ${Bubble}: hover & {
    color: var(--ads-emoji-reactions-count-hover-text-color);
  }
`}
`;

const ReactionsByContainer = styled.span`
  max-width: 200px;
  display: inline-block;
`;

function ReactionsBy(props: { reaction: Reaction }) {
  const { reaction } = props;

  if (!reaction?.users) return null;
  const isSliced = reaction?.users.length > 5;
  const users = reaction?.users.slice(0, 5);

  if (isSliced) users.push("...");
  if (reaction.active) users.unshift("You");

  return <ReactionsByContainer>{users.join(", ")}</ReactionsByContainer>;
}

export type Reaction = {
  count: number;
  reactionEmoji: string;
  active?: boolean;
  users?: Array<string>;
};

export type Reactions = Record<string, Reaction>;

const transformReactions = (reactions: Reactions): Array<Reaction> => {
  return Object.keys(reactions).map((emojiReaction: string) => ({
    ...reactions[emojiReaction],
    emojiReaction,
  }));
};

export enum ReactionOperation {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

function EmojiReactions({
  onSelectReaction,
  reactions = {},
  hideReactions = false,
  iconSize = IconSize.XXL,
}: {
  onSelectReaction: (
    event: React.MouseEvent,
    emojiData: string,
    updatedReactions: Reactions,
    addOrRemove: ReactionOperation,
  ) => void;
  reactions?: Reactions;
  hideReactions?: boolean;
  iconSize?: IconSize;
}) {
  const handleSelectReaction = (
    _event: React.MouseEvent,
    emojiData: string,
  ) => {
    const reactionsObject = reactions[emojiData];
    let addOrRemove;
    if (reactionsObject) {
      if (reactionsObject.active) {
        addOrRemove = ReactionOperation.REMOVE;
        reactions[emojiData] = {
          active: false,
          reactionEmoji: emojiData,
          count: reactionsObject.count - 1,
        };
        if (reactions[emojiData].count === 0) delete reactions[emojiData];
      } else {
        addOrRemove = ReactionOperation.ADD;
        reactions[emojiData] = {
          active: true,
          reactionEmoji: emojiData,
          count: reactionsObject.count + 1,
        };
      }
    } else {
      addOrRemove = ReactionOperation.ADD;
      reactions[emojiData] = {
        active: true,
        reactionEmoji: emojiData,
        count: 1,
      };
    }
    onSelectReaction(
      _event,
      emojiData,
      { ...reactions },
      addOrRemove as ReactionOperation,
    );
  };

  return (
    <Container>
      {!hideReactions &&
        transformReactions(reactions).map((reaction: Reaction) => (
          <TooltipComponent
            boundary={"viewport"}
            content={<ReactionsBy reaction={reaction} />}
            disabled={!reaction.users || reaction.users.length === 0}
            key={reaction.reactionEmoji}
            modifiers={{ preventOverflow: { enabled: true } }}
          >
            <Bubble
              active={reaction.active}
              onClick={(e) => handleSelectReaction(e, reaction.reactionEmoji)}
            >
              <span className="emoji">{reaction.reactionEmoji}</span>
              {reaction.count > 1 && (
                <Count active={reaction.active}>{reaction.count}</Count>
              )}
            </Bubble>
          </TooltipComponent>
        ))}
      {!hideReactions ? (
        <Bubble>
          <EmojiPicker
            iconName="emoji"
            iconSize={iconSize}
            onSelectEmoji={(e, emoji) => handleSelectReaction(e, emoji.native)}
          />
        </Bubble>
      ) : (
        <EmojiPicker
          iconName="emoji"
          iconSize={iconSize}
          onSelectEmoji={(e, emoji) => handleSelectReaction(e, emoji.native)}
        />
      )}
    </Container>
  );
}

export default EmojiReactions;
