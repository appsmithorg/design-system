import React, { createRef, useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import TextInput from "TextInput";
import Button, { Category, Size } from "Button";

const Wrapper = styled.div<{ offset?: string }>`
  display: flex;
  height: 38px;
  background: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    height: 100%;
    flex-basis: calc(100% - ${(props) => props.offset || "110px"});
    margin-right: var(--ads-spaces-3);
  }
`;

function CopyToClipboard(props: {
  className?: string;
  copyText: string;
  btnWidth?: string;
}) {
  const { copyText } = props;
  const copyURLInput = createRef<HTMLInputElement>();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (url: string) => {
    copy(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const selectText = () => {
    if (copyURLInput.current) {
      copyURLInput.current.setSelectionRange(0, copyText.length);
    }
  };
  return (
    <Wrapper className={props.className} offset={props.btnWidth}>
      <TextInput
        defaultValue={copyText}
        onChange={() => {
          selectText();
        }}
        readOnly
        ref={copyURLInput}
      />

      <Button
        category={Category.secondary}
        className="t--copy-url"
        onClick={() => {
          copyToClipboard(copyText);
        }}
        size={Size.large}
        text={isCopied ? "Copied" : "Copy"}
        width={props.btnWidth || "110px"}
      />
    </Wrapper>
  );
}

export default CopyToClipboard;
