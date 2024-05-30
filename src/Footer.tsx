import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box mb={{base: -5, md: -10 }} mt={{base: 0, md: -5}} 
        bgClip='border-box'>
            <Box borderTop={'3px pink solid'} p={5}>
                <Text opacity={'0.7'} textAlign={'center'} fontFamily={'Poppins'} fontWeight={'bold'} color={'whitesmoke'}  bgGradient='linear(to-l, pink.300, whitesmoke)'
  bgClip='text'>
                © 2023 Hannah London Beauty
                </Text>
            </Box>
        </Box>

    )
}

export default Footer;