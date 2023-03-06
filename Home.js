import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./Sign_img";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  // const[users,fetchUsers]= useState([])
  // useEffect(() => {
  //   fetch("http://localhost:3001/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       fetchUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    //console.log(e.target.value);

    const { value, name } = e.target;
    //console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    //console.log(inpval);
    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email Address");
    } else if (!email.includes(".com")) {
      alert("Please Enter Valid Email suffix .com required");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length greater than five");
    } else {
      //console.log("data added successfully!")

      //localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
      //useryoutube is a key of source of storage  storage data in local database
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name,date, email, password }),
        });
  
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
  
        const userData = await response.json();
  
        if (userData.length === 0) {
          alert("Invalid email or password");
        } else {
          console.log("User login successfully");
          localStorage.setItem("user_login", JSON.stringify(userData));
          history("/login");
        }
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={addData}
                className="col-lg-6"
                style={{ background: "rgb(255, 87, 51 )" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>

            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Signin?</NavLink>
              </span>
            </p>
          </div>
          <SIgn_img></SIgn_img>
        </section>
      </div>
    </>
  );
};
export default Home;
