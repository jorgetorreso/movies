import styled from "styled-components";
export const StyledMovie = styled.div.attrs({
  className: "Movie",
})`
  &.Movie {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    max-width: 200px;
    cursor: pointer;
    img {
      max-width: 100%;
      height: auto;
      width: auto;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
        img {
            transform: scale(1.09);
        }
    }
  }
`;
