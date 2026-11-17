import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface IUser {
  id: string;
  name: string;
  city: string;
  phone: string;
}

const api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

const emptyData: IUser[] = [];

function App() {
  const [data, setData] = useState(emptyData);

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [editId, setEditId] = useState("");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  async function getData() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addUser() {
    try {
      await axios.post(api, {
        name: name,
        city: city,
        phone: phone,
      });

      await getData();

      setOpen(false);
      setName("");
      setCity("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id: string) {
    try {
      await axios.delete(api + "/" + id);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser() {
    try {
      await axios.put(api + "/" + editId, {
        name: name,
        city: city,
        phone: phone,
      });

      await getData();

      setEditOpen(false);
      setName("");
      setCity("");
      setPhone("");
      setEditId("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 p-5 sm:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button variant="secondary" className="text-amber-50 w-fit sm:col-span-2 lg:col-span-3 bg-cyan-950">
                Add User
              </Button>
            }
          />

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>

            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <DialogFooter>
              <Button onClick={addUser}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {data.map((user) => (
          <Card key={user.id} className="rounded-xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">
                {user.name}
              </CardTitle>

              <CardDescription>
                User ID: {user.id}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 text-sm text-slate-600">
              <p>City: {user.city}</p>
              <p>Phone: {user.phone}</p>
            </CardContent>

            <CardFooter className="flex justify-end gap-2 border-t pt-4">
              <Button variant="outline" onClick={() => { setEditId(user.id); setName(user.name); setCity(user.city); setPhone(user.phone); setEditOpen(true); }}> Edit</Button>
              <Button variant="destructive" onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}

      </div>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <DialogFooter>
            <Button onClick={editUser}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default App;
