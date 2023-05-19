"use client";
import React, { useCallback, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import Form from "../components/Form";

const Tribute = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    console.log("logout success");
  }, []);

  return (
    <div>
      <LoginSocialFacebook
        appId="722775106200014"
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
};
export default Tribute;
