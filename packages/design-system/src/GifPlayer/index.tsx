import React, { useState } from "react";
import styled from "styled-components";
import Icon, { IconSize } from "Icon";
import Text, { TextType } from "Text";
import { Classes } from "Constants/classes";

type GifPlayerProps = {
  gif: string;
  thumbnail: string;
};

const PlayButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .${Classes.ICON} {
    svg {
      width: 34px;
      height: 34px;
      margin-right: 0px;
      path {
        fill: var(--ads-gif-player-icon-path-fill-color);
      }
      circle {
        fill: var(--ads-gif-player-icon-circle-fill-color);
      }
    }
  }
  .${Classes.TEXT} {
    color: var(--ads-gif-player-text-color);
    margin-top: var(--ads-spaces-3);
  }
`;

const ThumbnailContainer = styled.div`
  --ads-gif-player-icon-path-fill-color: var(
    --ads-color-onbrand-secondary-text
  );
  --ads-gif-player-icon-circle-fill-color: var(--ads-color-brand-secondary);
  --ads-gif-player-text-color: var(--ads-color-text);
  --ads-gif-player-overlay-background-color: var(--ads-color-background);

  position: relative;
  cursor: pointer;
  border-radius: var(--ads-border-radius);

  & img {
    border-radius: var(--ads-border-radius);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--ads-border-radius);
  background: var(--ads-gif-player-overlay-background-color);
  opacity: 0.7;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`;

function GifPlayer(props: GifPlayerProps) {
  const [startGif, setStartGif] = useState(false);
  return !startGif ? (
    <ThumbnailContainer onClick={() => setStartGif(!startGif)}>
      <Overlay />
      <img src={props.thumbnail} />
      <PlayButton>
        <Icon name="play" size={IconSize.XXXL} />
        <Text type={TextType.P3}>Click to play</Text>
      </PlayButton>
    </ThumbnailContainer>
  ) : (
    <img src={props.gif} />
  );
}

export default GifPlayer;
