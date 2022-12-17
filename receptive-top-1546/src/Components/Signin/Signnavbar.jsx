import {
    Box,
    Flex,
    useColorModeValue,
    Img,
  } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
  import {
    ArrowBackIcon, 
  } from '@chakra-ui/icons';

function Signnavabr(){
    return(
        <div >
        <Box  borderBottom={2} borderStyle={'solid'}
               borderColor={useColorModeValue('gray.200', 'gray.900')} >
                
             <Flex
               bg={useColorModeValue('white', 'gray.800')}
               color={useColorModeValue('gray.600', 'white')}
               minH={'60px'}
               py={{ base: 2 }}
               px={{ base: 4 }}
               >
               <Flex   >
                <Box><Link to="/"><ArrowBackIcon w={'20'} h='30' color={'blue'}/></Link></Box>
                
               
                 <Img ml={'550'} h={'7'} src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"/>
               </Flex>
             </Flex>   
           </Box>
               </div>
    )
}
export default Signnavabr