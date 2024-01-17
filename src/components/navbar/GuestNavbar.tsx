import MobileNavbar from './MobileNavbar'

import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GuestNavbar = () => {

    return (
        <Flex>
            <Flex width={120} justify={"space-between"} display={{base: 'none', sm: 'flex', md: 'flex'}}>
            <Link to='SignIn'>Sign in</Link>
            <Link to='SignUp'>Sign up</Link>
            </Flex>
            <Flex display={{base: 'flex', sm: 'none', md: 'none'}} cursor={'pointer'}><MobileNavbar/></Flex>
        </Flex>
    );
};

export default GuestNavbar;