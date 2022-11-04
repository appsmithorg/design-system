import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ active: boolean }>`
  --ads-statusbar-active-background-color: var(--ads-color-brand);
  --ads-statusbar-height: 92px;
  --ads-statusbar-active-p-text-color: var(--ads-color-white);
  --ads-statusbar-active-svg-fill-color: var(--ads-color-white);
  --ads-statusbar-status-text-color: var(--ads-old-color-black);
  --ads-statusbar-progress-bar-active-background-color: var(
    --ads-old-color-crusta
  );
  --ads-statusbar-progress-bar-background-color: var(--ads-color-white);

  position: relative;
  width: 100%;
  background-color: ${(props) =>
    props.active ? "var(--ads-statusbar-active-background-color)" : ""};
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  height: var(--ads-statusbar-height);
  transition: background-color 0.3s ease;
  border-radius: var(--ads-border-radius);

  ${(props) =>
    props.active &&
    `
      p {
        color: var(--ads-statusbar-active-p-text-color);
      }
      svg {
        fill: var(--ads-statusbar-active-svg-fill-color);
      }
  `}

  &:hover .hover-icons {
    opacity: 1;
  }
`;

const StatusText = styled.p`
  color: var(--ads-statusbar-status-text-color);
  font-size: 12px;
  line-height: 12px;
  margin-top: var(--ads-spaces-3);
  & .hover-icons {
    transform: translate(3px, 0px);
    opacity: 0;
  }
`;

const ProgressContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.2);
  overflow: hidden;
  margin-top: 12px;
  border-radius: var(--ads-border-radius);
`;

const Progressbar = styled.div<StatusProgressbarType>`
  width: ${(props) => props.percentage}%;
  height: 8px;
  background: ${(props) =>
    props.active
      ? "var(--ads-statusbar-progress-bar-background-color)"
      : "var(--ads-statusbar-progress-bar-active-background-color)"};
  transition: width 0.3s ease, background 0.3s ease;
`;

type StatusProgressbarType = {
  percentage: number;
  active: boolean;
};

export function StatusProgressbar(props: StatusProgressbarType) {
  return (
    <ProgressContainer>
      <Progressbar {...props} />
    </ProgressContainer>
  );
}

type StatusbarProps = {
  percentage: number;
  active: boolean;
  message?: string;
  showOnlyMessage?: boolean;
};

export default function OnboardingStatusbar(props: StatusbarProps) {
  const { active, message, percentage, showOnlyMessage } = props;
  const displayMessage = showOnlyMessage
    ? message
    : `${percentage}% ${message}`;
  return (
    <Wrapper active={active} data-testid="statusbar-container">
      <StatusProgressbar
        active={active}
        data-testid="statusbar-text"
        percentage={percentage}
      />
      <StatusText>
        <span data-testid="statusbar-text">{displayMessage}</span>
      </StatusText>
    </Wrapper>
  );
}
