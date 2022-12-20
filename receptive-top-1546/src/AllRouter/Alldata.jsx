import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Button,Heading,Text,Box,Img} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import {Auth} from '../Components/Context/Auth'
function Alldata({titile,img,rating,wonder,reviews,price,priced,city,id}){

  return(
    <div> 

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width={'800px'}
  h='250'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '300px' }}
    src={img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody mt={'-4'}>
      <Heading fontSize={'25'}>
        {titile}</Heading>
      <Text >
       {city}
      </Text>
    </CardBody>
    <Box  display={'flex'} >
      <Img mb='5' ml={'5'} w="10" h="10" src="data:image/png;base64,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"/>
      <Text mt='2' ml='2'>Pool</Text>
      <Img mb='5' ml={'5'} w="10" h="10" src="https://www.shutterstock.com/image-vector/man-sauna-silhouette-vector-icon-260nw-1962287533.jpg"/>
      <Text mt='2' ml='2'>Hot tub</Text>
    </Box>
    <Box  display={'flex'} >
      <Box >
        <Text ml={"5"} color={'green'}>Full refundable</Text>
        <Text ml={"5"} color={'green'}>Reserve now.pay later</Text>
        <Box display={'flex'}>
        <Text ml={'5'} mt={'5'} mb={'5'} fontWeight={'bold'}>{rating}</Text>
        <Text mt='5'ml={'2'}>{wonder}</Text>
        <Text mt='5' ml={'2'}>{reviews}</Text>
        </Box>
        
      </Box>
      <Box  mt={'3'} ml={'100'}>
      <Text fontSize={'20'} fontWeight={'bold'}>₹{price}</Text>
      <Text>₹{priced}</Text>
      <Text>includes taxes & fees</Text>
      </Box>
    </Box>
  </Stack>
</Card>
    </div>
  )
}
export default Alldata