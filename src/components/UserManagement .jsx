import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', email: '', role: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost/Backend/users.php');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put('http://localhost/Backend/users.php', form);
      } else {
        await axios.post('http://localhost/Backend/users.php', form);
      }
      fetchUsers();
      setForm({ id: '', name: '', email: '', role: '' });
    } catch (error) {
      console.error(`Error ${form.id ? 'editing' : 'adding'} user:`, error);
    }
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost/Backend/users.php', { data: { id } });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto p-4" style={{ fontFamily: 'Titillium Web, sans-serif', color: '#E10600' }}>
      <div className="flex gap-2 flex-wrap mb-6">
        <form onSubmit={handleFormSubmit} className="flex flex-col w-full  bg-gray-100 p-6 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
          <input
            type="hidden"
            name="id"
            value={form.id}
            onChange={handleInputChange}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Role</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleInputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            />
          </div>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md">
            {form.id ? 'Edit' : 'Add'} User
          </button>
        </form>
        <div className="flex-1 overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 text-black">
                  <td className="border border-gray-300 p-2">{user.id}</td>
                  <td className="border border-gray-300 p-2">{user.name}</td>
                  <td className="border border-gray-300 p-2">{user.email}</td>
                  <td className="border border-gray-300 p-2">{user.role}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
