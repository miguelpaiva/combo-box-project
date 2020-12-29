import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 400px;

  input {
    width: 100%;
  }
`;

export const MainBox = styled.div`
  height: 40px;

  border: 1px solid #aaa;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding-left: 10px;

  input {
    border: none;
    outline: none;
  }
`;

export const ButtonDrop = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const List = styled.div`
  background-color: #eee;
  display: none;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.visible &&
    css`
      display: flex;
    `}
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;

  padding: 10px;
  border: 1px solid #ddd;

  color: #000;
`;
