
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().min(3, "Minimum 3 characters"),
  desc: z.string().min(5, "Minimum 5 characters"),
});

type Todo = {
  title: string;
  desc: string;
};

function Home() {
  const [form, setForm] = useState<Todo>({
    title: "",
    desc: "",
  });

  const [errors, setErrors] = useState<{
    title?: string;
    desc?: string;
  }>({});

  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = validationSchema.safeParse(form);

    if (!result.success) {
      const error = result.error.flatten().fieldErrors;

      setErrors({
        title: error.title?.[0],
        desc: error.desc?.[0],
      });

      return;
    }

    setTodos([...todos, form]);

    setForm({
      title: "",
      desc: "",
    });

    setErrors({});
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5">
      <form onSubmit={addTodo} className="flex flex-col gap-3">
        <Link to="/">Back to Todo List</Link>

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="border p-2 rounded"
        />

        <p className="text-red-500">{errors.title}</p>

        <input
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          placeholder="Description"
          className="border p-2 rounded"
        />

        <p className="text-red-500">{errors.desc}</p>

        <button className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>
      </form>

      <div className="mt-5">
        {todos.map((e, index) => (
          <div key={index} className="border p-3 mb-3 rounded">
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
