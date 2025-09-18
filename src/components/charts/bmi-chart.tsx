import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const bmiData = [
  { year: '2019', bmi: 16.2, age: 8 },
  { year: '2020', bmi: 16.8, age: 9 },
  { year: '2021', bmi: 17.1, age: 10 },
  { year: '2022', bmi: 17.5, age: 11 },
  { year: '2023', bmi: 18.2, age: 12 },
  { year: '2024', bmi: 18.8, age: 13 },
];

export const BMIChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={bmiData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis 
            dataKey="year" 
            stroke="#64748b"
            fontSize={12}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            domain={[15, 22]}
            label={{ value: 'BMI', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value, name, props) => [
              `BMI: ${value}`,
              `Age: ${props.payload.age} years`
            ]}
            labelFormatter={(label) => `Year: ${label}`}
          />
          {/* Normal BMI range reference lines */}
          <ReferenceLine y={18.5} stroke="#28a745" strokeDasharray="2 2" label="Normal Min" />
          <ReferenceLine y={24.9} stroke="#28a745" strokeDasharray="2 2" label="Normal Max" />
          
          <Line
            type="monotone"
            dataKey="bmi"
            stroke="#007bff"
            strokeWidth={3}
            dot={{ fill: '#007bff', strokeWidth: 2, r: 5 }}
            activeDot={{ r: 7, stroke: '#007bff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};