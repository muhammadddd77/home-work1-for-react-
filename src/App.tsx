import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const products = ["iPhone", "Samsung", "Xiaomi", "MacBook"];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-5">
        Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearchParams({ search: e.target.value })
        }
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-5 space-y-3">
        {filteredProducts.map((item) => (
          <div
            key={item}
            className="p-3 bg-gray-100 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;