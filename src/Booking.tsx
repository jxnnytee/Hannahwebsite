import { Box, Center, Text, Button, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Simulate a loading time (e.g., fetch data or wait for images to load)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    const openBookingPopup = () => {
        window.open("https://hannahlondonbeauty.dayschedule.com/", "_blank");
    };

    return (
        <>
            <Box bgColor={'#4C3C3A'}  fontFamily={"Poppins"} mt={{ base: '-8', md: '-16' }}>
                <Center>
                    {isLoading ? (
                        <Center minH="100vh" color="white" >
                            <Spinner size="xl" color="#A9876C" />
                        </Center>
                    ) : (
                        <Box
                            w={"100%"}
                            minH={{ base: "100vh", md: "100vh" }}
                            bgRepeat={"none"}
                            bgPos={"center"}
                            mt={{ base: 20, md: 100 }}
                            bgSize={"cover"}
                        >
                            <Box px={{ base: 0, md: 0 }}>
                                <Text
                                    fontFamily={"Poppins"}
                                    pt={10}
                                    color={'#A9876C'}
                                    fontSize={"4xl"}
                                    opacity={0.9}
                                    fontWeight={"bold"}
                                    
                                >
                                    BOOKING
                                </Text>
                                <Text p={8} fontWeight={'light'} fontSize={{ base: 'sm', md: 'lg' }} color={'whitesmoke'}>
                                    Secure your spot by booking today. You will be redirected to the booking page.
                                </Text>
                                <Text mb={2} p={2} opacity={'0.6'} fontWeight={'normal'} fontSize={{ base: 'sm', md: 'sm' }} color={'whitesmoke'}>
                                    (Please read important information below)
                                </Text>
                                <Center>
                                    <Box p={5}>
                                        <Button
                                            onClick={openBookingPopup}
                                            fontSize={{ base: '2xl', md: '5xl', lg: '5xl' }}
                                            fontWeight={'bold'}
                                            color={'#4C3C3A'}
                                            rounded={'12'}
                                            bgColor={'#A9876C'}
                                            padding={{ base: '30px', md: '50px 100px 50px 100px' }}
                                            borderRadius={'full'}
                                            _hover={{ bg: 'brown', color: 'white', border: 'none' }}
                                            fontFamily={'Poppins'}
                                        >
                                            BOOK NOW
                                        </Button>
                                    </Box>
                                </Center>
                            </Box>
                        </Box>
                    )}
                </Center>
            </Box>
        </>
    );
}

export default Booking;
