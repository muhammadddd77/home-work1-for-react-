import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { useTodo } from "./components/TodoContext";

function App() {

  const { state, dispatch } = useTodo();
  const [open, setOpen] = useState(false);

  const [editUser, setEditUser] = useState<(typeof state.data)[number] | null>(null);

  return (
    <div className="min-h-screen bg-[#0f172a] px-5 py-12 text-white">
      <div className="mx-auto max-w-xl">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button variant="default">Open Dialog</Button>} />
          <DialogContent className="sm:max-w-sm bg-slate-900 text-white border-slate-700">
            <form onSubmit={(e) => { e.preventDefault(); const name = ((e.target as HTMLFormElement).elements.namedItem("name") as HTMLInputElement).value;
                const obj = {
                  id: Date.now(),
                  name: name,
                  status: false,
                }
                dispatch({ key: "add", value: obj });
                (e.target as HTMLFormElement).reset();
                setOpen(false)
              }}>
              <DialogHeader>
                <DialogTitle>Add User</DialogTitle>
              </DialogHeader>
              <div className="grid gap-3 py-5">
                <label htmlFor="name" className="text-sm text-slate-300">
                  Name
                </label>
                <input id="name" name="name" placeholder="Enter name..." required className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500" />
              </div>
              <DialogFooter>
                <DialogClose render={<Button type="button" variant="destructive">Cancel</Button>} />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {state.data.map((e) => {
          return (
            <div key={e.id} className="mb-3 mt-4 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h1 className="text-lg font-semibold">{e.name}</h1>
              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium transition hover:bg-red-500" onClick={() => dispatch({ key: "delete", value: e.id })}>Delete</button>
              <button onClick={() => setEditUser(e)}>Edit</button>
              <h3 className="text-sm text-slate-400">
                {e.status ? "Active" : "Inactive"}
              </h3>
              <input className="h-5 w-5 cursor-pointer accent-blue-500" checked={e.status} type="checkbox" onChange={() => dispatch({ key: "edit", value: { ...e, status: !e.status },})} />
            </div>
          )
        })}

      <Dialog open={!!editUser} onOpenChange={(value) => { if (!value) setEditUser(null) }}>
       <DialogContent className="sm:max-w-sm bg-slate-900 text-white border-slate-700">
        <form onSubmit={(e) => { e.preventDefault(); const name = ((e.target as HTMLFormElement).elements.namedItem("name") as HTMLInputElement).value;
            if (editUser) {
              let update = {
                ...editUser,
                name: name,
              };
              dispatch({ key: "edit", value: update });
            }
            (e.target as HTMLFormElement).reset();
            setEditUser(null)
          }}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 py-5">
            <label htmlFor="name" className="text-sm text-slate-300">
              Name
            </label>
            <input id="name" name="name" defaultValue={editUser?.name || ""} placeholder="Enter name..." required className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500" />
          </div>
          <DialogFooter>
            <DialogClose render={<Button type="button" variant="destructive">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
     </Dialog>
    </div>
  </div>
  )
}

export default App;