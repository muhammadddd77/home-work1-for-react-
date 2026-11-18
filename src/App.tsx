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
  age: string;
  image:string;
}

const api = "https://6ace4258f338359cf1c3582c.mockapi.io/todo";

const emptyData = []

const App = () => {
    const [data,setData] = useState(emptyData)

    const [open,setOpen] = useState(false)
    const [editOpen,setEditOpen] = useState(false)

    const [editId,setEditID] = useState ("")

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [age,setAge] = useState("")

    const [image,setImage] = useState("")

    const [search,setSearch] = useState("")
    const [city,setCity] = useState("")

    function handleChange(e:string) {
        setCity(e)
    }

    async function getData() {
        try {
         const {data} = await axios.get(api)
         setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    async function delUsers(id:string) {
        try {
            await axios.delete(api+"/"+id)
            getData()
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
        age: age,
        image:image
      });

      getData();

      setEditOpen(false)
      setEditID("")
      setName("")
      setCity("")
      setPhone("")
      setAge("")
      setImage("")
    } catch (error) {
      console.error(error);
    }
  }

    async function addUser() {
        try {
            await axios.post(api,{
                name:name,
                city:city,
                phone:phone,
                age:age,
                image:image
            })
            getData()
            setOpen(false)
            setName("")
            setCity("");
            setPhone("");
            setAge("");
        } catch (error) {
            console.error(error);
        }
    }

    const filteredData = data.filter((e)=>
    e.name.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
    getData()
  },[]);


  return (
    <div className="p-10">
        <h1 className="text-2xl mb-5">User List</h1>
        <div className="flex justify-between mb-5">
        <Input className="w-64" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <div>
        <select value={city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Dushanbe">Dushanbe</option>
            <option value="Khujand">Khujand</option>
            <option value="Bokhtar">Bokhtar</option>
            <option value="Kulob">Kulob</option>
        </select>

        <h2>{city}</h2>
        </div>


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
            <Input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <Input placeholder="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />

            <DialogFooter>
              <Button onClick={addUser}>Save</Button>
            </DialogFooter>
          </DialogContent>
         </Dialog>
        </div>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />

          <DialogFooter>
            <Button onClick={editUser}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Info</DialogTitle>
          </DialogHeader>

          <Input placeholder="Name" value={name} />
          <Input placeholder="City" value={city} />
          <Input placeholder="Phone" value={phone} />
          <Input placeholder="Age" type="number" value={age} />
        </DialogContent>
      </Dialog>

        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Avatar</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((user) => (
            <TableRow key={user.id}>
              <TableCell> <img src={user.image} alt=""  className="w-12.5 rounded-[50%]"/> </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.age}</TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontal /></Button>} />

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => {
                      setEditID(user.id);
                      setImage(user.image)
                      setName(user.name)
                      setCity(user.city)
                      setPhone(user.phone)
                      setAge(user.age || "")
                      setEditOpen(true)
                    }}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" onClick={() => delUsers(user.id)}>
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      setEditID(user.id);
                      setImage(user.image)
                      setName(user.name)
                      setCity(user.city)
                      setPhone(user.phone)
                      setAge(user.age || "")
                      setEditOpen(true)
                    }}>Info</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default App

