import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  max-width: 90vw;
  height: 80vh;
  margin: 0 auto;

  .slick-slide > div {
    display: grid;
    place-items: center;
    width: 90%;
    margin-top: 50px;
    margin: auto;
    height: 500px;
    padding: 0px;
  }

  .slick-prev {
    top: 0;
    left: auto;
    right: 180px;
  }

  .next-slick-arrow,
  .prev-slick-arrow {
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    gap: 5px;
  }

  .slick-next {
    top: 0;
    left: auto;
    right: 80px;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;
