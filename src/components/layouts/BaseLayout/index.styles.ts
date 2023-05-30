import styled from "styled-components";

export const BaseLayoutStyled = styled.div`
  .page {
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
    .side-bar {
      background-color: var(--mui-palette-color3);
      width: 256px;
      height: 100%;
      box-shadow: 20px 0px 15px -20px #00000030;
      .MuiListSubheader-gutters {
        background-color: var(--mui-palette-color3);
      }
    }
    .right-content {
      padding: 20px;
    }
  }
`;
