import { useColorMode } from "@chakra-ui/react";

const changeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return { colorMode, toggleColorMode };
};

export default changeTheme;
