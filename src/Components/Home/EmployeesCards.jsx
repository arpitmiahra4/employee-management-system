import { Badge, Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const EmployeesCards = ({ data }) => {
  const { handleDelet, handleEditData, setupdateButton, updateButton, seteditedID } = useContext(AppContext);

  const shadow = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"

  const manageEdit = () => {
    handleEditData(data.id)
    seteditedID(data.id)
    setupdateButton(!updateButton)
  }
  return (
    <>
      <Flex mt={"30%"} boxShadow={shadow} borderRadius={"20px"} h={"190px"} w={"100%"}>
        <Box w={"35%"} ml={"1%"} borderRadius={"20px"} boxShadow={shadow}>
          <Image borderRadius={"20px"} h={"100%"} src={data.image} />
        </Box>
        <Box w={"60%"}>
          <Flex gap={2} mt={2}>
            <Box w={"80%"} textAlign={"left"} pl={5}>
              <Text fontWeight={"bold"} fontSize={20} mt={"1%"}>Name :- {data.name}</Text>
              <Text fontWeight={"bold"} fontSize={16} mt={"1%"}>Contact :- {data.number}</Text>
              <Text fontWeight={"bold"} fontSize={16} mt={"1%"}>Salary :- {data.salary}</Text>
              <Link to={`/employee/${data.id}`}>
                <Button borderRadius={20} rightIcon={<ArrowForwardIcon />} ml={"10"} mt={"5%"}>View Detail's</Button>
              </Link>
            </Box>
            <Box w={"20%"} px={3} py={2}>
              <IconButton
                bg={"transparent"}
                onClick={manageEdit}
                icon={<BsFillPencilFill size={25} />} />
              <IconButton
                onClick={() => handleDelet(data.id)}
                mt={"12"}
                bg={"transparent"}
                icon={<BsFillTrash3Fill size={25} />} />
            </Box>
          </Flex>
          <Badge padding="6px 10px" w={"60%"} fontSize={"md"} variant='outline' colorScheme='cyan'>
            {data.department}
          </Badge>
        </Box>
      </Flex>
    </>
  )
}

export default EmployeesCards