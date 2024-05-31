import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box bgGradient='linear(to-l, pink.100, whitesmoke)'
        bgClip='border-box' mb={{base: -6, md: -6 }} mt={{base: 0, md: 0}}>
            <Box  p={1}>
                <Text opacity={'0.5'} textAlign={'center'} fontFamily={'Poppins'}  fontSize={'sm'} fontWeight={'normal'} color={'black'}  >
                © 2023 Hannah London Beauty
                </Text>
            </Box>
        </Box>

    )
}

export default Footer;