import React from 'react';
import copySvg from '../__assets__/icons/ads/copy-svg.svg';
import { border } from '@xstyled/styled-components';
interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.setAttribute("value", textToCopy);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  return (
    <button onClick={handleCopyClick} 
    style={{border: "none"}}
    >
      <img
      src={ copySvg } alt="Copy" />
    </button>
  );
};

export default CopyButton;
