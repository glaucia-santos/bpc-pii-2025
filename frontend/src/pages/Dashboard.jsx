import React, { useState } from 'react';
import Filters from '../components/Filters';
import Charts from '../components/Charts';

function Dashboard() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Filters setData={setData} />
      <Charts data={data} />
    </div>
  );
}

export default Dashboard;
