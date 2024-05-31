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
            <Box bgColor={'black'} bgClip='border-box' fontFamily={"Poppins"} mt={{ base: '-8', md: '-16' }}>
                <Center>
                    {isLoading ? (
                        <Center minH="100vh" color="white">
                            <Spinner size="xl" color="pink.500" />
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
                                    color={'whitesmoke'}
                                    fontSize={"4xl"}
                                    fontWeight={"bold"}
                                >
                                    BOOKING
                                </Text>
                                <Text p={8} fontWeight={'light'} fontSize={{ base: 'sm', md: 'lg' }} color={'whitesmoke'}>
                                    Secure your spot by booking today. You will be redirected to the booking page.
                                </Text>
                                <Center>
                                    <Box p={5}>
                                        <Button
                                            onClick={openBookingPopup}
                                            fontSize={{ base: '2xl', md: '5xl', lg: '5xl' }}
                                            fontWeight={'bold'}
                                            color={'black'}
                                            rounded={'12'}
                                            bgColor={'pink'}
                                            padding={{ base: '30px', md: '50px 100px 50px 100px' }}
                                            borderRadius={'full'}
                                            _hover={{ bg: 'pink.400', color: 'white', border: 'none' }}
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
