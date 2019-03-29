import styled from "styled-components";

export const GalleryItemContainer = styled.div`
  position: relative;
  margin-bottom: 12.5px;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 500px;
  }
`;

export const AuthorContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 5px;
  bottom: 0;
  border-bottom-left-radius: 0.3125em;
  border-bottom-right-radius: 0.3125em;

  label {
    color: #fff;
    bottom: 10px;
  }

  button {
    position: absolute;
    right: 0;
  }
`;
