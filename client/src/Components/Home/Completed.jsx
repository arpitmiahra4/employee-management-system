import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DetailsForm from './DetailsForm'
import AllEmployees from './AllEmployees'

const Completed = () => {
  const shadowEmploye = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"
  const shadowDetailform = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"
  return (
    <Flex borderRadius={20} gap={4} mt={"0.4%"}>
      <Box boxShadow={shadowDetailform} borderRadius={20} ml={1} w={"25%"}>
        <DetailsForm />
      </Box>
      <Box boxShadow={shadowEmploye} borderRadius={20} w={"73%"}>
        <AllEmployees />
      </Box>
    </Flex>
  )
}

export default Completed