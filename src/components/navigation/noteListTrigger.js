import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import styled from "styled-components";

const NoteListTrigger = props => {
  const { toggleList, openDrawer } = props;
  return (
    <NavigationButton
      onClick={toggleList}
      openDrawer={openDrawer === "noteList"}
    >
      <FaRegListAlt /> <span> Your List</span>
    </NavigationButton>
  );
};

export const NavigationButton = styled.div`
  padding: ${props =>
    props.openDrawer ? "1rem 0.8rem 1rem 1rem" : "1rem 0rem 1rem 1rem"};
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  width: 90%;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50px;
  background-color: inherit;
`;
export default NoteListTrigger;
