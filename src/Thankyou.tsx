import { Box, Text, Center, Heading, Button, Image, Link } from "@chakra-ui/react"



function Thankyou() {

    return (
    <Center 
    bgImg={'../images/nn.jpg'}
  
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={5} pt={100}>
        <Heading  fontSize={{ base:'4xl', md: '7xl', lg: '8xl'}} 
         color={'whitesmoke'}
         fontFamily={'Poppins'}
        
        fontWeight={'bold'} >
        CONFIRMED
        </Heading>
        <Center>
            <Text mt={10} fontSize={'lg'} textShadow={'0px 0px 20px white'} color={'whitesmoke'}>We will be in touch shortly</Text>
               
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              
                </Center>
                
            <Box p={5}>
                <Link href="/">
                <Button fontSize={{ base: '2xl', md: '5xl'}} fontWeight={'bold'} 
      
      color={'black'}
      rounded={'12'}
      
      padding={{base: '30px', md: '50px 100px 50px 100px'}}
      borderRadius={'full'}
      _hover={{ bg: 'black', color: 'white' }}
      
      fontFamily={'Poppins'}>RETURN TO HOME</Button>
        </Link>
        <Box>
            <Box pt={20}>
                <Center>
            <Image  w={10} h={20} src={'../images/downer.gif'} transform={'rotate(180deg)'} />
            </Center>
            </Box>
        </Box>
        </Box>
        </Center>
          
           
            
        </Box>
        

    
    </Box>
    </Center>

    )
        

}

export default Thankyou;