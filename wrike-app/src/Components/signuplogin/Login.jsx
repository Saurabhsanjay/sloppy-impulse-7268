import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    HStack,
    useToast,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectplanner from '../Navbar/Project.png'
  const  Login=()=> {
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const toast=useToast()
const Navigate=useNavigate()

useEffect(()=>{
    const auth=localStorage.getItem("user")
    if(auth){
        Navigate("/")
    }
},[])

const getLogin= async()=>{
    // console.log(email,password)

    let result = await fetch('http://localhost:5000/login',{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{"Content-Type":"application/json"}
    })
   result= await result.json()
   console.log(result);
   if(result.name){
    localStorage.setItem("user",JSON.stringify(result))
    Navigate("/")
   }
   else{
   
toast({
    title: 'please Enter Correct Details',
    status: 'error',
    duration: 2000,
    position: 'top',
    isClosable: true,})
   }
}

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <HStack justifyContent='center' alignItems='center'>
            <Image  w="150px"
             src={projectplanner} /></HStack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setemail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button disabled={!email || !password }  onClick={getLogin}
                  bg={'green.500'}
                  color={'white'}
                  _hover={{
                    bg: 'green.600',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Login;