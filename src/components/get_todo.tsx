import DelTodo from "./rem_todo";

interface Todo {
  uuid: string;
  msg: string;
}

interface TodoProps {
  todos: Todo[];
  setTodos: (args: any) => any;
}

export default function GetTodo({ todos, setTodos }: TodoProps) {
  return (
    <>
      <ul className="text-white list-disc mt-6">
        {todos.map((todo) => (
          <li
            key={`div-${todo.uuid}`}
            id={`div-${todo.uuid}`}
            className="w-200 h-20 bg-blue-900 pl-4 flex items-center rounded mb-2"
          >
            <DelTodo uuid={todo.uuid} setTodos={setTodos} msg={todo.msg} />
          </li>
        ))}
      </ul>
    </>
  );
}
