import { useState } from "react";
import EditModal from "./components/EditModal";
import AddModal from "./components/AddModal";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Vali", age: 40 },
    { id: 3, name: "Gani", age: 30 },
  ]);

  const [search, setSearch] = useState("")

  const [openAdd, setOpenAdd] = useState(false);

  const [elem, setElem] = useState({
    id: null as number | null,
    name: "",
    age: "" as string | number,
  });

  const handleClose = () => {
    setOpenAdd(false);
  };

  const handleCloseEdit = () => {
    setElem({ id: null, name: "", age: "" });
  };

  const handleAdd = (name: string, age: string) => {
    const newObj = {
      id: Date.now(),
      name: name,
      age: Number(age),
    };

    setData([...data, newObj]);
    setOpenAdd(false);
  };

  const handleEdit = (id: number, name: string, age: string) => {
    setData((prev) =>
      prev.map((e) => (e.id === id ? { ...e, name, age: Number(age) } : e)),
    );

    handleCloseEdit();
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setOpenAdd(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-md mb-8 hover:bg-blue-700"
        >
          Add User
        </button>

        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-6 ml-4"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((e) => {
            return (
              <div
                key={e.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
              >
                <h1 className="text-xl font-semibold text-slate-900">
                  {e.name}
                </h1>

                <p className="text-gray-500 mt-2">{e.age}</p>

                <button
                  onClick={() => handleDelete(e.id)}
                  className="w-full mt-5 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors"
                >
                  Delete
                </button>

                <button
                  onClick={() => setElem(e)}
                  className="w-full mt-3 py-2 border border-blue-300 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>

        {openAdd ? (
          <AddModal handleClose={handleClose} handleAdd={handleAdd} />
        ) : null}

        {elem.id !== null ? (
          <EditModal
            elem={elem}
            handleClose={handleCloseEdit}
            handleEdit={handleEdit}
          />
        ) : null}
      </div>
    </div>
  );
}
