import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Img,
  Heading,
  Divider
} from '@chakra-ui/react';

function Footer(){
  return(
    <div>
      <Box  w={'80%'} m={'auto'} mt={'10'} >
        <Img src={'https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg'}/>
      </Box>
     <Box
     width={'80%'}
     m={'auto'}
    mt={'8'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'10xl'} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
         
          <Stack color={'blue'} fontSize={'13'} align={'flex-start'}>
          <Heading as='h7'  color={'black'} size='xs'>Company</Heading>
            <Link href={'#'}>About us</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>jobs</Link>
            </Stack>
            <Link href={'#'}>List your property</Link>
            <Link href={'#'}>Partneeshps</Link>
           
          </Stack>
          <Stack color={'blue'} fontSize={'13'} align={'flex-start'}>
          <Heading as='h6' color={'black'} size='xs'>Explore</Heading>
            <Link href={'#'}>India travel guide</Link>
            <Link href={'#'}>Hotels in India</Link>
            <Link href={'#'}>Holiday rentals in India</Link>
            <Link href={'#'}>Holiday packages in India</Link>
            <Link href={'#'}>Domestic flights</Link>
            <Link href={'#'}>Car hire in India</Link>
            <Link href={'#'}>All accommodation types</Link>
            <Link href={'#'}>Travel blog</Link>
          </Stack>
          <Stack color={'blue'} fontSize={'13'} align={'flex-start'}>
          <Heading as='h6' color={'black'} size='xs'>Policies</Heading>
            <Link href={'#'}>Privacy Statement</Link>
            <Link href={'#'}>Terms of use</Link>
            <Link href={'#'}>Vibo terms and conditions</Link>
            
          </Stack>
          <Stack color={'blue'} fontSize={'13'} align={'flex-start'}>
          <Heading as='h6' color={'black'} size='xs'>Help</Heading>
            <Link href={'#'}>Support</Link>
            <Link href={'#'}>Change or cancel your booking</Link>
            <Link href={'#'}>Refund process and timelines</Link>
            <Link href={'#'}>Book a flight useing an airline credit</Link>
            <Link href={'#'}>International travel documents</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Box w={'80%'} m="auto" mt={'10'} mb={'10'}>
    <Divider size={'10'} color='black' orientation='horizontal' />
    <Img  src='https://images.trvl-media.com/media/content/expind/images/sg/secure.png'/>
    <Text fontSize={'14'}>© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</Text>
    </Box>
    

    </div>
  )

}


export default Footer