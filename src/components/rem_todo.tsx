import { useEffect, useState } from "react";

interface DelTodo {
  uuid: string;
  setTodos: (args: any) => any;
  msg: string;
}

interface Todo {
  uuid: string;
  msg: string;
}

export default function DelTodo({ uuid, setTodos, msg }: DelTodo) {
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!run) return;
    // Pass your backend api
    fetch(`http://localhost:8080/api/todos/${uuid}`, { method: "DELETE" })
      .then(() => {
        // Pass your backend api
        fetch("http://localhost:8080/api/todos", {}).then(async (response) => {
          const res = (await response.json()) as { msgs: Todo[] };
          setTodos(res.msgs);
        });
      })
      .catch((err) => {
        document.body.innerHTML = `<style> h1 {font-size: 32px; color: white;}</style><h1>Error in file add_todo (components) \n${err}</h1>`;
        console.log(err);
      });
  });

  return (
    <button onClick={() => setRun(true)} className="cursor-pointer flex">
      <span
        className={`overflow-hidden text-ellipsis whitespace-nowrap truncate block ${
          msg.length > 43 ? "text-1xl" : "text-3xl"
        }`}
      >
        {msg}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="size-8 text-blue-950 hover:text-red-600 transition duration-300"
      >
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </button>
  );
}
