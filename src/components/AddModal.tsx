import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  api: string;
  getUsers: () => void;
}

function AddDialog({ open, setOpen, api, getUsers }: Props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  async function addUser() {
    if (name.trim() === "" || city.trim() === "" || age === "") {
      return;
    }

    try {
      const newUser = {
        name: name,
        city: city,
        age: Number(age),
      };
      await axios.post(api, newUser);
      setName("");
      setCity("");
      setAge("");
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
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <Input placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        <Input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        <Button onClick={addUser}>Save</Button>
        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      </DialogContent>
    </Dialog>
  );
}

export default AddDialog;
