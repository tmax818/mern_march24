import React, { useState } from 'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Form = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");



    const changeHandler = (e) => {

        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value
        })
        )

    }
    // using an object to hold style options for our results div
    const formDataDivStyle = {
        textAlign: "left",
        width: "450px",
        margin: "auto",
    }

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "10px auto",
        width: "300px"
    }

    // The return can only return a single React element, it does NOT
    //    have to be a div.  It can be a form or any other element.
    return (
        <div>
            <form>
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassord">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
            </form>

            <div style={formDataDivStyle}>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{user.firstName}
                </p>
                <p>
                    <label>Last Name: </label>{user.lastName}
                </p>
                <p>
                    <label>Email: </label>{user.email}
                </p>
                <p>
                    <label>Password: </label>{user.password}
                </p>
                <p>
                    <label>Confirm Password: </label>{user.confirmPassword}
                </p>
            </div>
        </div>
    )
}

export default Form;