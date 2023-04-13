import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    useColorMode,
    Center,
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
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode} bg={"transparent"} _hover={{bg:"transparent"}}> 
                  {colorMode === 'light' ? <BsFillLightbulbOffFill size={30} color='white'/> : <BsFillLightbulbFill size={30} color='orange'/>}
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://images-platform.99static.com/ky8wEq_DEdvfN0l2lmUSfuVYL0g=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/107/107446/attachment_107446690'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://images-platform.99static.com/ky8wEq_DEdvfN0l2lmUSfuVYL0g=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/107/107446/attachment_107446690'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Mishra Ji</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }