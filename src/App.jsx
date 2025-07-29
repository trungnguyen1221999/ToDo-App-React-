import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTooList] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() !== "") setTooList([...todoList, input]);
    setInput("");
    focusRef.current.focus();
  };

  const handleRemove = (removeItem) => {
    const newList = todoList.filter((item) => item !== removeItem);
    setTooList(newList);
  };

  const focusRef = useRef();

  return (
    <div className="todo">
      <h1>TODO</h1>
      <form action="" onSubmit={handleAdd}>
        <input
          ref={focusRef}
          type="text"
          placeholder="Enter ToDo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add">ADD</button>
      </form>
      <ul>
        {todoList.map((item) => (
          <li>
            {item}
            <button className="remove" onClick={() => handleRemove(item)}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
