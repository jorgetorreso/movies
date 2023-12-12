import styled from "styled-components";

export const StyledCard = styled.div`
  background: #283593;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  min-height: 200px;
  overflow: hidden;
  min-width: 300px;
  z-index: 1;
  position: relative;
  border-radius: 24px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    .Card {
      &__subtitle {
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        margin:0;
      }
      &__title {
        font-size: 20px;
        font-weight: 700;
        color: #bbdefb;
        margin:0;
      }
      &__feature {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        color: #fff;
        font-size: 14px;
        gap: 10px;

        b {
          font-weight: 700;
        }
      }

      &__body {
        padding: 10px;
      }
`;
