import React, { useState } from 'react';

const initialCourses = [
  {
    id: 1,
    title: 'React Basics',
    materials: [],
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    materials: [],
  },
];

function Courses({ role }) {
  const [courses, setCourses] = useState(initialCourses);

  const handleFileUpload = (courseId, event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId
            ? { ...course, materials: [...course.materials, file.name] }
            : course
        )
      );
    } else {
      alert('Please upload a PDF file.');
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Courses</h3>
      {courses.map((course) => (
        <div key={course.id} className="mb-4 p-4 border rounded bg-white shadow-sm">
          <h4 className="font-bold mb-2">{course.title}</h4>
          <div className="mb-2">
            <strong>Materials:</strong>
            <ul className="list-disc list-inside">
              {course.materials.length > 0 ? (
                course.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))
              ) : (
                <li>No materials uploaded</li>
              )}
            </ul>
          </div>
          {role === 'teacher' && (
            <div>
              <label className="block mb-1 font-semibold" htmlFor={`upload-${course.id}`}>
                Upload PDF Material
              </label>
              <input
                type="file"
                id={`upload-${course.id}`}
                accept="application/pdf"
                onChange={(e) => handleFileUpload(course.id, e)}
                className="border p-1 rounded"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Courses;
