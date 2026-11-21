import axios from "axios";
import { useEffect, useState } from "react";
import CardImage, { type Todo } from "./CardImage";

const api = "https://to-dos-api.softclub.tj/api/to-dos";

function Crud() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    try {
      const res = await axios.get(api);

      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-10 text-center text-4xl font-bold">
        Todo List
      </h1>

      <CardImage todos={todos} />
    </div>
  );
}

export default Crud;