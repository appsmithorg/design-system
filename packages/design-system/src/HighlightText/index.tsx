import React from "react";
import styled from "styled-components";
import { escapeRegExp } from "lodash";

const HighlightTextContainer = styled.span`
  --ads-highlight-text-default-text-color: var(--ads-color-orange-800);
  --ads-highlight-text-default-background-color: var(--ads-color-orange-100);

  color: var(--ads-color-text);
`;

const TextHighlighter = styled.mark`
  color: var(--ads-highlight-text-default-text-color);
  background-color: var(--ads-highlight-text-default-background-color);
  border-radius: var(--ads-border-radius);
`;

export type HighlightTextProps = {
  highlight: string;
  text: string;
};

export function HighlightText(props: HighlightTextProps) {
  const { highlight = "", text = "" } = props;
  if (!highlight.trim()) {
    return (
      <HighlightTextContainer data-testid="t--no-highlight">
        {text}
      </HighlightTextContainer>
    );
  }
  const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");
  const parts: string[] = text.split(regex);

  return (
    <HighlightTextContainer className="search-highlight">
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <TextHighlighter data-testid="t--highlighted-text" key={i}>
            {part}
          </TextHighlighter>
        ) : (
          <span data-testid="t--non-highlighted-text" key={i}>
            {part}
          </span>
        );
      })}
    </HighlightTextContainer>
  );
}
