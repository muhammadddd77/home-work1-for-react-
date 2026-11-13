import { useState } from "react";
import { Card, Row, Col, Typography, Tag, Button } from "antd";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import "./index.css";

const { Title, Text } = Typography;

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Ali", age: 20, city: "Dushanbe", job: "Designer" },
    { id: 2, name: "Vali", age: 40, city: "Dushanbe", job: "Backend" },
    { id: 3, name: "Gani", age: 30, city: "Dushanbe", job: "Frontend" },
  ]);

  const [openAdd, setOpenAdd] = useState(false);

  const [elem, setElem] = useState({
    id: null as number | null,
    name: "",
    age: 0,
    city: "",
    job: "",
  });

  const handleAdd = (name: string, age: string, city: string, job: string) => {
    const newObj = {
      id: Date.now(),
      name: name,
      age: Number(age),
      city: city,
      job: job,
    };

    setData((prev) => [...prev, newObj]);
    setOpenAdd(false);
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const handleCloseEdit = () => {
    setElem({ id: null, name: "", age: 0, city: "", job: "" });
  };

  const handleEdit = (
    id: number,
    name: string,
    age: string,
    city: string,
    job: string
  ) => {
    setData((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, name, age: Number(age), city, job } : e
      )
    )
    handleCloseEdit();
  }

  return (
    <div className="container">
      <div className="header">
        <Button type="primary" onClick={() => setOpenAdd(true)}>
          Add User
        </Button>

        <div>
          <Title level={2}>User Management</Title>
          <Text type="secondary">Manage your users</Text>
        </div>
      </div>

      <Row gutter={[20, 20]}>
        {data.map((e) => (
          <Col span={8} key={e.id}>
            <Card className="user-card" hoverable>
              <Title level={4}>{e.name}</Title>

              <div className="user-info">
                <Text type="secondary">Age:</Text>
                <Text strong>{e.age}</Text>
              </div>

              <div className="user-info">
                <Text type="secondary">City:</Text>
                <Text strong>{e.city}</Text>
              </div>

              <div className="job">
                <Tag color="blue">{e.job}</Tag>
              </div>

              <Button
                danger
                onClick={() => handleDelete(e.id)}
                className="delete"
              >
                Delete
              </Button>

              <Button onClick={() => setElem(e)} className="edit">
                Edit
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <AddModal
        open={openAdd}
        handleAdd={handleAdd}
        handleClose={() => setOpenAdd(false)}
      />

      {elem.id !== null && (
        <EditModal
          elem={elem}
          handleClose={handleCloseEdit}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}
