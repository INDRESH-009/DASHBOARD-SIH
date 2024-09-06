import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 1 },
  { day: 'Thu', hours: 2.5 },
  { day: 'Fri', hours: 4 },
  { day: 'Sat', hours: 3 },
  { day: 'Sun', hours: 2 },
];

const ConsistencyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dummyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="hours" stroke="#ff6f00" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ConsistencyChart;
