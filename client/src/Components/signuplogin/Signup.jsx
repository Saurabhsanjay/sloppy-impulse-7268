import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'

import projectplanner from '../Navbar/Project.png'
const Signup = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const auth=localStorage.getItem("user");
    const Navigate=useNavigate()
 useEffect(()=>{
   if(auth){
     Navigate('/login')
   }
 },[])
 

    const collectData = async () => {
        
        let result = await fetch('/register', {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type':'application/json'
            }
        })

        result=await result.json()
        // console.log(result);

        if(result){
            localStorage.setItem("user",JSON.stringify(result))
           
        }
    }
    return (
        <>
     


 <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={10}>
          <Stack spacing={4}>
          <HStack justifyContent='center' alignItems='center'>
            <Image  w="140px"
             src={projectplanner} /></HStack>
            <HStack>
           
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input width={300} onChange={(e) => setname(e.target.value)} value={name}  type="text" />
                </FormControl>
              </Box>
             
            </HStack>
          
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => setemail(e.target.value)} value={email} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={(e) => setpassword(e.target.value)} value={password} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button   disabled={!email || !password || !name} onClick={()=>{ Navigate("/login"); collectData()}}
                loadingText="Submitting"
                size="lg"
                bg={'green.500'}
                color={'white'}
                _hover={{
                  bg: 'green.600',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>

    )
}

export default Signup
