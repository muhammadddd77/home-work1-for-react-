import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Description is required"),
  image: z.string(),
});

type TodoForm = z.infer<typeof validationSchema>;

type Todo = {
  id: number;
  name: string;
  description: string;
};

const api = "https://to-dos-api.softclub.tj/api/to-dos";

function RHF() {
  const [data, setData] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      title: "",
      desc: "",
      image: "",
    },
  });

  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function onSubmit(values: TodoForm) {
    try {
      if (editId === null) {

        const formData = new FormData();

        formData.append("Name", values.title);
        formData.append("Description", values.desc);
        formData.append("Images", values.image);

        await axios.post(api, formData);
      } else {
        await axios.put(api, {
          name: values.title,
          description: values.desc,
          id: editId,
        });
      }

      await getUsers();
      reset();
      setEditId(null);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit(e: Todo) {
    setEditId(e.id);

    reset({
      title: e.name,
      desc: e.description,
      image: "",
    });
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(`${api}?id=${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">RHF Todo Form</h1>
        <p className="mb-6 text-center text-sm text-gray-500">Create your new todo</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label>Title</label>
            <input type="text" placeholder="Enter todo..." {...register("title")} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <label>Description</label>
            <input type="text" placeholder="Enter description" {...register("desc")} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500" />
            {errors.desc && <p className="text-red-500">{errors.desc.message}</p>}
          </div>

          <div>
            <label>Image URL</label>
            <input type="text" placeholder="Enter image URL" {...register("image")} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500" />
          </div>

          <button type="submit" className="rounded-lg bg-violet-600 py-3 font-medium text-white hover:bg-violet-700">
            {editId !== null ? "Update Todo" : "Add Todo"}
          </button>
        </form>
      </div>

      <div className="mt-6 w-full max-w-md">
        {data.map((e) => (
          <div key={e.id} className="mb-3 rounded-xl bg-white p-5 shadow-sm">
            <h2>{e.name}</h2>
            <p>{e.description}</p>

            <button onClick={() => handleDelete(e.id)} className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
              Delete
            </button>

            <button onClick={() => handleEdit(e)} className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RHF;