import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    Img,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    PopoverHeader,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Divider
  } from '@chakra-ui/react';

  import {
    ChevronDownIcon, 
  } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


function Navbar(){
 
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
          <Img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"/>
          <Menu>
  <MenuButton ml={'10'}  as={Button} bg="white" colorScheme='white' color="black"  rightIcon={<ChevronDownIcon />}>
    More travel
  </MenuButton>
  <MenuList boxShadow='lg' p='6' rounded='md' bg='white' width={'500px'}>
    <MenuItem >Download </MenuItem>
    <MenuItem>Create a Copy </MenuItem>
    <MenuItem>Mark as Draft </MenuItem>
    <MenuItem>Delete </MenuItem>
    <MenuItem>Attend a Workshop </MenuItem>
    
  </MenuList>
</Menu>
<Popover>
  <PopoverTrigger>
    <Button rightIcon={<ChevronDownIcon />}>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody pr={'30'}>
    <Link to="/allproduct"><Button >Download</Button></Link>
    </PopoverBody>
    <PopoverBody>
    <Button w={'200'}>Download</Button>
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
    Sign in 
  </Button>
      </PopoverTrigger>
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
        
      </PopoverContent>
    </Popover>
        </Stack>
      </Flex>   
    </Box>
        </div>
    )
}
export default Navbar