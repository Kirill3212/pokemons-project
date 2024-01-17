import { Flex, Image } from "@chakra-ui/react";
import SignUpForm from "../../components/forms/SignUpForm";
import signInAndsignUpLogo from "../../assets/signInAndsignUpLogo.png"

const SignUp = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Image src={signInAndsignUpLogo} alt="logo" width={{base: '80px', sm: '120px', md: '120px'}}/>
            <SignUpForm/>
        </Flex>
    );
};

export default SignUp;