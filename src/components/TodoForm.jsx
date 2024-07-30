

import React, { useContext, useRef } from 'react';
import { Context } from '../Context/Context';

function TodoForm() {
  const { todos, setTodos } = useContext(Context)
  const inputRef = useRef();

  function handleSubmitForm(e) {
    e.preventDefault();
    const todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: inputRef.current.value,
      isCompleted: false
    };
    setTodos([...todos, todo]);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmitForm} autoComplete='off' className='w-[600px] flex items-center justify-center gap-3 mx-auto m-10'>
              <input ref={inputRef} className='input' required name='todoValue' />
               <button className='count-btn'>Add</button>
        </form>
  );
}

export default TodoForm;
