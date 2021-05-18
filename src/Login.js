import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        //this is the signin protocol
        auth.signInWithPopup(provider)
            .then((res) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                });
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <div className="login-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="/"
                />
                <div className="login-text">
                    <h1>Sign In to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
