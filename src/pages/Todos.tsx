
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const api = "https://to-dos-api.softclub.tj/api/to-dos";

interface ITodo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: {
    id: number;
    imageName: string;
  }[];
}

function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [open, setOpen] = useState(false);

  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setTodos(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAdd() {
    try {
      const formData = new FormData();

      images.forEach((e) => {
        formData.append("Images", e);
      });

      formData.append("Name", name);
      formData.append("Description", description);

      await axios.post(api, formData);

      await getUsers();

      setName("");
      setDescription("");
      setImages([]);
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Error:", error.response?.data);
      } else {
        console.log(error);
      }
    }
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(api, {
        params: {
          id: id,
        },
      });

      await getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">ToDo List</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button>+ Add New</Button>} />

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Todo</DialogTitle>

              <DialogDescription>
                Enter your todo information.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <Input
                  placeholder="Enter name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <Input
                  placeholder="Enter description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Images
                </label>

                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    setImages(Array.from(e.target.files || []));
                  }}
                />
              </div>
            </div>

            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />

              <Button
                onClick={handleAdd}
                disabled={
                  !name.trim() ||
                  !description.trim() ||
                  images.length === 0
                }
              >
                Add Todo
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((e) => {
          return (
            <div key={e.id} className="rounded-lg bg-white p-5 shadow">
              <h2 className="text-lg font-semibold">{e.name}</h2>

              <p className="mt-2 text-gray-600">
                {e.description}
              </p>

              <p className="mt-2 text-sm">
                {e.isCompleted ? "Completed" : "Not Completed"}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {e.images?.map((image) => {
                  return (
                    <img
                      key={image.id}
                      src={"https://to-dos-api.softclub.tj/images/" + image.imageName}
                      alt={e.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  );
                })}
              </div>

              <div className="mt-4 flex gap-3">
                <Link
                  to={`/crud/${e.id}`}
                  className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Info
                </Link>

                <button
                  onClick={() => handleDelete(e.id)}
                  className="rounded-lg bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
