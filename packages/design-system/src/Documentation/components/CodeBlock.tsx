import React from "react";
import styled from "styled-components";
import { Tooltip } from "Tooltip";
import { toast } from "Toast";
import { IconProvider } from "Icon/Icon.provider";

type CodeBlockProps = {
  code?: string;
};

function CodeBlock({ code }: CodeBlockProps) {
  if (code === undefined) {
    return null;
  }
  return (
    <Wrapper
      onClick={() => {
        code && navigator.clipboard.writeText(code.toString());
        toast.show("Copied to clipboard", { kind: "success" });
      }}
    >
      <Tooltip content="Click here to copy" mouseEnterDelay={0.7}>
        <div>
          <ParentComponent>
          <Code>
            {code}
            <CustomIconWrapper>
              <IconProvider iconName="copy-control" size="sm" color="" />
            </CustomIconWrapper>
          </Code>
          </ParentComponent>
        </div>
      </Tooltip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  vertical-align: middle;
  padding: 0 4px;
  border-radius: var(--ads-v2-border-radius);
  background-color: var(--ads-v2-colors-content-surface-hover-bg);
  width: fit-content;
  position: relative;
`;

const ParentComponent = styled.div`
  display: flex;
`;

const Code = styled.div`
  font-size: 14px;
  font-family: var(--ads-v2-font-family-code);
  white-space: pre-wrap;
`;

const CustomIconWrapper = styled.div`
display: inline-block;
vertical-align: sub;
width: 16px;  
height: 16px;
`;



export { CodeBlock };
