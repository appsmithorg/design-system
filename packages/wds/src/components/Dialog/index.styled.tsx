import styled from "styled-components";

export const StyledDialogContent = styled.div`
  margin: 15px;
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  transform: scale(0.95);

  transition: transform 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
`;
