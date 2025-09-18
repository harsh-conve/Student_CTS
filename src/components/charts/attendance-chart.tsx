import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { month: 'Jan', attendance: 92 },
  { month: 'Feb', attendance: 88 },
  { month: 'Mar', attendance: 95 },
  { month: 'Apr', attendance: 85 },
  { month: 'May', attendance: 91 },
  { month: 'Jun', attendance: 89 },
  { month: 'Jul', attendance: 93 },
  { month: 'Aug', attendance: 87 },
  { month: 'Sep', attendance: 96 },
  { month: 'Oct', attendance: 90 },
  { month: 'Nov', attendance: 94 },
  { month: 'Dec', attendance: 88 },
];

export const AttendanceChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={attendanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            domain={[70, 100]}
            label={{ value: 'Attendance %', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value) => [`${value}%`, 'Attendance']}
          />
          <Bar 
            dataKey="attendance" 
            fill="#007bff" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};