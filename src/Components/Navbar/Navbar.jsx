import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillLightbulbOffFill, BsFillLightbulbFill } from "react-icons/bs";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const shadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
  return (
    <>
      <Box px={4} py={2} bg={useColorModeValue('black', 'cornsilk')} boxShadow={shadow} borderRadius={20}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-evenly'}>
          <Box fontWeight={"bold"} fontSize={25} color={useColorModeValue('#aedafb', 'black')}>Employee Management System</Box>
          <Button onClick={toggleColorMode} bg={"transparent"} _hover={{ bg: "transparent" }}>
            {colorMode === 'light' ? <BsFillLightbulbOffFill size={30} color='white' /> : <BsFillLightbulbFill size={30} color='orange' />}
          </Button>
        </Flex>
      </Box>
    </>
  );
}