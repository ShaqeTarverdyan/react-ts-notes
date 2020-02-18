import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { NavigationButton } from "./noteListTrigger";

const AddTrigger = ({ toggleNote, openDrawer }) => {
  return (
    <NavigationButton
      onClick={toggleNote}
      openDrawer={openDrawer === "noteForm"}
    >
      <FaPlusCircle /> <span>Create new Note</span>
    </NavigationButton>
  );
};

export default AddTrigger;
