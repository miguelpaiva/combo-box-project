import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px auto 0;

  max-width: 400px;

  h1 {
    margin: 0 auto 15px;
    font-size: 24px;
  }
`;

export const MainBox = styled.div`
  height: 40px;
  border: 1px solid #aaa;
  border-radius: 4px;

  display: flex;
  align-items: center;
  /*justify-content: space-between;*/

  padding-left: 10px;

  input {
    flex: 1;
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
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 8px;
  border-radius: 4px;

  /*

  ${(props) =>
    props.visible &&
    css`
      display: flex;
    `}  */
`;

export const Select = styled.div``;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;

  padding: 10px;

  color: #000;

  cursor: pointer;
`;
