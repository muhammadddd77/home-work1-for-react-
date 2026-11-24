import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";

type Todo = {
  id: number;
  name: string;
  description: string;
};

const api = "https://to-dos-api.softclub.tj/api/to-dos";

function Formik() {
  const [data, setData] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

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

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      image: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      desc: Yup.string().required("Description is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        if (editId === null) {
          if (values.image.trim() === "") {
            alert("Image is required");
            return;
          }

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

        resetForm();
        setEditId(null);

      } catch (error) {
        console.error(error);
      }
    },
  });

  function handleEdit(e: Todo) {
    setEditId(e.id);

    formik.setValues({
      title: e.name,
      desc: e.description,
      image: "",
    });
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(`${api}?id=${id}`);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
          Todo Form
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Create your new todo
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div>
            <label>Title</label>
            <input type="text" name="title" placeholder="Enter todo..." value={formik.values.title} onChange={formik.handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500"/>
          </div>

          <div>
            <label>Description</label>
            <input type="text" name="desc" placeholder="Enter description" value={formik.values.desc} onChange={formik.handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500" />
          </div>

          <div>
            <label>Image URL</label>
            <input type="text" name="image" placeholder="Enter image URL" value={formik.values.image} onChange={formik.handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-violet-500" />
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

            <button
              onClick={() => handleDelete(e.id)}
              className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            >
              Delete
            </button>

            <button
              onClick={() => handleEdit(e)}
              className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formik;