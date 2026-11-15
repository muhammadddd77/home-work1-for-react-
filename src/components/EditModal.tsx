import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";

type User = {
  id: string;
  name: string;
  city: string;
  age: number;
};

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  api: string;
  getUsers: () => void;
  user: User | null;
};

function EditModal({ open, setOpen, api, getUsers, user }: Props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setCity(user.city);
      setAge(user.age.toString());
    }
  }, [user]);

  async function editUser() {
    if (name.trim() === "" || city.trim() === "" || age === "") {
      return;
    }

    if (user === null) {
      return;
    }

    try {
      const updatedUser = {
        name: name,
        city: city,
        age: Number(age),
      };

      await axios.put(api + "/" + user.id, updatedUser);
      setOpen(false);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <Input placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        <Input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        <Button onClick={editUser}>Save</Button>
        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;