import React from 'react';
import { Box, Text, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex alignItems="center">
      
      
        <motion.div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: colorMode === 'light' ? 'white' : 'gray.200',
            position: 'absolute',
            top: '2px',
          }}
          animate={{
            left: colorMode === 'light' ? '2px' : '28px',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      
    </Flex>
  );
};

export default ThemeToggle;