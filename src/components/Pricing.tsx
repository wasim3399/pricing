'use client'
import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Box, Flex, Heading, HStack, Stack, StackProps, Text } from '@chakra-ui/layout'
import React from 'react'
import CheckIcon from './CheckIcon'
import icons from './CheckIcon'

export const ListItem = (props:StackProps) => {
    const {children, ...rest} = props;
    return (
        <HStack as='li' spacing='20' {...rest}>
            <Icon as={CheckIcon}></Icon>
            <Text>{children}</Text>
        </HStack>
    )
}

export default function Pricing() {
  return (
    <Box maxW='994' m='auto' mt='-256' borderRadius='10px' overflow='hidden' boxShadow='lg'>
        <Flex direction={{base:'column', md:'row', lg:'row'}}>
            <Box bg='#ddd7eb' p='60' alignItems='center'>
                <Text fontSize='24' fontWeight='800'>Premium PRO</Text>
                <Heading as='h3' fontSize='60'>$329</Heading>
                <Text color='#171923' fontSize='18' fontWeight='500' mt='8'>Billed just once</Text>
                <Button bg='#6B46C1' size='lg' w='282' mt='24' p='8px 30px' borderRadius='10' color='white'>Get Started</Button>
            </Box>
        
            <Box p='60' fontSize='18' bg='#faf8f8'>
                <Text>Access these features when you get this pricing package for your business</Text>
                <Stack as='ul'>
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>International calling and messaging API</ListItem>
                </Stack>
            </Box>
        </Flex>
    </Box>
  )
}
