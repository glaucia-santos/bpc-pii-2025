import React from 'react';
import axios from '../services/api';

function Filters({ setData }) {
  const fetchData = async () => {
    try {
      const response = await axios.get('/beneficios/');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <button 
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Buscar Dados
      </button>
    </div>
  );
}

export default Filters;
