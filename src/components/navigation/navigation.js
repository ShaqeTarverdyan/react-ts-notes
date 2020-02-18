import React from "react";
import AddTrigger from "./addTrigger";
import styled from "styled-components";
import NoteListTrigger from "./noteListTrigger";

const Navigation = props => {
  const { toggleNote, toggleList, openDrawer } = props;
  return (
    <NavigationWrapper>
      <AddTrigger toggleNote={toggleNote} openDrawer={openDrawer} />
      <NoteListTrigger toggleList={toggleList} openDrawer={openDrawer} />
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  background-color: #438585;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff275;
`;
export default Navigation;

//#fff275 --dexin
// #438585 --kanacha-kapuyt
//#939999 -- grey
