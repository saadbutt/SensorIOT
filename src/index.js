import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const LoginButton = () => {
//   const login = useGoogleLogin({
//     onSuccess: (tokenResponse) => console.log(tokenResponse),
//     onError: () => console.log("Login Failed"),
//     referrerPolicy: "strict-origin-when-cross-origin",
//   });

//   return <button onClick={() => login()}>Login with Google</button>;
// };

ReactDOM.render(
  // <GoogleOAuthProvider clientId="395572186408-0tjalcje6tuusgfa313i4ckfsoijs5pp.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <LoginButton /> */}
    </BrowserRouter>
  </React.StrictMode>,
  // </GoogleOAuthProvider>
  document.getElementById("root")
);
