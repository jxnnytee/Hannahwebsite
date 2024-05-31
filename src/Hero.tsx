import { Box, HStack, Text, Center, Heading, Button, Link } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `

function Hero() {
    

    return (
        <Box maxW={'100%'}>
    <Center 
    
    bgImg={'../images/hlb9.JPEG'}
    mt={{ base:'-8', md: '-16'}} 
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} 
     fontSize={'lg'}   fontFamily={'Poppins'} >
            <Box>
        <Box p={5}>
        <Heading  fontSize={{ base:'9xl', md: '7xl', lg: '300'}} 
            color={'white'}
       
        animation={`${fadeIn} 2s`}
        opacity={'0.8'}
        bgGradient='linear(to-l, pink.100, whitesmoke)'
  bgClip='text'
        fontWeight={'bold'} >
            HLB
        </Heading>
        <Center>
                
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              <HStack  p={2} animation={`${fadeIn} 2s`} fontFamily={'Poppins'}  >
                <Text fontWeight={'bold'}
                opacity={'0.8'}
                bgGradient='linear(to-l, pink.300, pink.100)'
  bgClip='text'
                fontSize={{ base: '2xl', md: '6xl'}} color={'white'}>
                    HANNAH LONDON BEAUTY
                </Text>
               
               
             
                </HStack>
                
                </Center>
                
            <Box p={5}>
                <Link href="/booking">
        <Button fontSize={{ base: '2xl', md: '5xl'}} fontWeight={'bold'} 
      
        color={'gray.700'}
        rounded={'12'}
        bgGradient='linear(to-l, pink.100, whitesmoke)'
  bgClip='border-box'
        opacity={'0.8'}
        padding={{base: '30px', md: '50px 100px 50px 100px'}}
        borderRadius={'full'}
        _hover={{ bg: 'pink', color: 'white', border: 'none' }}
        animation={`${fadeIn} 2s`}
        
        fontFamily={'Poppins'}>BOOK NOW</Button>
        </Link>
        <Box>
            <Box pt={20}>
                
            </Box>
        </Box>
        </Box>
        </Center>
          
           
            
        </Box>
        

    
    </Box>
    </Center>
    </Box>

    )
        

}

export default Hero;