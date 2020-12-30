import { useEffect, useRef, useState } from "react";

import {
  Container,
  MainBox,
  ButtonDrop,
  Select,
  List,
  ListItem,
} from "./styles";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function ComboBox({ data, inputProps, icon }) {
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const wrapperRef = useRef(null);

  useEffect(() => {
    const filteredList = data.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    setOptions(filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function updateList(update) {
    setSearch(update);
    setIsVisible(false);
  }

  function showDrop(e) {
    setSearch(e.target.value);
    setIsVisible(true);
  }

  return (
    <Container>
      <h1>Componente React ComboBox</h1>
      <MainBox>
        <input
          //onClick={() => setIsVisible(!isVisible)}
          onChange={showDrop}
          placeholder={inputProps.placeholder}
          value={search}
        />

        <ButtonDrop onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <AiFillCaretUp size={14} color="#555" />
          ) : (
            <AiFillCaretDown size={14} color="#555" />
          )}
        </ButtonDrop>
      </MainBox>

      {isVisible && (
        <Select ref={wrapperRef}>
          <List>
            {options.map((item) => (
              <ListItem key={item.id} onClick={() => updateList(item.name)}>
                {item.name}
                {item.icon ? item.icon : null}
              </ListItem>
            ))}
          </List>
        </Select>
      )}
    </Container>
  );
}

export default ComboBox;
