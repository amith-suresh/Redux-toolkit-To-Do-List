import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../Redux/TodoSlice';

const ToDoApp = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.data);

  const handleAdd = () => {
    if (input !== '') {
      dispatch(addItem(input));
      setInput('');
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Type here..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
