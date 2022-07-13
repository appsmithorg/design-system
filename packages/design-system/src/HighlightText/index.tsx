import React from "react";
import styled from "styled-components";

const TextHighlighter = styled.mark`
  color: var(--ads-highlight-text-default-text-color);
  background-color: var(--ads-highlight-text-default-background-color);
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
