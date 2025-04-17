import TodoAdd_Button from "#components/add_todo.tsx";
import InputList from "#components/input_list";
import GetTodo from "#components/get_todo";
import { useState } from "react";
import "#styles/main.css";

interface Todo {
  uuid: string;
  msg: string;
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      {/* Div Header */}
      <div className="w-screen h-50 bg-slate-900 flex justify-center items-center">
        <h1 className="text-9xl text-blue-950">🙭</h1>
        <h1 className="text-7xl text-blue-300">TO</h1>
        <h1 className="text-7xl text-blue-500">DO</h1>
      </div>
      {/* Div Todo (body)*/}
      <div className="gap-2 flex justify-center">
        <InputList setInput={setText} />
        <TodoAdd_Button text={text} setTodos={setTodos} />
      </div>
      <div className="gap-2 flex justify-center">
        <GetTodo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
