import { Box, HStack, Text, Center, Divider, Link } from "@chakra-ui/react";

function Navbar() {
    return (
        <Center 
            fontSize={'lg'} 
            display={{ base: 'none', md: 'flex' }} 
            fontWeight={'normal'} 
            fontFamily={'Poppins'} 
            bgColor={'transparent'} 
            w={'100%'}
            position={'relative'}  // Ensure the Center element is properly positioned
            zIndex={10}  // Make sure the navbar is above other content
        >
            <Box p={5}>
                <HStack 
                
                    fontSize='sm' 
                    spacing={10}  // Adjust spacing for better appearance
                    bgGradient='linear(to-l, pink.100, whitesmoke)'
                    bgClip='text'
                >
                    <Link href="/" _hover={{ textDecoration: 'none', color: 'pink' }}>
                        <Text fontWeight={'bold'}>HOME</Text>
                    </Link>
                    <Divider h={'20px'} orientation="vertical" />
                    <Link href="/booking" _hover={{ textDecoration: 'none', color: 'pink'}}>
                        <Text fontWeight={'bold'}>BOOK</Text>
                    </Link>
                    <Divider h={'20px'} orientation="vertical" />
                    <Link href="/contact" _hover={{ textDecoration: 'none', color: 'pink'}}>
                        <Text fontWeight={'bold'}>CONTACT</Text>
                    </Link>
                </HStack>
            </Box>
        </Center>
    );
}

export default Navbar;
