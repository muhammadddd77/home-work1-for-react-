import { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

let api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

function App() {
  const [users, setUsers] = useState<{
    id: string;
    name: string;
    age: number;
    city: string;
  }[]>([]);

  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users Table</h1>

        <AddModal getUsers={getUsers} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.city}</TableCell>

              <TableCell>
                <EditModal
                  user={user}
                  getUsers={getUsers}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default App;