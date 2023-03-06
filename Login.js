import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState , useEffect} from "react";
import SIgn_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

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

  useEffect(() => {
    localStorage.removeItem("user_login");
  }, []);


  const addData = async (e) => {
    e.preventDefault();

    //console.log(inpval);

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email Address");
    } else if (!email.includes(".com")) {
      alert("Please Enter Valid Email suffix .com required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length greater than five");
    } else {


      try{
        const response = await fetch(
          `http://localhost:3001/users?email=${email}&password=${password}`
        );
        
        if(!response.ok){
          throw new Error("HTTP error " + response.status);
        }

        const userData = await response.json();

        if (userData.length === 0) {
          alert("Invalid email or password");
        } else {
          console.log("User login successfully");
          localStorage.setItem("user_login", JSON.stringify(userData));

          history("/details");
        }
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    }
      //it is condition for the checking the data
      //  if(getuserArr && getuserArr.length){
      //      const userdata = JSON.parse(getuserArr);
      //      //console.log(userdata);
      //      const userlogin = userdata.filter((el,k)=>{
      //          return el.email === email && el.password === password
      //      });
      //      //console.log(userlogin);
      //      if (userlogin.length === 0){
      //          alert("invalid details")
      //      }else{
      //          console.log("user login successfully");
      //          localStorage.setItem("user_login",JSON.stringify(userlogin));
      //          history("/details");                //this redirect to page details.js using navigate
      //      }
      
      //  }
    
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your email"
                />
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
              Already Have an Account <span>Signin?</span>
            </p>
          </div>
          <SIgn_img></SIgn_img>
        </section>
      </div>
    </>
  );
};
export default Login;
