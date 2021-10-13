import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { Heading, Center } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";

function App() {
  return (
    <div className='todo-app'>
       <Center
      w="100%"
      minH="100vh"
      bg="grey"
      p={3}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <VStack divider= {<StackDivider/>}>
      <Heading bgGradient="linear(to-r,gray.300,yellow.400,pink.200)"
       bgClip="text"
       fontSize="6xl"
       fontWeight="extrabold">
      Todo Application
      </Heading>
      <TodoList />
      </VStack>
      </Center>
    </div>
  );
}

export default App;