import React, { useState, useEffect, useRef } from 'react';
import { Input, Button, VStack, HStack, ColorModeProvider} from "@chakra-ui/react";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return <VStack> (
    
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <HStack>
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
           <Button
          bgGradient="linear(to-l, gray.300,yellow.400,pink.200)"
          size="md"
          type="submit"
          mt={3}
          w="80%"
          color="white"
          fontWeight="700"
          _hover={{
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            color: "white",
            textDecoration: "underline",
          }}
           onClick={handleSubmit} className='todo-button edit'>
            Update
          </Button>

        </>
        </HStack>
      ) : (<HStack>
        <>
        
          <Input
            placeholder='Enter Task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
        
      
          <Button
          bgGradient="linear(to-l, gray.300,yellow.400,pink.200)"
          size="md"
          type="submit"
          mt={3}
          w="80%"
          color="white"
          fontWeight="700"
          _hover={{
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            color: "white",
            textDecoration: "underline",
          }}
           onClick={handleSubmit} className='todo-button'>
            Add todo
          </Button>
        
        </>
        </HStack>)}
    </form>
  )</VStack>;
}

export default TodoForm;