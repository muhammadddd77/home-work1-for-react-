import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,} from "./components/ui/dialog";
import type { Todo } from "./components/TodoTable";

export const api = "https://to-dos-api.softclub.tj/api/to-dos";

const TodoTable = lazy(() => import("./components/TodoTable"));

const validationSchema = z.object({
  name: z.string().min(2, "Minimum 2 letters").max(20, "Maximum 20 letters"),
  description: z.string().min(5, "Minimum 5 letters").max(100, "Maximum 100 letters"),
});

type FormValues = z.infer<typeof validationSchema>;

function App() {
  const navigate = useNavigate();

  const [data, setData] = useState<Todo[]>([]);
  const [open, setOpen] = useState(false);
  const [elem, setElem] = useState<Todo | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function getUsers() {
    try {
      const res = await axios.get(api);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(api, {
        params: { id },
      });

      await getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(values: FormValues) {
    try {
      setServerError("");

      if (elem) {
        await axios.put(api, values, {
          params: { id: elem.id },
        });
      } else {
        await axios.post(api, values);
      }

      await getUsers();

      reset();
      setElem(null);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  function openAdd() {
    setElem(null);
    reset();
    setServerError("");
    setOpen(true);
  }

  function openEdit(item: Todo) {
    setElem(item);

    reset({
      name: item.name,
      description: item.description,
    });

    setServerError("");
    setOpen(true);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Todo List
            </h1>

            <p className="text-sm text-gray-500">
              Manage your tasks
            </p>
          </div>

          <Button onClick={openAdd}>
            + Add New
          </Button>
        </header>

        <Suspense fallback={<p className="py-5 text-center">Loading...</p>}>
          <TodoTable
            data={data}
            onInfo={(id) => navigate(`/info/${id}`)}
            onEdit={openEdit}
            onDelete={handleDelete}
          />
        </Suspense>
      </div>

      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) {
            reset();
            setElem(null);
            setServerError("");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {elem ? "Edit Todo" : "Add New Todo"}
            </DialogTitle>

            <DialogDescription>
              Enter your todo information
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Name
              </label>

              <Input {...register("name")} placeholder="Name" />

              {errors.name && (
                <p className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Description
              </label>

              <Input
                {...register("description")}
                placeholder="Description"
              />

              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {serverError && (
              <p className="text-sm text-red-500">
                {serverError}
              </p>
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : elem ? "Save" : "Add"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
