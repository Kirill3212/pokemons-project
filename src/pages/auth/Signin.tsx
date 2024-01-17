import { Flex, Image } from "@chakra-ui/react";
import SignInForm from "../../components/forms/SignInForm";
import signInAndsignUpLogo from "../../assets/signInAndsignUpLogo.png"

const SignIn = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Image src={signInAndsignUpLogo} alt="logo" width={{base: '80px', sm: '120px', md: '120px'}}/>
            <SignInForm/>
        </Flex>
    );
};

export default SignIn;