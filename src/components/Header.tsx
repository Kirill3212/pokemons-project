import { Flex, Image, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "@/assets/logo.png";

import GuestNavbar from "@/components/navbar/GuestNavbar";
import UserNavbar from "@/components/navbar/UserNavbar";

import { Link } from "react-router-dom";

import changeTheme from "@/utils/changeTheme";

import { getAuthStatusSelector } from "@/store/slices/userSlice";
import { useAppSelector } from "@/hooks";

const Header = () => {
  const userIn = useAppSelector(getAuthStatusSelector);
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
