import React, { CSSProperties } from "react";
import styled from "styled-components";
import { typography } from "Constants/typography";

const StyledSegmentHeader = styled.div`
  padding: var(--ads-spaces-3) var(--ads-spaces-5);
  padding-right: 0;
  font-weight: ${typography["u2"].fontWeight};
  font-size: ${typography["u2"].fontSize}px;
  line-height: ${typography["u2"].lineHeight}px;
  letter-spacing: ${typography["u2"].letterSpacing}px;
  color: var(--ads-color-gray-7);
  display: flex;
  align-items: center;
`;

export type SegmentHeaderProps = {
  title: string;
  style?: CSSProperties;
};

export default function SegmentHeader(props: SegmentHeaderProps) {
  return (
    <StyledSegmentHeader
      data-testid={"t--styled-segment-header"}
      style={props.style}
    >
      {props.title}
      {/*  TODO: Fix cypress here */}
      {/*          <StyledHr data-testid={"t--styled-segment-header-hr"} />
       */}
    </StyledSegmentHeader>
  );
}
