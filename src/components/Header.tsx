'use client'
import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/layout'

export default function Header() {
  return (
    <Box pb='112' as='section'>
      <Box 
        as='section' 
        color='#F7FAFC' 
        bg='#6B46C1' 
        pt='90' 
        pb='250'
        px='32'
        textAlign='center'
        >
            <Heading fontWeight='800' fontSize='48'>Simple pricing for your business</Heading>
            <Text fontWeight='500' fontSize='24'>Plans that are carefully created to suite your business</Text>
      </Box>
    </Box>
  )
}