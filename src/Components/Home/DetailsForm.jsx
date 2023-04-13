import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, Radio, Select, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { BsFillCalendar3WeekFill, BsFillEnvelopeFill, BsFillPersonVcardFill, BsFillPhoneFill, BsLink45Deg } from "react-icons/bs";
import Styles from "../../Styles/Form.module.css"
import { AddData } from '../../api';

const DetailsForm = () => {

  const { HandleEmotionData, updateButton, formData
    , setFormData, initValue, updateToServer } = useContext(AppContext);

  const [isSubmit, setisSubmit] = useState(false);

  const handleFormData = (e) => {
    const {name: key, value, }= e.target
    setFormData({...formData, [key]:value});
  }

  const HandleAddData = () => {
    setisSubmit(true);
    AddData(formData)
    .then(res =>{
      console.log(res)
      setisSubmit(false);
      HandleEmotionData()
    })
    .catch(err =>{
      setisSubmit(false)
    })
    setFormData(initValue)
    window.location.reload();
  }
  return (
    <Box textAlign={"center"} color={useColorModeValue('black', 'teal')} px={5}>
      <Text fontWeight={"bold"} fontSize={25}>Fill Employee Detail's</Text>
      <Box w={"98%"} m={"auto"} mt={"5%"}>
        <FormControl mt={"2px"} isRequired>
          <FormLabel className={Styles.slide_right}>Full Name</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsFillPersonVcardFill size={20} />}
            />
            <Input value={formData.name}
              name="name"
              onChange={handleFormData}
              placeholder='Full Name' />
          </InputGroup>
        </FormControl>

        <FormControl mt={"2px"} isRequired>
          <FormLabel className={Styles.slide_right}>Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsFillEnvelopeFill size={20} />}
            />
            <Input name="email" value={formData.email}
              onChange={handleFormData}
              placeholder='Email Address' />
          </InputGroup>
        </FormControl>

        <FormControl mt={"2px"} isRequired>
          <FormLabel className={Styles.slide_right}>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsFillPhoneFill size={20} />}
            />
            <Input value={formData.number}
              name="number" onChange={handleFormData}
              type='tel' placeholder='Phone number' />
          </InputGroup>
        </FormControl>

        <Flex gap={3}>
          <FormControl mt={"2px"} isRequired>
            <FormLabel className={Styles.slide_right}>Age</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<BsFillCalendar3WeekFill size={20} />}
              />
              <Input name="age" onChange={handleFormData}
                value={formData.age}
                placeholder='Age' />
            </InputGroup>
          </FormControl>

          <FormControl mt={"2px"} isRequired>
            <FormLabel className={Styles.slide_right}>Gender</FormLabel>
            <Select
              color={useColorModeValue('gray', 'gray')}
              onChange={handleFormData}
              name="gender"
              value={formData.gender}
              placeholder='Select Gender'>
              <option>Male</option>
              <option>Female</option>
              <option>Custom</option>
            </Select>
          </FormControl>
        </Flex>

        <HStack w="full">
          <FormControl as='fieldset' mt={"2px"} isRequired>
            <FormLabel as='legend' className={Styles.slide_right}>Marital Status</FormLabel>
            <Flex w={"80%"} m="auto">
              <Box
                color={useColorModeValue('gray', 'gray')}
                name="maritalStatus"
                
                value={formData.maritalStatus} spacing='24px'>
                <Radio name="maritalStatus" onChange={handleFormData} value='Married'>Married</Radio>
              </Box>
              <Spacer />
              <Box
                color={useColorModeValue('gray', 'gray')}
                name="maritalStatus"
                value={formData.maritalStatus} spacing='24px'>
                <Radio name="maritalStatus" onChange={handleFormData} value='UnMarried'>UnMarried</Radio>
              </Box>
            </Flex>
          </FormControl>
          <Spacer />
        </HStack>

        <Flex gap={2}>
          <FormControl mt={"2px"} isRequired>
            <FormLabel className={Styles.slide_right}>Department</FormLabel>
            <Select
              color={useColorModeValue('gray', 'gray')}
              onChange={handleFormData}
              name="department"
              value={formData.department} placeholder='Select Department'>
              <option>Full_Stack</option>
              <option>Front_End</option>
              <option>Back_End</option>
              <option>UI_Developer</option>
              <option>UX_Designer</option>
            </Select>
          </FormControl>
          <Spacer />
          <FormControl mt={"2px"} isRequired>
            <FormLabel className={Styles.slide_right}>Salary</FormLabel>
            <Select
              color={useColorModeValue('gray', 'gray')}
              onChange={handleFormData}
              name="salary"
              value={formData.salary} placeholder='Enter Salary'>
              <option>40K</option>
              <option>50K</option>
              <option>60K</option>
              <option>70K</option>
              <option>80K</option>
            </Select>
          </FormControl>

        </Flex>

        <FormControl mt={"2px"} isRequired>
          <FormLabel className={Styles.slide_right}>Profile Photo</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsLink45Deg size={20} />}
            />
            <Input name="image" onChange={handleFormData}
              value={formData.image} placeholder='Paste Link' />
          </InputGroup>
        </FormControl>

        <HStack ml={"32%"} mt={"4"}>
          {
            isSubmit ? (
              <Button isLoading textAlign="start" colorScheme='cyan' size='lg'>
                Submit
              </Button>
            ) : (
              <Button onClick={HandleAddData} textAlign="start" colorScheme='teal' size='lg'>
                Submit
              </Button>
            )
          }
          <Spacer />
          {
            updateButton ? (
              <Button onClick={updateToServer} textAlign="start" colorScheme='orange' size='lg'>
                Update Data
              </Button>
            ) : <Text>.</Text>
          }
        </HStack>
      </Box>
    </Box>
  )
}

export default DetailsForm
