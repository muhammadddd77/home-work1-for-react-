import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

const validationSchema = z.object({
  projectName: z.string().min(3, "Номи proect камаш 3 ҳарф бошад"),
  assignee: z.string().min(2, "Иҷрокунандаро ворид кунед"),
  priority: z.string().min(1, "Афзалиятро ворид кунед"),
  startDate: z.string().min(1, "Санаи оғозро интихоб кунед"),
  status: z.string().min(1, "Статусро ворид кунед"),
});

type Todo = z.infer<typeof validationSchema>;
type Task = Todo & { id: string };

const defaultValues: Todo = {
  projectName: "",
  assignee: "",
  priority: "",
  startDate: "",
  status: "",
};

function App() {
  const [data, setdata] = useState<Task[]>([]);
  const [search, setsearch] = useState("");
  const [open, setopen] = useState(false);
  const [elem, setelem] = useState<Task | null>(null);
  const [dark, setdark] = useState(false);

  const { register, handleSubmit, reset, formState: { errors },
} = useForm<Todo>({
  resolver: zodResolver(validationSchema),
  defaultValues,
});

// GET
async function getTasks() {
  try {
    const res = await axios.get(api);
    setdata(res.data);
  } catch (error) {
    console.log(error);
  }
}

// POST
async function addTask(values: Todo) {
  try {
    await axios.post(api, values);
    await getTasks()
    reset(defaultValues);
    setopen(false);
  } catch (error) {
    console.log(error);
  }
}

// PUT
async function editTask(id: string, values: Todo) {
  try {
    await axios.put(`${api}/${id}`, values);
    await getTasks();
    reset(defaultValues);
    setelem(null);
    setopen(false);
  } catch (error) {
    console.log(error);
  }
}

// DELETE
async function handleDelete(id: string) {
  try {
    await axios.delete(`${api}/${id}`);
    await getTasks();
  } catch (error) {
    console.log(error);
  }
}

// SUBMIT
async function onSubmit(values: Todo) {
  if (elem) {
    await editTask(elem.id, values);
  } else {
    await addTask(values);
  }
}

// ADD
function openAdd() {
  setelem(null);
  reset(defaultValues);
  setopen(true);
}

// EDIT
function openEdit(item: Task) {
  setelem(item);
  reset({
    projectName: item.projectName,
    assignee: item.assignee,
    priority: item.priority,
    startDate: item.startDate,
    status: item.status,
  });
  setopen(true);
}


  const filteredData = data.filter((e) =>
    e.projectName.toLowerCase().includes(search.toLowerCase()) ||
    e.assignee.toLowerCase().includes(search.toLowerCase())
  );

  function changeTheme() {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      <header className="flex flex-wrap items-center justify-between gap-4 border-b px-6 py-5">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <span>Dashboard</span>
          <span className="border-b-2 border-primary pb-1 font-semibold">My Task</span>
          <span>Report</span>
          <span>Employee Payroll</span>
        </nav>
        <Button variant="outline" onClick={changeTheme}>
          {dark ? "Light Mode" : "Dark Mode"}
        </Button>
      </header>

      <main className="mx-auto max-w-362 p-5 md:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">My Tasks</h2>
            <p className="mt-1 text-sm text-muted-foreground">Monitor all of your tasks here</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={openAdd}>+ New Project</Button>
          </div>
        </div>

        <div className="mb-5">
          <Input placeholder="Search projects or assignee..." value={search} onChange={(e) => setsearch(e.target.value)} className="max-w-sm" />
        </div>

        <div className="overflow-hidden rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Project Name</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="font-medium">{e.projectName}</TableCell>
                    <TableCell>{e.assignee}</TableCell>
                    <TableCell><Badge variant="outline">{e.priority}</Badge></TableCell>
                    <TableCell>{e.startDate}</TableCell>
                    <TableCell>
                      <Badge variant={e.status === "Completed" ? "default" : "secondary"}>
                        {e.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={() => openEdit(e)}>Edit</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(e.id)}>Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">No projects found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <Dialog open={open} onOpenChange={(value) => {
          setopen(value);
          if (!value) {
            setelem(null);
            reset(defaultValues);
          }
        }}>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{elem ? "Edit Project" : "New Project"}</DialogTitle>
              <DialogDescription>Enter your project information</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input {...register("projectName")} placeholder="Enter project name" />
                {errors.projectName && <p className="text-sm text-red-500">{errors.projectName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Assignee</label>
                <Input {...register("assignee")} placeholder="Enter assignee" />
                {errors.assignee && <p className="text-sm text-red-500">{errors.assignee.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Input {...register("priority")} placeholder="Urgent / High / Medium / Low" />
                {errors.priority && <p className="text-sm text-red-500">{errors.priority.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <Input {...register("startDate")} type="date" />
                {errors.startDate && <p className="text-sm text-red-500">{errors.startDate.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Input {...register("status")} placeholder="Pending / In Progress / Review / Completed" />
                {errors.status && <p className="text-sm text-red-500">{errors.status.message}</p>}
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => {
                  setopen(false);
                  setelem(null);
                  reset(defaultValues);
                }}>
                  Cancel
                </Button>
                <Button type="submit">{elem ? "Save Changes" : "Add Project"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

export default App;