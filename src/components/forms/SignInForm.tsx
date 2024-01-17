import { useState } from "react";

import {
  VStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignInForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form style={{ width: "300px" }}>
      <VStack spacing={4}>
        <Input
          type="email"
          placeholder="Email"
          fontSize={14}
          focusBorderColor="yellow.300"
          autoComplete={"on"}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        ></Input>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            fontSize={14}
            focusBorderColor="yellow.300"
            autoComplete={"on"}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          ></Input>
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          w={"100%"}
          transition={"0.3s"}
          onClick={() => console.log(inputs)}
        >
          Sign in
        </Button>
      </VStack>
    </form>
  );
};

export default SignInForm;
