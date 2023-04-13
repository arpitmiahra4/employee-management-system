import { Box, Flex, IconButton, Select, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import "../../Styles/normal.css"
import EmployeesCards from './EmployeesCards'
import Pagination from './Pagination'
import { BsSortAlphaDown, BsSortAlphaUp } from 'react-icons/bs'
import { BiRepost } from "react-icons/bi";
const AllEmployees = () => {

  const { data, titleSortBy, settitleSortBy, totalProduct, limit, page, setPage, FilterBy, setFilterBy, FilterByGender, setFilterByGender } = useContext(AppContext)

  return (
    <Box pt={"1%"} textAlign={"center"} color={useColorModeValue('black', 'teal')}>
      <Text className='headings' m={"auto"} color={useColorModeValue('white', 'teal')} bg={useColorModeValue('black', 'black')} fontWeight={"extrabold"} fontStyle={"italic"}>All Employees Detail's</Text>

      <SimpleGrid width="full" columns={[1, 2]} px={"2%"} spacing={5} >
        {
          data?.map((el) => (
            <EmployeesCards data={el} key={el.id} />
          ))
        }
      </SimpleGrid>
      <Box w={"20%"} m={"auto"} mt={"5px"}>
        <Pagination
          totalPages={Math.ceil(totalProduct / limit)}
          currentPage={page}
          handlePageChange={(page) => setPage(page)}
        />
      </Box>
      <Flex w={"90%"} gap={"2%"} m={"auto"} mt={"2"} alignItems={"center"}>
        <Flex w={"32%"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Box>
            {
              titleSortBy === "desc" ? (
                <IconButton
                  onClick={() => settitleSortBy(titleSortBy === "asc" ? "desc" : "asc")}
                  bg={"transparent"}
                  icon={<BsSortAlphaDown size={50} />}
                />
              ) : (
                <IconButton
                  onClick={() => settitleSortBy(titleSortBy === "asc" ? "desc" : "asc")}
                  bg={"transparent"}
                  icon={<BsSortAlphaUp size={50} />}
                />
              )
            }
          </Box>
          <Text fontWeight={"extrabold"} fontSize={25}>Sort by Name</Text>
        </Flex>
        <Flex w={"32%"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Box>
            <Select
              fontWeight={"extrabold"} fontSize={25}
              value={FilterBy} onChange={(e) => setFilterBy(e.target.value)}
              name="department"
              placeholder='Select Department'>
              <option value="Full_Stack" >Full_Stack</option>
              <option value="Front_End" >Front_End</option>
              <option value="Back_End" >Back_End</option>
              <option value="UI_Developer" >UI_Developer</option>
              <option value="UX_Designer" >UX_Designer</option>
            </Select>
          </Box>
          <Box>
            <IconButton
              onClick={() => setFilterBy(null)}
              bg={"transparent"}
              icon={<BiRepost size={50} />}
            />
          </Box>
        </Flex>
        <Flex w={"32%"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Box>
            <Select
              fontWeight={"extrabold"} fontSize={25}
              value={FilterByGender} onChange={(e) => setFilterByGender(e.target.value)}
              name="department"
              placeholder='Select Gender'>
              <option value="Male" >Male</option>
              <option value="Female" >Female</option>
              <option value="Custom" >Custom</option>
            </Select>
          </Box>
          <Box>
            <IconButton
              onClick={() => setFilterByGender(null)}
              bg={"transparent"}
              icon={<BiRepost size={50} />}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AllEmployees