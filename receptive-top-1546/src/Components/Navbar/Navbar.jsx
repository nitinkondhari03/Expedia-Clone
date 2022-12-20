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
    <Button ml="3" mt="-2" leftIcon={<Img w='6' src='data:image/png;base64,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'/>} pr={'200'} colorScheme='teal' color="black"  variant='ghost'>
     Packages
  </Button>
    </PopoverBody><PopoverBody>
    <Button mt="-2" ml="3" leftIcon={<Img w='9' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAwFBMVEX///8AAAAREiTa2tvFxcX09PRycnKmpqbp6em7u7v39/ft7e0ODyL7+/uhoaHU1NRLS0tCQkIAABqbm5vOzs7q6uqDg4PIyMji4uI8PDw1NTW0tLRHR0chISGLi4uurq6Hh4coKChdXV1wcHB7e3tSUlIVFRUAABUAAByTk5MnJydlZWVRUVEMDAyUlJofIC9bW2aMjZR5eYEpKjhBQUxtbnZlZm4AAA6DhIs8PEk0M0AZGixNUFk/QU91dH1qanNh1/cGAAAMOElEQVR4nO2cDXeivBKAiagogih+a9VqbdG1RQVr8eNt//+/ukkASTBY9VagPXnO2V2qrM04mcnMZIIgcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+H8CnKFdruhXnCj2mi3C7m7j+dn0GavIwDAW3dcbp+9USyPu2/wztHrTItpbP8H2S4g6BQjbyx2yBu72fMfK0Z/UCy0X0GIiBG3uuEbn8+qF4DeXQZ8IcXwaBGTU2NT86wbzyhNBqB8x3F/h8QaLrShsC4K/9g3DiM/OVnBIuSCiNR9YuR9kZIlKlij749vPDkn2Ylck7F/1S9FfHbCUzGn9SRpWIfr0lNo7P1grcq9hd57gq/Vh5LU06gFTa52AzFpwQYgKR+ZO/F5D8f3KuG3umw1iZQCczn5eD0AoHm/sZ+j3Q8PPvjCa6dv9dmOvhwxNaFcnagpe1+yp2OHuGMpMN9jO3r4HfwruJ9Ybk5mPfcTmlDHyQRhDJ0gJvhN5gIGQI35SWUscunRv6vSEtBU7srMu++MGvYbRxpClMIA9iAMalCSHnlbXhbUSTLzUCg++KOY0epBWhlQr+Rn/tVDpJsL6b+TZCqQyw7LwyKyjhE1KAGFfAQj+EK7CO/NRo/2ZNHvxiXFOTR6TKJQp1/4Pllph+UC4PHuw45ArReLWlsrQpMKhfqN8Lx6/vbDxuCU80nenSjUjllW7iTWF4Tn0CvfBRAMhSWyOGvz4NfD9OnlRD8nAck35YMyS7DuJTWHn0QmnWD3dD1rCiVa1Hw5+82KxJqJ7roRIxo16vrpkjUjZ1Z/dsZUtAfEmKFh77OzHfh+dRCLXHQc1YFZTHmSz08m+bk/ulogWAUbV66drQ0eH2dDLaSDJ1/pbMGy/qJdiEGukGcnKxSyOKcFe0NiqcX5KLi9UiMHKeYRzSjBNKH+hG6QYpCrFE6ywLjYVjHobewE/KkIwyKhNAjfD+aMucm2sThDqjlzBJiXJw2H5OBRaCDxYfqfOxULMThxd8xiQydGr9iKlgvGtzAVK8EAciyoXWT50B7zL8w7O2GjaTDlj08uoRot1sz7fsUqXKArL37xo8e+OzwdWTMhDpfh4TmF7ukwkCBqO1tHZpHPCT1kXlpWhEFvif1lhCRjpDmz+OTyA4SGn0Z2S0NvFFCuHnZtcygaWo1lZG2gD1OYEqN+cGpAJyXYSoxyecHu4JgftwTVHTW0Lj/9fcO6OFZ5YHwVCvU9whYU8h8PscZTuLD7KvhBLsqGsaMeqcLwOKQ+UlhQopow6lUY0oQmcMVrkZp9hDofx2Zk2Ivj1BbbzQhdSd7gifVNopXUJoQmmQQf/IhrHnJt5L2FFg64aL/EtZAh31FF+nDNBn+hOBKpU5JA6yArxFI4KfEm7dsxnW76NUdVHNZqZS/Prp0pGP8wom8ZaKSv3i8F+NumlELnY00hh/7RCp5Sh/634NfimhEZCpwML/HMxnbVy/E1MDpuKzy8oaWYXK7e6BBpgAV7ProHyV+1vEQSfl3VoBYiioGWpNiTzXYr+Ibx0kXNtjydOBbxdEWq7vjy5HBAMnY/QB2/BnLRtXvprRWLPOc4er6aay1Df2usnxNmwI2w3FUY+dISumDFggnvtjDw9oyeUcalIgfjb2YW3VocFhd7GrzyFrqeVw2RPsHc+BiVo3qvo1EVjW7iWRSylY57U3sEHQJWlJwnt5yOpFAwmKN0X2Qh51WvXmAAUulP3JCwGMQZ5RfgydOq/BLBXIKQlxx2IYh51TPlYAFVvBLuh4iAiPgm39/NoFD/4RH9EA+BYCCRTaA7USLkuqBi/3ugBEvppLoJeUQIFmNqf3+IsL4KV+2kh/NztMmZWOh/d3urXE4+GryMYwW8jNQX2cnWGsAYK4vTuj5cuHKP6ZdPxLlYNYvrM+z9Vm2Ck7FjNXWAU+5J6r1ou9VCxoV1x2jsKKKSUI3afx+4iU70znuKkN0CwMkmrYZjyU6o3tbzKmDVlC8RqnRsAqEdY27ivxoqapd8t/OU7o7oILKiIkbNq7DlT9rm5sdaZT/VSiNKA0SafKz4tE+22cid0ZTmLRiiBzNoJj16izmjhvpMtF/FVMHJNR+vLzcHIz7W4JuEdhjtDxpRm7wt47mWwS0bH4QJeTnmLHiFLqgGwgQbtrHorAbA29UVWaKA6nbyERnozCu/haD6Ktjtfz8Latq4+vcQ+124mZYsgYvsDs4i1R0dR4iFJtHVVkZsncC5qBJ7FiOV3aU5p3Y2XmJYz3LgBisjxl6m+00ngszcCnyRCf+C5bw7t6iMsKkSvfVXjDpoUKfDrBgW6hy4ftUMBj+jSzxwZjJbwpAhU5WFzl1koZkBZtn2HMHOc4lWRDeyWWQe6lSN4VgS+iav7fvxmzMnoYaicaivNmAk016lehdZaAZ+yf1yfEegheLCmbsPyKJBruIgFitDKos+G8XEm3/9cCBfjG7vaYWaItit7D9L82r3IfoKEgoUqiAXIpAFlX7hPrJQqI+zax2+K9iVev4NeC5jMJsNBn+pjE9F8KkvQF0D2UMUR7AeG2QIP056MGe50ntQ8dF9RvQzlK49IEQKlshxjgt5uraFkDyKn+Iar9c3dAVk4JfQIdJL0K4eH9nCHUdAeyNuiITjKvkMucDFkB1x14bQceJuZskRnbABr36YQUX1Kd7cLLtzUf5GrqDcSXVmf/MYj0R5xVOReYaNwt/toxayOJvNr0WtIo2pF2tMJjPnOIpON1P6h3pc66Pzcs2P6zh5dLOaYu+BewLglFJLZwlup4o2CZ3WvpA66yhRJNTWQ5qDKsGtZOQfm5eVrKjDmykOqjBesfOijJ86iZT6lMwrq12yLlHlqHg28/4fPJdwQbaf0whSbmMQ1fPif6q5DePtAvWl20hxYef0aO1VpLjUeNKlcR1JD/8M7McA/QHBIs66XUaaA324UOPD8rcATSw7fiyKqY6Kb6ONnc+/53IaHaScuxGBTGeq7tniFJFln7W/gCeZOBBYEYTq/LunmMQJ2nCYFa+n94yP5R5z6wo+5dMfpCWKgT7x+cbOmR5uzWlQgkHGqTA3LVQTrmcvpY2XwPFxj6kSnMtKg2h993S6h8h+ygibIc7ohn5hv0IeOHtKunowoxoVmlEysOnhQ9IlL3ap0E/SSLZptoSblT200XVyodpHAT9KoMsQDFSSzNpqRCoW8YjFc4xxkcf7r2HBEi2NdIMsP/IRi+doIZX13IryqWDJRZLisZImh5/wdhmv6AsZuw9WYwiWWHGkjB/ogXhgjPoS0FMKX2RcdWQJRlhwrIz9DPg2fQHcItUHGl7KOsxnbSWjs1bWzTcaxYuX5TDQmWZLQgNe1ZmrezHd51s4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDucGxD9K1JNffz1C5o/CBftteIIp3p8M8W8mo08zSvATvFL04MeU4wqmbJWMYu/d653/nrE8GPbWF2V/UBR7ufstkrmCTb82urEyDCOjG2C11w1DhxdDSZLea8AAQNEB2GkAbJ3/0icYe0SexhYrY+FYpgMs89Mxd6Zprc2DeADgq7FcaXV7LYqH7Fqz/4tVY3pmCk1BQX+gFaC/kDVgWdzXIFP4kzKdKvoeXegZ31g8GzNWma/3T+PzfQOAM11lwOfn8mNdF513066DzTC7BXZD03UlVrkc4OgZw97ZykLZO19rfaHoC8fYK4v9fq/YcCzvlvOfuXas9+Xqy15tFiawDgopmL5cOktz82WtdcNRah/GxjlMP8BUtMxDD2x7rY8Pu60t4p2H0411kExrudqsLHNjLaWD47xvyqvMYgWvLEtyNjt7ZZSdnblefjkL+Le1sA46KZiiSNZipdi2qSyWm/dlxlweprX3VWsr2uJn1jJ71rq1Fj9iFUyxe4p0WK2tpWlJ+6VpLh3TOUjOdgsFW31mTPM9I22XFrSh9SdU2caxetuyRQmWmb4vpvbK0u3V58cGbFYLe6ccTEeHnnFqbowPOCXfwec2XpUptr7YfRz03X63UHa7qb3b62tb2e53tm0vMra9nh4Oi+3HVtmtFzsDzraFrri+PVigp8g+oYEaOrJZA1ns1ICWCM3KgAaqG4RhxidZ4CQyvhvxX3B/xGaveD+THvKvRx5/Dy7Yb+N/UEDxWxf+3ZcAAAAASUVORK5CYII='/>} pr={'145'} colorScheme='teal' color="black"  variant='ghost'>
     Holiday activities
  </Button>
    </PopoverBody><PopoverBody>
    <Button mt="-2"  pr={'230'} colorScheme='teal' color="black"  variant='ghost'>
     Deals
  </Button>
    </PopoverBody>
    <PopoverBody>
    <Button mt="-5"  pr={'140'} colorScheme='teal' color="black"  variant='ghost'>
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