import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  user: {
    id: string;
    name: string;
    age: number;
    city: string;
  };
  getUsers: () => Promise<void>;
};

function EditModal({ user, getUsers }: Props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  let api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

  function openEdit() {
    setName(user.name);
    setAge(String(user.age));
    setCity(user.city);
    setOpen(true);
  }

  async function editUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axios.put(`${api}/${user.id}`, {
        name: name,
        age: Number(age),
        city: city,
      });

      await getUsers();

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="outline" onClick={openEdit}>Edit</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <form onSubmit={editUser} className="flex flex-col gap-3">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
            <Button type="submit">
              Save Changes</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditModal;