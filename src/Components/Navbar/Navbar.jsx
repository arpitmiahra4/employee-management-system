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
    return (
      <>
        <Box px={4} bg={useColorModeValue('black', 'gray.900')} borderRadius={25}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'}>
            <Box fontWeight={"bold"} fontSize={30} color={useColorModeValue('teal', 'red')}>Employee Management System</Box>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode} bg={"transparent"} _hover={{bg:"transparent"}}> 
                  {colorMode === 'light' ? <BsFillLightbulbOffFill size={35} color='white'/> : <BsFillLightbulbFill size={35} color='orange'/>}
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'md'}
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