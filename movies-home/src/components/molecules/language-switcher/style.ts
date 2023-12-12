import styled from "styled-components";
export const StyledLanguageSwitcher = styled.div`
  .Lang-menu {
    width: 100px;
    text-align: center;
    font-weight: bold;
    position: relative;
    z-index: 10;

    img {
      max-width: 20px;
    }

    &__selected {
      display: flex;
      justify-content: center;
      gap: 10px;
      line-height: 2;
      cursor: pointer;
    }

    ul {
      margin: 0;
      padding: 0;
      display: none;
      background-color: #fff;
      border: 1px solid #f8f8f8;
      position: absolute;
      top: 100%;
      right: 0;
      width: 125px;
      border-radius: 5px;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

      li {
        list-style: none;
        text-align: left;
        display: flex;
        justify-content: space-between;

        button {
          text-decoration: none;
          width: 125px;
          padding: 5px 10px;
          display: block;
        }

        &:hover {
          background-color: #f2f2f2;
        }

      }
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }
`;
