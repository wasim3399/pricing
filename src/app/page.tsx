'use client'
import Features from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import { Center, Box, Heading, Text } from "@chakra-ui/layout";
import { background } from "@chakra-ui/styled-system";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Pricing></Pricing>
      <Features></Features>
    </>
    
  
  )
}
