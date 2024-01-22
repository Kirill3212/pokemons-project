import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/index";
import { useAppSelector } from "../../hooks/index";
import { logOut } from "../../store/slices/userSlice";
import { getAuthStatusSelector } from "../../store/slices/userSlice";
import { localStorageHelpers } from "../../utils/localStorageHelpers";

function MobileNavbar() {
  const userIn = useAppSelector(getAuthStatusSelector);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorageHelpers.setAuth("");
    dispatch(logOut());
  };

  return (
    <Menu>
      <MenuButton ml={3} p={1} as={IconButton} size={"sm"} variant="outline">
        Menu
      </MenuButton>
      {userIn ? (
        <MenuList>
          <Link to="Favorites">
            <MenuItem>Favorites</MenuItem>
          </Link>
          <Link to="History">
            <MenuItem>History</MenuItem>
          </Link>
          <MenuItem onClick={() => handleLogout()}>Sign out</MenuItem>
        </MenuList>
      ) : (
        <MenuList>
          <Link to="SignIn">
            <MenuItem>Sign in</MenuItem>
          </Link>
          <Link to="SignUp">
            <MenuItem>Sign up</MenuItem>
          </Link>
        </MenuList>
      )}
    </Menu>
  );
}

export default MobileNavbar;
