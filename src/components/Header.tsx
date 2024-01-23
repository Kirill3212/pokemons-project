import UserNavbar from "./navbar/UserNavbar";
import GuestNavbar from "./navbar/GuestNavbar";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Image, IconButton } from "@chakra-ui/react";

import changeTheme from "../utils/changeTheme";

import { useAppSelector } from "../hooks";
import { getAuthStatusSelector } from "../store/slices/userSlice";

const Header = () => {
  const userIn = useAppSelector(getAuthStatusSelector);

  console.log("UserIn authStatus -", userIn);

  const { colorMode, toggleColorMode } = changeTheme();

  return (
    <Flex p={5} justifyContent="space-between" alignItems={"center"}>
      <Link to="/">
        <Image
          src={logo}
          alt="logo"
          width={{ base: "80px", sm: "120px", md: "120px" }}
        />
      </Link>
      <Flex flexDirection={{ base: "row-reverse", sm: "row", md: "row" }}>
        {userIn ? <UserNavbar /> : <GuestNavbar />}
        <IconButton
          ml={15}
          aria-label="Close"
          cursor={"pointer"}
          rounded="full"
          size="sm"
          onClick={() => toggleColorMode()}
        >
          {colorMode == "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Header;
