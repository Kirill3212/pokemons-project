import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { Flex, Text } from "@chakra-ui/react";

import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/slices/userSlice";
import { localStorageHelpers } from "../../utils/localStorageHelpers";

const UserNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorageHelpers.setAuth("");
    dispatch(logOut());
    navigate("/SignIn");
  };

  return (
    <Flex>
      <Flex
        width={210}
        justify={"space-between"}
        display={{ base: "none", sm: "flex", md: "flex" }}
      >
        <Link to="Favorites">Favorites</Link>
        <Link to="History">History</Link>
        <Text cursor={"pointer"} onClick={() => handleLogout()}>
          Sign out
        </Text>
      </Flex>
      <Flex
        display={{ base: "flex", sm: "none", md: "none" }}
        cursor={"pointer"}
      >
        <MobileNavbar />
      </Flex>
    </Flex>
  );
};

export default UserNavbar;
