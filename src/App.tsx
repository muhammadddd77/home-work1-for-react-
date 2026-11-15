
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddDialog from "./components/AddModal";
import EditModal from "./components/EditModal";

const API = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

type User = {
  id: string;
  name: string;
  city: string;
  age: number;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  async function getUsers() {
    try {
      const { data } = await axios.get(API);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function deleteUser(id: string) {
    try {
      await axios.delete(API + "/" + id);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const searchedUsers = users.filter((user) =>
    user.name.toString().toLowerCase().includes(search.toLowerCase())
  );

  const filteredUsers = searchedUsers.filter((user) =>
    user.city.toString().toLowerCase().includes(selected.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="mb-5 text-2xl font-bold">Users CRUD</h1>
      <Button onClick={() => setOpen(true)}>Add User</Button>
      <AddDialog open={open} setOpen={setOpen} api={API} getUsers={getUsers} />
      <EditModal open={editOpen} setOpen={setEditOpen} api={API} getUsers={getUsers} user={selectedUser}/>

      <div className="my-5 flex gap-3">
        <Input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="rounded-md border p-2">
          <option value="">All</option>
          <option value="Dushanbe">Dushanbe</option>
          <option value="Khujand">Khujand</option>
          <option value="Bokhtar">Bokhtar</option>
          <option value="Kulob">Kulob</option>
          <option value="Indiya">Indiya</option>
        </select>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardContent className="pt-5">
              <h2>{user.name}</h2>
              <p>City: {user.city}</p>
              <p>Age: {user.age}</p>
              <Button variant="destructive" onClick={() => deleteUser(user.id)}>Delete</Button>
              <Button onClick={() => { setSelectedUser(user); setEditOpen(true)}}>Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App;
