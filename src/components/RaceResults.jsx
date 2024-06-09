import React, { useEffect, useState } from 'react';
import "./RaceResult.css"

const Results = () => {
  const [results, setResults] = useState([]);
  const [formData, setFormData] = useState({
    grand_prix: '',
    race_date: '',
    winner: '',
    car: '',
    laps: '',
    race_time: ''
  });

  useEffect(() => {
    fetch('http://localhost/Backend/race_results.php')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/Backend/insert_result.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setResults([...results, formData]);
        setFormData({
          grand_prix: '',
          race_date: '',
          winner: '',
          car: '',
          laps: '',
          race_time: ''
        });
      }
    })
    .catch(error => console.error('Error inserting data:', error));
  };

  return (
      <div className="bg-white p-2">
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <input
            type="text"
            name="grand_prix"
            value={formData.grand_prix}
            onChange={handleChange}
            placeholder="Grand Prix"
            className="border-2 p-2 rounded-md  focus:outline-none focus:border-custom-red"
            required
          />
          <input
            type="date"
            name="race_date"
            value={formData.race_date}
            onChange={handleChange}
            className="border-2 p-2 rounded-md  focus:outline-none focus:border-custom-red"
            required
          />
          <input
            type="text"
            name="winner"
            value={formData.winner}
            onChange={handleChange}
            placeholder="Winner"
            className="border-2 p-2 rounded-md  focus:outline-none focus:border-custom-red"
            required
          />
          <input
            type="text"
            name="car"
            value={formData.car}
            onChange={handleChange}
            placeholder="Car"
            className="border-2 p-2 rounded-md  focus:outline-none focus:border-custom-red"
            required
          />
          <input
            type="number"
            name="laps"
            value={formData.laps}
            onChange={handleChange}
            placeholder="Laps"
            className="border-2 p-2 rounded-md focus:outline-none focus:border-custom-red"
            required
          />
          <input
            type="text"
            name="race_time"
            value={formData.race_time}
            onChange={handleChange}
            placeholder="Race Time"
            className="border-2 p-2 rounded-md focus:outline-none focus:border-custom-red"
            required
          />
          <button type="submit" className="bg-custom-red text-white p-2 rounded-md duration-300 col-span-full">Add Result</button>
        </form>

        <div className="overflow-x-auto shadow-md rounded-lg mt-10 horizontalSlider2" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-custom-red text-sm uppercase" style={{ fontFamily: "formula1",}}>
              <tr>
                <th className="py-3 px-6">Grand Prix</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Winner</th>
                <th className="py-3 px-6">Car</th>
                <th className="py-3 px-6">Laps</th>
                <th className="py-3 px-6">Time</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">{result.grand_prix}</td>
                  <td className="py-4 px-6 text-gray-600">{result.race_date}</td>
                  <td className="py-4 px-6 text-gray-600">{result.winner}</td>
                  <td className="py-4 px-6 text-gray-600">{result.car}</td>
                  <td className="py-4 px-6 text-gray-600">{result.laps}</td>
                  <td className="py-4 px-6 text-gray-600">{result.race_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Results;
