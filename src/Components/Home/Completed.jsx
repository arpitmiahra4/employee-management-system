import { Box } from '@chakra-ui/react'
import React from 'react'
import DetailsForm from './DetailsForm'
import AllEmployees from './AllEmployees'

const Completed = () => {
  return (
    <Box>
        <DetailsForm />
        <AllEmployees />
    </Box>
  )
}

export default Completed