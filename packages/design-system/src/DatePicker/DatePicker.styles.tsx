import styled from "styled-components";

export const StyledDatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: var(--ads-v2-spaces-2);
  }
`;

export const DatePickerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--ads-v2-spaces-2);
`;
