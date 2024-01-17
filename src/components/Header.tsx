import UserNavbar from "./navbar/UserNavbar";
import GuestNavbar from "./navbar/GuestNavbar";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Image, IconButton } from "@chakra-ui/react";

//@ts-ignore
import changeTheme from '../utils/changeTheme'

const Header = () => {
    const userIn = true
    const {colorMode, toggleColorMode} = changeTheme()

    return (
        <Flex p={5} justifyContent="space-between" alignItems={'center'}>
            <Link to='/'>
            <Image src={logo} alt="logo" minWidth={100} maxWidth={130}/>
            </Link>
            <Flex flexDirection={{base: 'row-reverse', sm: 'row', md: 'row'}}>
            {userIn ? <UserNavbar/> : <GuestNavbar/>}
            <IconButton ml={15} aria-label="Close" cursor={'pointer'} rounded="full" size="sm" onClick={() => toggleColorMode()}>
                {colorMode == 'dark' ? <MoonIcon/> : <SunIcon/>}
            </IconButton>
            </Flex>
        </Flex>
    );
};

export default Header;


