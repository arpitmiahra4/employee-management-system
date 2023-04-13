import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DetailsForm from './DetailsForm'
import AllEmployees from './AllEmployees'

const Completed = () => {
  return (
    <Flex  h={"92vh"} borderRadius={20} gap={10}>
        <DetailsForm />
        <AllEmployees />
    </Flex>
  )
}

export default Completed