export default function AddModal({ handleAdd, handleClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Add User</h2>

        <form onSubmit={(event) => {
            event.preventDefault();
            handleAdd(event.target.name.value, event.target.age.value)}} className="flex flex-col gap-4">
          <input type="text" placeholder="Enter name" defaultValue="" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2.5" />
          <input type="text" placeholder="Enter age" defaultValue="" name="age" className="w-full border border-gray-300 rounded-md px-4 py-2.5" />
          <input type="text" placeholder="Enter city" defaultValue="" name="city" className="w-full border border-gray-300 rounded-md px-4 py-2.5" />
          <button type="submit" className="bg-blue-600 text-white py-2.5 rounded-md">Submit</button>
          <button type="button" onClick={handleClose} className="border border-gray-300 text-gray-700 py-2.5 rounded-md">Cancel</button>
        </form>
      </div>
    </div>
  )
}