export default function EditModal({ elem, handleEdit, handleClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Edit User
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleEdit(elem.id, event.target.name.value, event.target.age.value);
          }}
        >
          <input
            defaultValue={elem.name}
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:border-blue-500"
          />

          <input
            defaultValue={elem.age}
            type="text"
            name="age"
            placeholder="Enter age"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="border border-gray-300 text-gray-700 py-2.5 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}