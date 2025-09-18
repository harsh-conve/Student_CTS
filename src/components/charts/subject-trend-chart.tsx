import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface SubjectTrendChartProps {
  studentClass: number;
}

// Mock data for different classes
const getSubjectsByClass = (studentClass: number) => {
  if (studentClass <= 2) {
    return ['Maths', 'Gujarati'];
  } else if (studentClass === 3) {
    return ['Maths', 'Gujarati', 'EVS'];
  } else if (studentClass <= 5) {
    return ['Maths', 'Gujarati', 'EVS', 'Science', 'English'];
  } else {
    return ['Maths', 'Gujarati', 'Science', 'English', 'Hindi', 'Social Studies'];
  }
};

const generateMockData = (subjects: string[], currentClass: number) => {
  const standards = [];
  
  // Generate data for previous years up to current class
  for (let std = 1; std <= currentClass; std++) {
    const classSubjects = getSubjectsByClass(std);
    const dataPoint: any = { standard: `Std ${std}` };
    
    // Only include subjects that are relevant for both the historical class and current subjects
    subjects.forEach(subject => {
      if (classSubjects.includes(subject)) {
        // Generate realistic year-on-year progression (slight improvement over years)
        const baseScore = 65 + (std - 1) * 3; // Base improvement each year
        const variation = Math.floor(Math.random() * 15) - 7; // ±7 variation
        dataPoint[subject] = Math.min(95, Math.max(50, baseScore + variation));
      } else {
        dataPoint[subject] = null; // Subject not available in this standard
      }
    });
    standards.push(dataPoint);
  }
  
  return standards;
};

const colors = ['#004080', '#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1'];

export const SubjectTrendChart = ({ studentClass }: SubjectTrendChartProps) => {
  const subjects = getSubjectsByClass(studentClass);
  const data = generateMockData(subjects, studentClass);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis 
            dataKey="standard" 
            stroke="#64748b"
            fontSize={12}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            domain={[50, 100]}
            label={{ value: 'Marks (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          {subjects.map((subject, index) => (
            <Line
              key={subject}
              type="monotone"
              dataKey={subject}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: colors[index % colors.length] }}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};