import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'



import Button from "./Button";
import { addList, addCard } from "../../actions";
// import styled from "styled-components";
import Form from "./Form";
import OpenForm from "./OpenForm";

export const Create = ({list = false, listID}) => {
    const dispatch = useDispatch()
    console.log(list,"list")

    const [formOpen, setFormOpen] = useState(false)
    const [text, setText] = useState("")

 
    
    const openForm = () => {
        setFormOpen(true)
      };
    
    const closeForm = () => {
        setFormOpen(false)
      };

    const  handleInputChange = (e) => {
        setText(e.target.value)
      };
    
      
  const handleAddList = () => {
    // const { dispatch } = this.props;
    // const { text } = this.state;
    console.log("first")
    if (text) {
        setText("")
        dispatch(addList(text));
      }

    
    return;

    
  };

  const handleAddCard = () => {

    if (text) {
      setText("")
      dispatch(addCard(listID, text));
    }
    
  };
     
  return (
      <>
      {
          formOpen ? (
            <Form
              text={text}
              onChange={(e) =>handleInputChange(e)}
              closeForm={closeForm}
            >
              <Button onClick={list ? handleAddList : handleAddCard}>
                {list ? "Add List" : "Add Card"}
              </Button>
            </Form>
          ) : (
            <OpenForm list={list} onClick={openForm}>
              {list ? "Add another list" : "Add another card"}
            </OpenForm>
          )
      }

       {/* <div>Create</div> */}
      </>
   
  )
}

const mapStateToProps = (state) => ({
    boards: state.boards
})

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(Create)