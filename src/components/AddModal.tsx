import { Modal, Form, Input, Button } from "antd";

function AddModal({ open, handleClose, handleAdd }: any) {
  const [form] = Form.useForm();

  const closeModal = () => {
    form.resetFields();
    handleClose();
  };

  return (
    <Modal title="Add New User" open={open} onCancel={closeModal} footer={null}>
      <Form form={form} layout="vertical" onFinish={(values) => {   handleAdd(values.name, values.age, values.city, values.job);   form.resetFields();}}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item label="Age" name="age" rules={[{ required: true }]}>
          <Input type="number" placeholder="Enter age" />
        </Form.Item>

        <Form.Item label="City" name="city" rules={[{ required: true }]}>
          <Input placeholder="Enter city" />
        </Form.Item>

        <Form.Item label="Job" name="job" rules={[{ required: true }]}>
          <Input placeholder="Enter job" />
        </Form.Item>

        <div className="modal-actions">
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddModal;