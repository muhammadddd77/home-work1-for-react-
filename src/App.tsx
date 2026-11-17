import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";

interface IUser {
  id: string;
  name: string;
  city: string;
  phone: string;
}

const api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

const emptyData: IUser[] = [];

const App = () => {
  const [data, setData] = useState(emptyData);

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState("");

  const [editOpen, setEditOpen] = useState(false);

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

  async function delUsers(id: string) {
    try {
      await axios.delete(api + "/" + id);
      getData();
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

      getData();

      setOpen(false);
      setName("");
      setCity("");
      setPhone("");
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

      getData();
      setEditOpen(false);

      setName("");
      setCity("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Users List</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button />}>
          Add User
        </DialogTrigger>

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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.phone}</TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontal />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    }
                  />

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => {
                      setEditId(user.id);
                      setName(user.name);
                      setCity(user.city);
                      setPhone(user.phone);
                      setEditOpen(true);
                    }}>
                      Edit
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem variant="destructive" onClick={() => delUsers(user.id)}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default App;
