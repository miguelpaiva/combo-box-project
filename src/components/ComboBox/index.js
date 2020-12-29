import { useEffect, useRef, useState } from "react";

import { Container, MainBox, ButtonDrop, List, ListItem } from "./styles";

import { AiFillCaretDown, AiFillDollarCircle } from "react-icons/ai";

function ComboBox({ data }) {
  const inputRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  function showDrop() {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  //useEffect(() => {}, []);

  return (
    <Container>
      <MainBox>
        <input ref={inputRef} onChange={showDrop} placeholder="Pesquisar..." />

        <ButtonDrop onClick={showDrop}>
          <AiFillCaretDown size={14} color="#555" />
        </ButtonDrop>
      </MainBox>

      <List visible={isVisible}>
        {data.map((item) => (
          <ListItem key={item.id}>
            {item.id} {item.nome}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ComboBox;
