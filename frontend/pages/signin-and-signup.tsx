import React from "react";

import HomeLayout from "@/layout/index";
import SingIn from "@/components/signin";
import SingUp from "@/components/singup";

const signInAndSignUp = () => {
  return (
    <HomeLayout>
      <SingIn />
      <SingUp />
    </HomeLayout>
  );
};

export default signInAndSignUp;
