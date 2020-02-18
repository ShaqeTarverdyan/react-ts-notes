import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

function App() {
  const [openDrawer, setOpenDrawer] = useState("");
  const [blocknote, setBlocknote] = useState([]);

  const toggleNote = () => {
    setOpenDrawer("noteForm");
  };

  const toggleList = () => {
    setOpenDrawer("noteList");
  };
  const addNote = newNote => {
    setBlocknote(currentBlocknote => [...currentBlocknote, newNote]);
    localStorage.setItem("note", blocknote);
  };

  return (
    <AppWrapper>
      <Navigation
        toggleNote={toggleNote}
        toggleList={toggleList}
        openDrawer={openDrawer}
      />
      <ContentWrapper>
        <NoteForm
          openDrawer={openDrawer}
          onNoteCreate={addNote}
          setOpenDrawer={setOpenDrawer}
        />
        <NoteList
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          blocknote={blocknote}
        />
      </ContentWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 1rem;
  height: 100vh;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  position: relative;
`;
export default App;
