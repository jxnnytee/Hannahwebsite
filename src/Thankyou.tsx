import { Box, Text, Center, Heading, Button, Link, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Thankyou() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetch data or wait for images to load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Center minH="100vh" w="100%" bg="#A9876C">
      {isLoading ? (
        <Center minH="100vh" color="white">
          <Spinner size="xl" color="#4C3C3A" />
        </Center>
      ) : (
        <Box
          bgImg={'../images/nn.jpg'}
          bgRepeat={'none'}
          bgPos={'center'}
          bgSize={'cover'}
          minH={{ base: '100vh', md: '100vh' }}
          fontSize={'lg'}
          fontFamily={'Poppins'}
          w={'100%'}
        >
          <Box>
            <Box p={5} pt={100}>
              <Heading
                fontSize={{ base: '4xl', md: '7xl', lg: '8xl' }}
                color={'whitesmoke'}
                fontFamily={'Poppins'}
                fontWeight={'bold'}
                opacity={'0.7'}
              >
                CONFIRMED
              </Heading>
              <Center p={{base: 10, md: 10}}>
                <Text mt={{base: 0, md: 0}} fontSize={{base: 'lg', md: '3xl'}}  color={'whitesmoke'}>
                  We will be in touch shortly
                </Text>
              </Center>
              <Center display={'block'} fontSize={{ base: 'md', md: '2xl', lg: '2xl' }}>
                <Box p={5}>
                  <Link href="/">
                    <Button
                      fontSize={{ base: '2xl', md: '5xl' }}
                      fontWeight={'bold'}
                      color={'black'}
                      rounded={'12'}
                      padding={{ base: '30px', md: '50px 100px 50px 100px' }}
                      borderRadius={'full'}
                      _hover={{ bg: '#4C3C3A', color: 'white', border: 'none' }}
                      fontFamily={'Poppins'}
                    >
                      RETURN TO HOME
                    </Button>
                  </Link>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      )}
    </Center>
  );
}

export default Thankyou;
