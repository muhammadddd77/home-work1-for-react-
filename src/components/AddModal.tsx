import { useState, type FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


type Props = {
  getUsers: () => Promise<void>;
};

function AddModal({ getUsers }: Props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  let api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

  async function addUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axios.post(api, {
        name: name,
        age: Number(age),
        city: city,
      });

      await getUsers();

      setName("");
      setAge("");
      setCity("");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Add User
      </Button>
      

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>

          <form onSubmit={addUser} className="flex flex-col gap-3">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddModal;