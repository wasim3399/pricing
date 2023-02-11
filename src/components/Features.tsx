import Icon from '@chakra-ui/icon'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'

export default function Features() {
  return (
    <Box maxW='800px' mx='auto' mt='25px'>
        <Flex>
            <HStack>
                <Icon as={Icon1}></Icon>
                <Text>30 Dyas money back guarantee</Text>
            </HStack>
            <HStack>
                <Icon as={Icon2}></Icon>
                <Text>30 Dyas money back guarantee</Text>
            </HStack>
            <HStack>
                <Icon as={Icon3}></Icon>
                <Text>30 Dyas money back guarantee</Text>
            </HStack>
        </Flex>
    </Box>
  )
}
