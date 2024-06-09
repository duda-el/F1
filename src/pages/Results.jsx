import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost/Backend/race_results.php')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ width: '100%', height: '90Zvh', background: '#ffff' }}>
      <Header />
      <div className="bg-white p-4">
        <h1 className="text-4xl bg-custom-red p-6 font-bold text-center text-white mb-10" style={{ fontFamily: "formula1-bold",}}>2024 Race Results</h1>
        <div className="overflow-x-auto shadow-md rounded-lg mt-10">
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
    </div>
  );
};

export default Results;
