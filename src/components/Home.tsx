import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

// Validation
const validationSchema = z.object({
  title: z.string().min(3, "Minimum 3 characters"),
  desc: z.string().min(5, "Minimum 5 characters"),
  image: z.string().min(1, "Image is required"),
});

type Todo = {
  title: string;
  desc: string;
  image: string;
};

function Home() {
  const [form, setForm] = useState<Todo>({
    title: "",
    desc: "",
    image: "",
  });

  const [errors, setErrors] = useState<any>({});

  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(e: React.FormEvent) {
    e.preventDefault();

    let result = validationSchema.safeParse(form);

    if (!result.success) {
      let error = result.error.flatten().fieldErrors;

      setErrors({
        title: error.title?.[0],
        desc: error.desc?.[0],
        image: error.image?.[0],
      });

      return;
    }

    setTodos([...todos, form]);

    setForm({
      title: "",
      desc: "",
      image: "",
    });

    setErrors({});
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5">

      <form onSubmit={addTodo} className="flex flex-col gap-3">

        <Link to="/home">Home</Link>

        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="border p-2 rounded" />
        <p className="text-red-500">{errors.title}</p>

        <input value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="Description" className="border p-2 rounded" />
        <p className="text-red-500">{errors.desc}</p>

        <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" className="border p-2 rounded" />
        <p className="text-red-500">{errors.image}</p>

        <button className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>

      </form>

      <div className="mt-5">
        {todos.map((e, index) => (
          <div key={index} className="border p-3 mb-3 rounded">
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            <img src={e.image} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;