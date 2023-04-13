import { Box, FormControl, FormLabel, Input, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const DetailsForm = () => {
  return (
    <Box textAlign={"center"} color={useColorModeValue('teal', 'yellow')}>
    <Text fontWeight={"bold"} fontSize={25}>Fill Employee Detail's</Text>
    <Box border={"1px solid red"} w={"98%"} m={"auto"} mt={"5%"}>
    <FormControl isRequired>
         <FormLabel>Full Name</FormLabel>
         <Input  value={"formData".name} 
          name="name"
           onChange={"handleFormData"}
         placeholder='Full Name' />
       </FormControl>
    </Box>
    </Box>
  )
}

export default DetailsForm
// {
//   "name": "Arpit Mishra",
//   "email": "arpitmiahra4@gmail.com",
//   "number": "8989571140",
//   "age": "23",
//   "gender": "Male",
//   "maritalStatus": "UnMarried",
//   "department": "Full_Stack",
//   "salary": "80K",
//   "image": "https://avatars.githubusercontent.com/u/106508210?v=4",
//   }