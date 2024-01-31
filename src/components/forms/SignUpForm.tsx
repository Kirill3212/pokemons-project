import { useState } from "react";

import {
  VStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import useSignUp from "../../hooks/useSignUp";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, handleSignUp } = useSignUp();
  const navigate = useNavigate();

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

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          fontSize={14}
          focusBorderColor="yellow.300"
          autoComplete={"on"}
          value={inputs.confirmPassword}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        ></Input>

        <Button
          w={"100%"}
          transition={"0.3s"}
          isLoading={loading}
          onClick={() => handleSignUp(inputs)}
        >
          Sign up
        </Button>
        <Text mt={2}>
          Already have an account ?
          <Text
            as={"span"}
            color={"#F6C52E"}
            ml={2}
            cursor={"pointer"}
            onClick={() => navigate("/SignIn")}
          >
            Sign in
          </Text>
        </Text>
      </VStack>
    </form>
  );
};

export default SignUpForm;
