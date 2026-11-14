import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";

export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  status: "Active" | "Inactive";
}

interface AddModalProps {
  onAdd: (user: User) => void;
}

export default function AddModal(props: AddModalProps) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  function handleAdd(): void {
    if (name === "" || email === "" || city === "") {
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name: name,
      email: email,
      city: city,
      status: "Active",
    };
    props.onAdd(newUser);
    setName("");
    setEmail("");
    setCity("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>Add User</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>

          <Button onClick={handleAdd}>Save User</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
