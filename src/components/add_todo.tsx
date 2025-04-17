import { useEffect, useState } from "react";

interface TodoAdd {
  text: string;
  setTodos: (args: any) => any;
}

interface Todo {
  uuid: string;
  msg: string;
}

export default function TodoAdd_Button({ text, setTodos }: TodoAdd) {
  const [exec, setExec] = useState<boolean>(false);

  useEffect(() => {
    // Pass your backend api
    fetch("http://localhost:8080/api/todos", {}).then(async (response) => {
      const res = (await response.json()) as { msgs: Todo[] };
      setTodos(res.msgs);
    });
    if (exec === false) return;
    if (!text) {
      window.alert("Digite algo!");
      setExec(false);
      return;
    }
    // Pass your backend api
    fetch(`http://localhost:8080/api/todos/${text}`, { method: "POST" }).catch(
      (err) => {
        document.body.innerHTML = `<style> h1 {font-size: 32px; color: white;}</style><h1>Error in file add_todo (components) \n${err}</h1>`;
        console.log(err);
      }
    );
    setExec(false);
  }, [exec]);

  return (
    <>
      <button
        className="bg-green-500 rounded-4xl w-40 mt-6 h-20 text-center text-3xl text-green-900 cursor-pointer hover:brightness-150 transition duration-500"
        onClick={() => setExec(true)}
      >
        Adicionar
      </button>
    </>
  );
}
