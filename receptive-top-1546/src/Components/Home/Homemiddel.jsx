import {Flex,Box,Text,Button,Img,Input} from '@chakra-ui/react'

function Homemiddel(){
    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '100%',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        hight:'200',
        px: 4,
        background:
          'url(https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg) center/cover no-repeat',
      }
      const basicBoxStyles2 = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '100%',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        hight:'200',
        px: 4,
        background:
          'url(https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg) center/cover no-repeat',
      }
        
  return (
 <div>
    <Flex w={'80%'}  h={'500'} m={'auto'} marginTop={'50'}>
      <Box  width={'100%'} sx={basicBoxStyles} filter='grayscale(40%)' >
        <Text mr={'auto'} mt={'auto'} fontSize={'40'}>Save instantly with <br />Expedia Rewards <br />
        <Text fontWeight={'100'} fontSize={'20'} >You can enjoy access to perks like Member Prices, <br />
         saving an average of 15% on thousands of hotels. Terms may apply.</Text><Button colorScheme='blue'>See Member Prices</Button></Text>

        
      </Box>
    </Flex>
    <Box>
        <Box display={'flex'} border={'1px solid black'} w={'80%'} m="auto" mt={'20'}  h={'300'}>
          <div>
          <Img h={'100%'} src={"https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"}/>
          </div>
          <div>
          <Text ml={'10'} mt={'8'} fontWeight={'bold'} fontSize="30">Go further with the Expedia app</Text>
          <Text ml={'10'}>Save even more - Get up to 20% on select hotels and earn double the points when</Text>
          <Text ml={'10'}>you book on the app. Our app deals help you to save on trips so you can travel more</Text>
          <Text ml={'10'}>and managing it all on the go.</Text>
          <Text ml={'10'} mt='3' fontSize={'20'} fontWeight={'bold'}>Text yourself a download link for easy access</Text>
          <Box display={'flex'} gap='8' mt={'3'}>
            <Input w={'40'} ml={'10'} text={'country'} placeholder='County code'/>
            <Input w={'40'} text='number' placeholder='Phone Number' />
            <Button pl={'10'} pr={'10'} color={'white'} bg={'blue'} >Get the app</Button>
          </Box>
          <Box>
            <Text mt={'3'} ml={'10'} fontSize={'14'}>By providing your number, you agree to receive a one-time automated text message with a link to get</Text>
            <Text ml={'10'} fontSize={'14'} >the app. Standard text message rates may apply.</Text>
          
          </Box>
          </div>
          <div>
            <Img mt={'10'} w={'150px'} src='https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/BEX-HP-CONTROL-27.png'/>
            <Text ml={'2'} fontWeight={'bold'}>Scan the QR code</Text>
          </div>
        </Box>
    </Box>
    <Box>
    <Flex w={'80%'}  h={'250'} m={'auto'} marginTop={'50'} flexWrap='wrap' gap='24px' >
      <Box border={'1px solid blue'} sx={basicBoxStyles2} filter='grayscale(50%)'>
        <Text mt={'auto'} mr={'auto'}>Plan ahead and save<br/>Book 60 days in advance for 20% off select stays.</Text>
      </Box>
      </Flex>
      <Box w={'80%'} m={'auto'} mt={'5'}>
      <Text fontWeight={'bold'} textAlign={'center'}>Explore a world of travel with Expedia</Text>
      <Text textAlign={'center'} color='blue'>Discover new places and experiences</Text>
      </Box>
      
    </Box>
    </div>
  )
}
export default Homemiddel