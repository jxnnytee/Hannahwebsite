import { Box, Button, Center, Input, Text, Textarea, Spinner } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const form = useRef(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Simulate a loading time (e.g., fetch data or wait for images to load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_yy54r7e', 'template_7kj3oc9', e.target, '32JodH7Khscah0NUv')
      .then((result: any) => {
        console.log(result.text);
        navigate('/thankyou');
        window.scrollTo(0, 0); // Navigate to /success after successful form submission
      }, (error: any) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Box bgColor={"black"} fontFamily={"Poppins"}>
        <Center>
          {isLoading ? (
            <Center minH="100vh" color="white">
              <Spinner size="xl" color="pink.500" />
            </Center>
          ) : (
            <Box
              minH={{ base: "100vh", md: "100vh" }}
              minW={{ base: "100%", md: "100rem" }}
              bgRepeat={"none"}
              bgPos={"center"}
              bgSize={"cover"}
            >
              <Box px={{ base: 0, md: 500 }}>
                <Text
                  fontFamily={"Poppins"}
                  pt={70}
                  color={"whitesmoke"}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                >
                  GET IN TOUCH
                </Text>
                <form ref={form} onSubmit={sendEmail}>
                  <Box p={4}>
                    <Box
                      w={"100%"}
                      borderRadius={20}
                      textAlign={"start"}
                      color={"whitesmoke"}
                      bgColor={"transparent"}
                      p={5}
                      fontWeight={'bold'}
                      h={"100%"}
                    >
                      <Text fontWeight={'bold'} pb={1}>NAME</Text>
                      <Input type="text" name="name" borderRadius={0} placeholder={"First Name"} />
                      <Text pb={1} pt={5}>PHONE NUMBER</Text>
                      <Input type="number" name="phonenumber" maxLength={11} borderRadius={0} placeholder={"Phone Number"} />
                      <Text pb={1} pt={5}>EMAIL</Text>
                      <Input name="email" borderRadius={0} type="text" placeholder={"Email"} />
                      <Text pb={1} pt={5}>MESSAGE</Text>
                      <Textarea name="message" borderRadius={0}></Textarea>
                      <Center>
                        <Button
                          mt={70}
                          fontSize={{ base: '2xl', md: '5xl' }}
                          fontWeight={'bold'}
                          color={'black'}
                          rounded={'12'}
                          value={'send'}
                          bgColor={'pink'}
                          type={'submit'}
                          padding={{ base: '30px', md: '50px 100px 50px 100px' }}
                          borderRadius={'full'}
                          _hover={{ bg: 'pink.300', color: 'white', border: 'none' }}
                          fontFamily={'Poppins'}
                        >
                          SEND
                        </Button>
                      </Center>
                      <Box mt={20} w={'100%'} alignItems={'center'}>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          )}
        </Center>
      </Box>
    </>
  );
}

export default Contact;
