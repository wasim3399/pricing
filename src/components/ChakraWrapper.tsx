'use client'

import { ChakraProvider } from "@chakra-ui/provider"
import React from "react"
type Props = {
    children : React.ReactNode;
}

const ChakraWrapper = ({children}: Props) => {
    return <ChakraProvider>{children}</ChakraProvider>
}

export default ChakraWrapper;