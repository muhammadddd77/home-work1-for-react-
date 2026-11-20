
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const api = "https://to-dos-api.softclub.tj/api/to-dos";

interface ITodo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: {
    id: number;
    imageName: string;
  }[];
}

function TodoById() {
  const { id } = useParams();

  const [data, setData] = useState<ITodo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const res = await axios.get(api + "/" + id);

        setData(res.data.data);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getData();
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">

        <Link
          to="/crud"
          className="text-sm text-green-600 hover:text-green-700"
        >
          ← Back to Todos
        </Link>

        {loading ? (
          <p className="mt-6 text-gray-500">Loading...</p>
        ) : data ? (
          <>
            <h1 className="mt-6 text-3xl font-semibold">
              {data.name}
            </h1>

            <p className="mt-4 text-gray-600">
              {data.description}
            </p>

            <p className="mt-4 text-sm">
              Status:
              <span
                className={
                  data.isCompleted
                    ? "ml-2 text-green-600"
                    : "ml-2 text-orange-500"
                }
              >
                {data.isCompleted ? "Completed" : "Not Completed"}
              </span>
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {data.images?.map((e) => {
                return (
                  <img
                    key={e.id}
                    src={"https://to-dos-api.softclub.tj/images/" + e.imageName}
                    alt={data.name}
                    className="h-40 w-full rounded-lg object-cover"
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p className="mt-6 text-red-500">
            Todo not found
          </p>
        )}

      </div>
    </div>
  );
}

export default TodoById;
