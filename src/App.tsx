import { useState } from "react";
import AddModal, { type User } from "./components/AddModal";
import EditModal from "./components/EditModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Muhammad", email: "muhammad@gmail.com", city: "Dushanbe", status: "Active" },
    { id: 2, name: "Ali", email: "ali@gmail.com", city: "Khujand", status: "Active" },
    { id: 3, name: "Vali", email: "vali@gmail.com", city: "Dushanbe", status: "Inactive" },
  ]);

  const [editUser, setEditUser] = useState<User | null>(null);

  function handleAdd(newUser: User): void {
    setUsers([...users, newUser])
  }

  function handleEdit(updatedUser: User): void {
    const newUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser
      }
      return user
    })
    setUsers(newUsers);
    setEditUser(null);
  }

  function handleDelete(id: number): void {
    setUsers(users.filter((user) => user.id !== id));
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase().trim())
  )

  return (
    <div className="min-h-screen bg-muted/40 p-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your users in one place.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <Input placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm bg-background" />
          <AddModal onAdd={handleAdd} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <Badge>{user.status}</Badge>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Email: {user.email}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  City: {user.city}
                </p>

                <div className="mt-4 flex gap-2">
                  <Button onClick={() => setEditUser(user)}>
                    Edit
                  </Button>

                  <Button variant="outline" onClick={() => handleDelete(user.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {editUser && (<EditModal user={editUser} onSave={handleEdit} onCancel={() => setEditUser(null)} />)}

      </div>
    </div>
  )
}
