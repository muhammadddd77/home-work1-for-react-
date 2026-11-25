import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import type { Todo } from "../components/TodoTable";

export const api = "https://to-dos-api.softclub.tj/api/to-dos";

function Info() {
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTodo() {
      try {
        setLoading(true);

        const res = await axios.get(`${api}/${id}`);

        setTodo(res.data.data ?? res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getTodo();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!todo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1>Todo not found</h1>

        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Todo Information
          </h1>

          <Link to="/">
            <Button variant="outline">
              Back
            </Button>
          </Link>
        </div>

        <div className="space-y-5 rounded-xl border bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">
              ID
            </p>

            <h2 className="text-lg font-semibold">
              {todo.id}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <h2 className="text-xl font-bold">
              {todo.name}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Description
            </p>

            <p className="text-gray-800">
              {todo.description}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {todo.isCompleted ? "Completed" : "Not Completed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
