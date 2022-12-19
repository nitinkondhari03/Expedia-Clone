
import { Box, Button, Center, Text ,Heading,Img,Flex,FormControl,FormLabel,Input,InputGroup,
    InputRightElement,
    Stack,
    Collapse ,
  } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Signnavabr from '../Signin/Signnavbar'
import {Auth} from '../Context/Auth'
import { useContext } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
function SignUp(){
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] =useState(false)
    const [email,setemail]=useState('')
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [Password,setpassword]=useState('')
    const navigate=useNavigate()
    const handleToggle = () => setShow(!show)
    const {register,setresiter}=useContext(Auth)

    const submitValue=(event)=>{
      event.preventDefault()
      const frmdetails = {
        'FirstName':firstName,
        'LastName':lastName,
        'Password':Password,
        'email':email
    }
    toast({
      position: 'top',
      title: 'Account created.',
      description: "your account as created successfully.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    setresiter(frmdetails);
    navigate('/sign_in')
    }
console.log(register)
    return(
        <div>
          <Signnavabr/>
           <Box w={"30%"}  m='auto' mt={'8'}>
           <Heading as='h4' size='lg'>
           Create an account
            </Heading>
            <Text mt={'5'} fontSize={'15'}>Save an average of 15% on thousands of hotels as a member—</Text>
            <Text fontSize={'15'}>it’s always free.</Text>
            <Center p={8}>
      <Stack mr={'auto'}   ml={'-8'}>
    
        <Button bg={'blue.400'} color={'white'} mr={'auto'} pr={'120'} variant={'outline'} leftIcon={<Img  w={'8'} src={'data:image/png;base64,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'}/>} >
          <Center>
            <Text ml={'90'}>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
    <Text mt={'-5'} w={'10'} ml={'auto'} mr={'auto'} >or</Text>
    <Box>
    <Flex>
      <Stack>
        <Box
          rounded={'lg'}>
          <Stack>
          <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' placeholder='Email address' value={email} onChange={((e)=>setemail(e.target.value))} />
            </FormControl>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" pr={'200'} placeholder="First Name" value={firstName} onChange={((e)=>setfirstName(e.target.value))}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder='Last Name' type="text" value={lastName} onChange={((e)=>setlastName(e.target.value))} />
                </FormControl>
              </Box>
            
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}   mb={'5'} placeholder='Password' value={Password} onChange={((e)=>setpassword(e.target.value))}/>
                <InputRightElement h={'full'}>
                  <Button  mb={'5'}
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Collapse  startingHeight={20} in={show}>
        <Box  display={'flex'}> <input type={'checkbox'}  size='sm' onClick={handleToggle}  />
        <p ml='10'>Keep me signed in</p></Box>
       <Text w={'15'} fontSize={'14'}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
       </Collapse>
       <Collapse  startingHeight={20} in={show}>
        <Box  display={'flex'}> <input type={'checkbox'}  size='sm'  />
        <Text mt={'6'} ml={'2'} fontSize="15">I'd like to receive travel deals, special offers and other information from Expedia via email</Text></Box>
       </Collapse>
       <Text w={'15'} fontSize="15">By creating an account, I agree to the Expedia <Text fontSize="15" as={'span'} color={'blue.400'}>
       Terms and <br />Conditions, Privacy Statement 
          </Text>and<Text fontSize="15" as={'span'} color={'blue.400'}>
          Expedia Rewards Terms and Conditions.
        </Text></Text>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                onClick={submitValue}
                _hover={{
                  bg: 'blue.500',
                }}>
               Continue
              </Button>
            </Stack>
            <Stack  pb={'10'}>
              <Text mt={'5'} align={'center'}>Already have an account?
               <Link to='/sign_in' color={'blue'}>Sign in</Link>
              </Text>
              <Text mt={'5'} align={'center'}>
              Other ways to sign up
              </Text>
              <Box  gap={'3'} display={'flex'}>
                <Img mt='2' ml={'auto'}  w={'7'} src={'https://a.travel-assets.com/egds/marks/apple.svg'}/>
                <Img mt='2' mr={'auto'}  w={'7'} src='https://a.travel-assets.com/egds/marks/facebook.svg'/>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
    </Box>
        </div>
    )
}

export default SignUp