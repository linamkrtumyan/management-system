import React, { useState , useEffect} from "react";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
// import styled from "styled-components";
// import Icon from "@material-ui/core/Icon";
import Form from "./Form";
import { editCard, deleteCard } from "../../actions";
import { connect } from "react-redux";
import ButtonComp from "./Button";
import "./card.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Card = React.memo(({ text, id, listID, index, dispatch }) => {
  // Modal.setAppElement(`#/${id}`);
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setIsEditing(false);
    setOpen(false)
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveCard = (e) => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
    setOpen(false)
  };

  const handleDeleteCard = (e) => {
    console.log(listID);
    dispatch(deleteCard(id, listID));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);


  const renderEditForm = () => {
    return (
      <Form text={cardText} onChange={handleChange} closeForm={closeForm}>
        <ButtonComp onClick={saveCard}>Save</ButtonComp>
      </Form>
    );
  };

  const renderCard = () => {
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <div className="cardModalTitleContainer" >
              
               <p style={{fontSize:"20px", marginBottom:"10px"}} >{text}</p>
            <ButtonComp
            //  className="cardAction"
              onClick={handleDeleteCard}>
                      {/* <img
                        src={require("../../assets/cross.svg").default}
                        alt="cross"
                      />  */}
                      Delete Card
                    </ButtonComp>
              </div>

              <p>Attached users</p>
              <div key={index} className="userItem" >
         <p>Garik Galstyan</p>
      </div>
      {/* <div key={index} className="userItem" >
         <p>{user.fullname}</p>
      </div> */}

         
           

            <p style={{color:"#000"}} >You can add new users for this card</p>

{
  users.map((user,index) => {
    return(
      <div key={index} className="userItem" >
         <p>{user.fullname}</p>
      </div>
     
    )
  })
}


           
          </Box>
        </Modal>

        <Draggable draggableId={String(id)} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <div className="cardContainer" onClick={handleOpen}>
              {/* <div > */}
                  <div>
                    <p className="cardTitle">{text}</p>
                  </div>
                  <div style={{position:"absolute", top:"5px", right:"5px"}} >
                    <div
                      className="cardAction"
                      onClick={() => setIsEditing(true)}
                      // fontSize="small"
                    >
                      <img
                        src={require("../../assets/pencil.svg").default}
                        alt="pencil"
                      />
                    </div>
                   
                 
                  </div>

                   
                </div>
              {/* </div> */}

            
            </div>
          )}
        </Draggable>
      </>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(Card);
