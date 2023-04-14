import { Image, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Styles from "../../Styles/Form.module.css"
const FetChData = ({ user_id }) => {
  return fetch(`https://mock-server-686g.onrender.com/employee?id=${user_id}`).then((res) =>
    res.json()
  );
};

const SingleEmployeePage = () => {
  const { id: user_id } = useParams();
  console.log(user_id);

  const [Datas, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      setloading(true);
      const res = await FetChData({ user_id });
      //  console.log(res);
      setData(res);
      setloading(false);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  console.log(Datas)

  if (err) {
    return (
      <>
        <h1>NO PRODUCT FOUND</h1>
        <Link to="/products">GO TO PRODUCT</Link>
      </>
    );
  }

  if (loading) {
    return (
      <VStack>
        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" w={"100%"} h={"90vh"}/>
      </VStack>
    )
  }
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '35rem' }}
        direction={{ base: 'column', md: 'row' }}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200" borderRadius={20}>
          <Image
            objectFit="cover"
            boxSize="100%"
            borderRadius={20}
            src={Datas[0].image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={40} fontFamily={'body'}>
            {`Name :  ${Datas[0].name}`}
          </Heading>
          <Text fontSize={30}  fontStyle={"italic"} mb={4}>
            {`DepartMent : ${Datas[0].department}`}
          </Text>
          <Text textAlign={'left'}  fontStyle={"italic"} fontSize={30}>{`Employee Salary : ${Datas[0].salary}`}</Text>
          <Text fontSize={30} textAlign={'left'}  fontStyle={"italic"}> {`Email : ${Datas[0].email}`}</Text>
          <Text textAlign={'left'}  fontSize={30} fontStyle={"italic"}> {`Number : ${Datas[0].number}`}</Text>

          <Text textAlign={'left'}  fontSize={30} fontStyle={"italic"}> {`Gender : ${Datas[0].gender}`}</Text>
          <Text textAlign={'left'}  fontSize={30} fontStyle={"italic"}> {`Age : ${Datas[0].age}`}</Text>
          <Text textAlign={'left'}  fontSize={30} fontStyle={"italic"}> {`MArrital Status : ${Datas[0].maritalStatus}`}</Text>
          <Link to="/">
          <Button className={Styles.btn_submit} color="red" bg={"black"} fontWeight={"bold"} w={"150%"} h={"50px"} fontSize={25}>Home</Button>
          </Link>
        </Stack>
      </Stack>
    </Center>
  )
}

export default SingleEmployeePage