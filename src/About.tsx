import { Box, HStack, Text, Center } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `

function About() {
    

    return (
    <Center 
   
  
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={{ base: 5, md: 10}}>
       
        <Center>
            <Text fontWeight={'bolder'} pb={4} fontSize={'larger'} color={'whitesmoke'}>Important Information</Text>
                
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              <HStack p={4} animation={`${fadeIn} 2s`} fontFamily={'serif'}  textShadow={'0px 0px 0px white'}>
                <Text align={'center'} fontStyle={'italic'} fontSize={{ base: 'md', md: 'lg', lg: '2xl'}} color={'whitesmoke'}>
                Hey beautiful! 
My name is Hannah and I am a makeup artist/content creator who is passionate about all things beauty. <br /> <br /> I have been doing makeup for over 5 years now and I have worked with a variety of different skin tones and skin types.<br /> <br /> I am based in Greenwich, London. However I am able to travel if it aligns with my availability. 

<br /><br /><br />

Additional info & Terms and conditions :<br /><br />
	⁃	My services run from 9am - 7pm and new slots are available from the 1st of each month. If certain time slots are not showing up it means I am either booked or unavailable for that time/day<br /><br />
	⁃	I am able to reschedule bookings as long as there is a 48 hour notice period and there is availability for the new desired time slot <br /><br />
	⁃	Please be respectful of my time, you have a 15 minute grace period anything longer than that will result in an additional £10 fee. If you are running later than that do let me know failure to do so will lead to your booking being cancelled  <br /><br />
	⁃	No plus ones are allowed to your appointment if you are travelling to me, unless it is a group booking<br /><br />
	⁃	If you are unwell or experiencing and flu/cold like symptoms please cancel or reschedule your booking. <br /><br />
	⁃	For emergency bookings please email me directly, if I am available I will be more than happy to book you in<br /><br />
	⁃	All makeup will be provided however if you have a preferred foundation feel free to bring it along!

Thank you so much for booking with me, I hope to see you soon!

                </Text>
               
               
             
                </HStack>
                
                </Center>
                
            <Box p={5}>
                
       
        <Box>
            <Box pt={20}>
                
            </Box>
        </Box>
        </Box>
        </Center>
          
           
            
        </Box>
        

    
    </Box>
    </Center>

    )
        

}

export default About;