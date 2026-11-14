import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import type { User } from "./AddModal";

interface EditModalProps {
  user: User;
  onSave: (user: User) => void;
  onCancel: () => void;
}

export default function EditModal(props: EditModalProps) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [city, setCity] = useState(props.user.city);

  function handleEdit(): void {
    if (name === "" || email === "" || city === "") {
      return;
    }

    const updatedUser: User = {
      id: props.user.id,
      name: name,
      email: email,
      city: city,
      status: props.user.status,
    }
    props.onSave(updatedUser);
  }

  return (
    <Dialog open={true} onOpenChange={(open) => { 
        if (!open) {props.onCancel()}}}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={props.onCancel}>Cancel</Button>

          <Button onClick={handleEdit}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}