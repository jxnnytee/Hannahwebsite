import { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
  Heading
} from '@chakra-ui/react';
import './Card.css'
import './Sidebar.css'
import { RiMenu2Line } from'react-icons/ri';



export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base:'flex', md: 'none'}} fontFamily={'Poppins'} bgColor={'black'} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'none' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bgColor={'#C5A289'}
    
      
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      fontFamily={'Poppins'}
      
      
      {...rest}>
      <Flex  h="20" 
      
      alignItems="center" mx="8" justifyContent="space-between">
      <CloseButton ml={0}  _hover={{
          
          border: 'none'
        }} color={'#4C3C3A'}
        opacity={'0.4'}  display={{ base: 'flex', md: 'none' }}  onClick={onClose} />
      
      
       
      </Flex>
      <VStack   p={0}   fontSize={'3xl'} fontWeight={'bold'} textShadow={'0px 0px 0px white'} color={'#4C3C3A'}>
        <Heading border={'1px solid #4C3C3A'} p={10} mb={10} opacity={'0.6'} fontSize={'lg'}>HANNAH LONDON BEAUTY</Heading>
        
        <Link opacity={'0.9'} _hover={{ color: '#4C3C3A'}} color={'#4C3C3A'} fontWeight={'bold'} pb={5} href="/">
          
          HOME 
        
        </Link>
       
        <Link pt={2} opacity={'0.9'} fontWeight={'bold'} color={'#4C3C3A'} _hover={{ color: '#4C3C3A'}}  pb={5} href="/booking">
          
          BOOK
        
        </Link>
        <Link pt={2} opacity={'0.9'} fontWeight={'bold'} color={'#4C3C3A'} _hover={{ color: '#4C3C3A'}} href="/contact">
          
          CONTACT
        
        </Link>
      </VStack>
      
      
    </Box>
  );
};


interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      pos={'fixed'}
      w={'100%'}
      pt={5}
     
      alignItems="center"
      bg={'none'}
      
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        size="lg"
        fontSize={30}
        
        bg={'transparent'}
        onClick={onOpen}
        _hover={{
          bg: 'transparent',
          color: 'white',
          border: 'none'
        }}
        color={'#A9876C'}
        opacity={'0.7'}
        aria-label="open menu"
        icon={<RiMenu2Line />}
      />   
    </Flex>
  );
};