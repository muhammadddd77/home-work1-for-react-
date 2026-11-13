import { Modal, Form, Input, Button } from "antd";

function EditModal({ elem, handleClose, handleEdit }: any) {
  return (
    <Modal title="Edit User" open={true} onCancel={handleClose} footer={null}>
      <Form
        layout="vertical"
        initialValues={elem}
        onFinish={(values) => { handleEdit( elem.id, values.name, values.age, values.city, values.job)}}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>

        <Form.Item label="Job" name="job">
          <Input />
        </Form.Item>

        <div className="modal-actions">
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default EditModal;