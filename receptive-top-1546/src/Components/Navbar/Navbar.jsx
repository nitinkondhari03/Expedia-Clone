import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Img,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Divider
  } from '@chakra-ui/react';

  import {
    ChevronDownIcon
  } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import {Auth} from '../Context/Auth' 
import { useContext } from 'react';

function Navbar(){
 const {registettrue,register,regiflase}=useContext(Auth)
const navigate=useNavigate()
const logout=()=>{
  navigate('/')
  regiflase()
}
    return(
        <div >
 <Box  borderBottom={2} borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')} >

      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        w={'80%'}
        m={'auto'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex  flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Link to='/'> <Img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"/></Link>
<Popover>
  <PopoverTrigger>
  <Button ml={'10'}  as={Button} bg="white" colorScheme='white' color="black"  rightIcon={<ChevronDownIcon />}>
    More travel
  </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
   
    <PopoverBody >
    <Button leftIcon={<Img w='6' src='data:image/png;base64,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'/>} pr={'200'} colorScheme='teal' color="black"  variant='ghost'>
   Stays
  </Button>
    </PopoverBody>
    <PopoverBody>
    <Button mt="-2" leftIcon={<Img w='6' src='data:image/png;base64,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'/>} pr={'200'} colorScheme='teal' color="black"  variant='ghost'>
     Flight
  </Button>
    </PopoverBody>
    <PopoverBody>
    <Button mt="-2" leftIcon={<Img w='7' src='data:image/png;base64,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'/>} pr={'200'} colorScheme='teal' color="black"  variant='ghost'>
    Car
  </Button>
    </PopoverBody><PopoverBody>
    <Button ml="3" mt="-2" leftIcon={<Img w='8' src='https://img.favpng.com/11/4/13/paper-packaging-and-labeling-logo-box-png-favpng-gvzE4w62Zb7txFW4iaVCt6tw1.jpg'/>} pr={'200'} colorScheme='teal' color="black"  variant='ghost'>
     Packages
  </Button>
    </PopoverBody><PopoverBody>
    <Button mt="-2" ml="3" leftIcon={<Img w='9' src='data:image/jpeg;base64,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'/>} pr={'145'} colorScheme='teal' color="black"  variant='ghost'>
     Holiday activities
  </Button>
    </PopoverBody><PopoverBody>
    <Button mt="-2"  pr={'230'} colorScheme='teal' color="black"  variant='ghost'>
     Deals
  </Button>
    </PopoverBody>
    <PopoverBody>
    <Button mt="-5"  pr={'230'} colorScheme='teal' color="black"  variant='ghost'>
    Groups & meetings 
  </Button>
    </PopoverBody>
    <PopoverBody>
    <Button mt="-5"  pr={'230'} colorScheme='teal' color="black"  variant='ghost'>
     Mobile
  </Button>
    </PopoverBody>
  </PopoverContent>
</Popover>
<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={10}>
            <Text>English</Text>
            <Text>Support</Text>
            <Text>Trips</Text>
            <Img w={'9'} h={'7'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAABQUFD8/Pzz8/P6+voyMjLc3NwkJCQtLS1ZWVnv7+94eHg2NjaPj4/W1taDg4NEREQ/Pz/n5+fFxcWbm5tKSkq9vb0PDw+YmJhubm5VVVXR0dGhoaGtra2zs7MYGBiMjIxjY2NycnJ+fn4XFxclJSXKyspmZma6plArAAAE2klEQVR4nO3dCXbiMBAE0AhM2OKwJmyBAFnvf8IZw/OAQYCNu6sE0/8EqgcIqdWyHx6MMcYYY4wxxhhjjDHGGGP+Q4N5K27GrfmAPRAl9ZlLVerswWhYuH1z9nDkzV3WM3tA0n7coXf2kGRVH48Suog9KFGj44B39lN88iTsswclquFJ6NiDEuULeEc/xKgz9CZcdNrsoQmIRt147M230fx4v+UlXLU+aZ4Ot9P9qbGHepXBJM4Tb2PZ7bCHW9iwlTveVm/BHnIho1zfzgPjeZU97ryG1+TbuI3PsV70+7mv/8Me/mWrEvkS08C/qnXPHqKooD/G9/L5/pqwY5z2KRLQuXWg39RqmSkmKw5yUR71xQI69xXgajUSmGP2jIOLWJX8BBPL0HZWs8tjLugxrA2Hrw5TVosdat9huVfGih1rp64S0LkhO1iqtlRK6EKZbaSWMsfW7Ghbx0cSckbscBuyf/VZ4xBWqDrzaCqA+bSmGjCEyWalnPCJHbB9pqAtg70En2gHdF1uwJr32EwWdzfsO9uVxi2i9gAJm8yAA0BA55jtRfrzTIL5r/8NSbjkBdTaFx56oyV8ASXkdYhVQAlfWQHboIC8lZvm1jeLVbBZwRKy1qZyJzGXzDgBtfe++zj1b8ySbYuzcJM58M2H01CMWZRucQ6+18CEnFMawPb+nwYlITAgp584giZklE070ISM7kx/Z7MWxsoUUWbbYRxCLS4PSxCjpIj8w+f85XehCRn7pw9owg9CQuSijXOij9v/JhgLU/k+r9ASokqJWxVLqOAVmpBRFL7/hIjD0Z2eJVQg3fZ8HuNadP7bhRJiS6hAsyXx2CMh4dWXDK9CaDmpIsulzjXwjaaRWnO31xLf+6XflJgxxhdMkWdrCfxRPqqXJoU/QcSWvBlF7zdwQnxfFLaozyjrY0vejKL3MzghvgVT48bhOfhbCdiCMKMkjC21EQo1EXZr4dw3emGK67xMoRem6GUpftmGPeNOoM+5US3eO+hTYL27v6eg/xCx9eAEutoGD4hu/ELvfxPYyRTZPZvC7i6wrSZb2KkGc6Ura4kMiF+zJZDlNvyKJoFc1aC3v1tTYELsyVqqibtXgq6VpnAVRXQVKgVrUPQ9Qh4CdsSGLnfvoMrCU1pCUMENe9EiC1OswTZ4Z0HmGuTFymOID5H5EUKOLyLs+f0R/eU3Y2e4T31xylqw7Wg/Khp9XHHsSzfgip3PKVcz0If3fooXu/HHMX5qdcUaa09xSK3JDXtL5hylnuhfdq49M42dIm/P5NOSr9mgey8ukb4mJPhWACk90U+xjb1ckU9DcBFex/Z05zUW68gMYyXjI1Tn130Ucjki7QucM4q8ym8XI3T/WlG9kpWbQOeYfctS8w3nnLCoErupUVy5BfH1EUN4qH0etzJOY4wx5g4V633jPZS8hEKL9iBf6XhJkYeBMR6ZUF6RjckLe7DXKZCQ/bqcK+U/ECc9r7u0/IdxNzmTJvL2MP6yB3q1Ws5T/xv9FSbydW5wHkcuJM+d9k/2IMu5/FNE9qeruNQGx3gwqbDzV6R4L8kRVD8zowbzPtySTv0Yn25yR+HV9l2qnTLfpyYvWmSfldmY3/Df/Cm14ctvL36M++vnEf/9qcYYY4wxxhhjjDHGGGOMMXB/AGHOV7JIrtI5AAAAAElFTkSuQmCC'/>
           
<Popover>
      <PopoverTrigger>
        
      <Button colorScheme='black' variant='link'>
        {registettrue? `Hello ,${register.FirstName}`: 'Sign in' }
  
  </Button>
      </PopoverTrigger>
      {!registettrue?
      <PopoverContent w={'auto'} h={'auto'} bg='white' borderColor='blue.800'>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
        <Img m={'auto'} w={'30%'} src='https://a.travel-assets.com/pricing-claim/sparkle_white.svg'/>
          <Text ml={'10'} fontSize={'20'} fontWeight={'bold'}>Save an average of 15% on</Text>
          <Text ml={'10'} fontSize={'20'} fontWeight={'bold'}>thousands of hotels when you're</Text>
          <Text ml={'10'} fontSize={'20'} fontWeight={'bold'}>signed in</Text>
          <Button  w="380px" m={'auto'}  colorScheme='blue' mt={'5'}>
          <Link to="/sign_in">Sign In</Link> </Button>
          <br />
          <Button colorScheme='teal' fontSize={'20'} ml={'100px'} mt={'5'} variant='link'>
 <Link to="/sign_up">Create a free account</Link> 
  </Button>
  <br />
  <Button mt={'5'} pr={'240'} colorScheme='teal' variant='ghost'>
    List of favourites
  </Button>
  <br />
  <Button pr={'240'} colorScheme='teal' variant='ghost'>
    Expedia Rewards
  </Button>
  <br />
  <Divider/>
  <Button mt={'5'} pr={'290'} colorScheme='teal' variant='ghost'>
    Feedback
  </Button>

        </PopoverBody>
        
      </PopoverContent>:
      <PopoverContent w={'auto'} h={'auto'} bg='white' borderColor='blue.800'>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <Text align={'center'} fontSize='18' fontWeight={'bold'} m='auto'>Hi,{""}{register.FirstName}</Text>
        <Text align={'center'} fontSize='16' mt='2' fontWeight={'bold'} m='auto'>{" "}{register.email}</Text>
        <Button  w="100px" fontSize={'14'} size='sm' borderLeftRadius={'30'} borderRightRadius={'30'} color="white" ml='140'  bg='#00264D' mt={'5'}>
        <Link to="/sign_in">Blue Member</Link> </Button>
        <Text align={'center'} fontSize='23'  fontWeight={'bold'} m='auto' mt='6'>₹0.00</Text>
        <Box mt='3' display={'flex'}>
        <Text ml='140' fontSize='15'  >Ponit value</Text>
        <Img ml={'2'} w='5' src='https://www.thesslstore.com/blog/wp-content/uploads/2017/05/circle-with-i-1.png'/>
        </Box>
        
<br />
<Button mt={'5'} pr={'240'} colorScheme='teal' variant='ghost'>
  List of favourites
</Button>
<br />
<Button pr={'240'} colorScheme='teal' variant='ghost'>
  Expedia Rewards
</Button>
<br />
<Divider/>
<Button mt={'3'} pr={'290'} colorScheme='teal' variant='ghost'>
  Feedback
</Button>
<Divider/>
<Button onClick={logout} mt={'3'} pr={'290'} colorScheme='teal' variant='ghost'>
  Sign out
</Button>

      </PopoverBody>
      
    </PopoverContent>
      }
    </Popover>
        </Stack>
      </Flex>   
    </Box>
        </div>
    )
}
export default Navbar