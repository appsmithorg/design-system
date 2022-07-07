import React from "react";
import styled from "styled-components";

const TextHighlighter = styled.mark`
  --ads-text-highlight-color: var(--ads-color-orange-800);
  --ads-text-highlight-background: var(--ads-color-orange-100);

  color: var(--ads-text-highlight-color);
  background-color: var(--ads-text-highlight-background);
`;

export type HighlightTextProps = {
  highlight: string;
  text: string;
};

export function HighlightText(props: HighlightTextProps) {
  const { highlight = "", text = "" } = props;
  if (!highlight.trim()) {
    return <span data-testid="t--no-highlight">{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts: string[] = text.split(regex);

  return (
    <span>
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
    </span>
  );
}
