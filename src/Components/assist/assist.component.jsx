import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [processedData, setProcessedData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    const response = await fetch('http://localhost', requestOptions);
    const data = await response.json();
    setProcessedData(data);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} value={formData.name} />

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" onChange={handleChange} value={formData.age} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} value={formData.email} />

        <button type="submit">Submit</button>
      </form>
      {processedData !== null && (
        <div>
          <h3>Processed Data</h3>
          <p>Name: {processedData.name}</p>
          <p>Age: {processedData.age}</p>
          <p>Email: {processedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default MyForm;
