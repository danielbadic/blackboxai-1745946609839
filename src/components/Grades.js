import React, { useState } from 'react';

const initialGrades = [
  { student: 'John Doe', course: 'React Basics', grade: 8 },
  { student: 'Jane Smith', course: 'Advanced JavaScript', grade: 9 },
];

function Grades({ role }) {
  const [grades, setGrades] = useState(initialGrades);

  const handleGradeChange = (index, newGrade) => {
    const updatedGrades = [...grades];
    updatedGrades[index].grade = newGrade;
    setGrades(updatedGrades);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Grades</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded shadow-sm">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student</th>
            <th className="py-2 px-4 border-b">Course</th>
            <th className="py-2 px-4 border-b">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{entry.student}</td>
              <td className="py-2 px-4 border-b">{entry.course}</td>
              <td className="py-2 px-4 border-b">
                {role === 'teacher' ? (
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={entry.grade}
                    onChange={(e) => handleGradeChange(index, Number(e.target.value))}
                    className="w-16 p-1 border rounded text-center"
                  />
                ) : (
                  entry.grade
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
