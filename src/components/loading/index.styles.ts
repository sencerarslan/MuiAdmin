import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  background-color: var(--mui-palette-color1);
  height: 100vh;
  overflow: auto;
  .content {
    background-color: var(--mui-palette-color2);
    flex: 1;
    border-radius: 20px;
    overflow: inherit;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
