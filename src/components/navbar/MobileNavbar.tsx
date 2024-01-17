import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MobileNavbar() {

    const userIn = true 

  return (
    <Menu>
      <MenuButton ml={3} p={1} as={IconButton} size={'sm'} variant="outline">Menu</MenuButton>
      {userIn ? (
      <MenuList>
        <Link to='Favorites'>
        <MenuItem>Favorites</MenuItem>
        </Link>
         <Link to='History'>
        <MenuItem>History</MenuItem>
        </Link>
        <MenuItem onClick={()=> console.log('Sign out')}>Sign out</MenuItem>
      </MenuList>) : (
      <MenuList>
        <Link to='SignIn'>
        <MenuItem>Sign in</MenuItem>
        </Link>
        <Link to='SignUp'>
        <MenuItem>Sign up</MenuItem>
        </Link>
      </MenuList>)}
    </Menu>
  );
}

export default MobileNavbar;