import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const history = useNavigate();
    return (
        <>
        <div className="container">
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                {/* <img src="" alt="error" className="errorimg"></img> */}
                <h4>404 Error ! Page is not found </h4>
                <button className="btn btn-primary" onClick={()=>history("/")}>Redirect Sign Up Page</button>
            </div>
        </div>
        </>
    )
}

export default Error