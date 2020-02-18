import React from "react";
import styled from "styled-components";
import FormField from "../formField";

const Note = ({ openDrawer, setOpenDrawer, onNoteCreate }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = event.target;
    const note = {
      title: formData.title.value,
      text: formData.text.value
    };
    onNoteCreate(note);
  };

  const closeDrawer = () => {
    setOpenDrawer("");
  };
  return (
    openDrawer === "noteForm" && (
      <NoteWrapperOpen>
        <CloseButton onClick={closeDrawer}>X</CloseButton>
        <Form onSubmit={handleSubmit}>
          <FormField Component={Input} placeholder="Title" name="title" />
          <FormField Component={Textarea} placeholder="Text" name="text" />
          <Button type="submit">add</Button>
        </Form>
      </NoteWrapperOpen>
    )
  );
};

const NoteWrapperOpen = styled.div`
  position: absolute;
  height: auto;
  top: 5%;
  left: 10%;
  transform: translate3d(0, 0, 100%);
  transition-duration: 224ms;
  transition-property: opacity, transform, visibility;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  visibility: visible;
  width: 80%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  padding: 16px;
  max-height: 100vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: grid;
  row-gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  border: 1px solid #438585;
  color: #438585;
  padding: 0.7rem 0;
  text-transform: uppercase;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  outline: none;

  :active {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  padding: 0;
  outline: none;
`;

const Input = styled.input`
  border: 1px solid #438585;
  border-radius: 1rem;
  padding: 0.7rem 0;
  padding-left: 1rem;
  outline: none;
`;

const Textarea = styled.textarea`
  min-height: 150px;
  border: 1px solid #438585;
  border-radius: 1rem;
  padding: 0.7rem 0;
  padding-left: 1rem;
  outline: none;
`;

export default Note;
