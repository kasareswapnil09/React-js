import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  console.log(logindata);


  const history = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);

  const Birthday = () => {
    //console.log("ok")
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      //console.log(user);
      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
        // if(el.date === todayDate){
        //     return true;
        // }else{
        //     return false;
        // }
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("Its ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () =>{
      localStorage.removeItem("user_login")
      history("/");
  }

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details Page information of the Users!</h1>
          <h1>{logindata[0].name}</h1>
          <Button onClick={userlogout}>Log Out</Button>

          {
              logindata[0].date === todayDate?
              <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name} Thank You For Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your are successfully Logged In! Welcome!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>: " "
          }
        </>
      )}
    </>
  );
};

export default Details;
