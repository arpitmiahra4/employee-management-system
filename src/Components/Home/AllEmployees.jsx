import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import "../../Styles/normal.css"
const AllEmployees = () => {

  const { data, titleSortBy, settitleSortBy, totalProduct, limit, page, setPage, FilterBy, setFilterBy, FilterByGender, setFilterByGender } = useContext(AppContext)

  return (
    <Box pt={"1%"} textAlign={"center"} color={useColorModeValue('black', 'teal')}>
      <Text className='headings' m={"auto"} color={useColorModeValue('white', 'teal')} bg={useColorModeValue('black', 'black')} fontWeight={"extrabold"} fontStyle={"italic"}>All Employees Detail's</Text>
    </Box>
  )
}

export default AllEmployees