import styled from "styled-components";

export const GalleryItemContainer = styled.div`
  position: relative;
  margin-bottom: 12.5px;
  background-color: #333;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 500px;
    border-radius: 0.3125em;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  background-color: rgba(255, 255, 2555, 0.7);
  padding: 0 5px;
  bottom: 0;
  border-bottom-left-radius: 0.3125em;
  border-bottom-right-radius: 0.3125em;

  label {
    color: #fff;
    bottom: 10px;
  }

  i {
    cursor: pointer;
  }
`;
