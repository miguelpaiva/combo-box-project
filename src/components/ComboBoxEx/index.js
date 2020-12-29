import React from "react";

import { Container } from "./styles";

import Combobox from "react-widgets/lib/Combobox";

function ComboBoxEx() {
  return (
    <Container>
      <Combobox data={["orange", "red", "blue", "purple"]} />
    </Container>
  );
}

export default ComboBoxEx;
