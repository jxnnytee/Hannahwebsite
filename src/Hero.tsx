import { Box, HStack, Text, Center, Heading, Button, Link, Spinner } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

function Hero() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading time (e.g., fetch data or wait for images to load)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box mt={{base: '-8'}} bgColor={'#4C3C3A'} maxW={'100%'}>
            {isLoading && (
                <Center minH="100vh"  color="white">
                    <Spinner size="xl" color="#A9876C" />
                </Center>
            )}
            {!isLoading && (
                <Center 
                    bgImg={'../images/hlb9-min.JPEG'}
                    mt={{ base: '-8', md: '-16' }}
                    bgRepeat={'none'} 
                    bgPos={'center'}
                    bgColor={'#4C3C3A'}
                    bgSize={'cover'}
                    minH={{ base: '100vh', md: '100vh' }} 
                    fontSize={'lg'} 
                    fontFamily={'Poppins'}
                >
                    <Box>
                        <Box p={5}>
                            <Heading 
                                fontSize={{ base: '9xl', md: '7xl', lg: '300' }} 
                                color={'whitesmoke'}
                                animation={`${fadeIn} 2s`}
                                opacity={'0.67'}
                                
                                fontWeight={'bold'}
                            >
                                HLB
                            </Heading>
                            <Center></Center>
                            <Center display={'block'} fontSize={{ base: 'md', md: '2xl', lg: '2xl' }}>
                                <Center>
                                    <HStack p={2} animation={`${fadeIn} 2s`} fontFamily={'Poppins'}>
                                        <Text 
                                            fontWeight={'bold'}
                                            opacity={'0.8'}
                                            
                                            fontSize={{ base: '2xl', md: '6xl' }} 
                                            color={'whitesmoke'}
                                        >
                                            HANNAH LONDON BEAUTY
                                        </Text>
                                    </HStack>
                                </Center>
                                <Box p={5}>
                                    <Link href="/booking">
                                        <Button 
                                            fontSize={{ base: '3xl', md: '5xl' }} 
                                            fontWeight={'bold'}
                                            color={'whitesmoke'}
                                            rounded={'12'}
                                            bgColor={'#4C3C3A'}
                                            opacity={'0.8'}
                                            padding={{ base: '30px', md: '50px 100px 50px 100px' }}
                                            borderRadius={'full'}
                                            _hover={{ bg: 'pink', color: 'white', border: 'none' }}
                                            animation={`${fadeIn} 2s`}
                                            fontFamily={'Poppins'}
                                        >
                                            BOOK NOW
                                        </Button>
                                    </Link>
                                    <Box>
                                        <Box pt={20}></Box>
                                    </Box>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Center>
            )}
        </Box>
    );
}

export default Hero;
