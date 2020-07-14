import React from "react";
import styled from "styled-components";
import { CloseButton } from "../noteForm/noteForm";

const NoteList = props => {
  const { openDrawer, setOpenDrawer, blocknote } = props;

  const closeDrawer = () => {
    setOpenDrawer("");
  };
  return (
    openDrawer === "noteList" && (
      <ListWrapper>
        {blocknote.length > 0 ? (
          blocknote.map((note, index) => (
            <ItemWrapper key={index}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </ItemWrapper>
          ))
        ) : (
          <p>
            there are no notes yet :(: please go add notes and add your first
            note ;)
          </p>
        )}
        <CloseButton onClick={closeDrawer}>x</CloseButton>
      </ListWrapper>
    )
  );
};
const ListWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;
const ItemWrapper = styled.div`
  max-width: 200px;
  height: auto;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #438585;
  border-radius: 10px;
`;
export default NoteList;
