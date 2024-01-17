import { Link} from "react-router-dom";
import MobileNavbar from './MobileNavbar'
import { Flex, Text  } from "@chakra-ui/react";

const UserNavbar = () => {
    return (
        <Flex>
            <Flex width={210} justify={"space-between"} display={{base: 'none', sm: 'flex', md: 'flex'}}>
            <Link to='Favorites'>Favorites</Link>
            <Link to='History'>History</Link>
            <Text cursor={'pointer'} onClick={()=> console.log('Sign out')}>Sign out</Text>
            </Flex>
            <Flex display={{base: 'flex', sm: 'none', md: 'none'}} cursor={'pointer'}><MobileNavbar/></Flex>
        </Flex>
    );
};

export default UserNavbar;


