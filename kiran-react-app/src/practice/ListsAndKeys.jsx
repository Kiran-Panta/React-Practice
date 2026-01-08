import { useState } from 'react';

function ListsAndKeys() {
  // Student data with unique ids
  const [students, setStudents] = useState([
    {id: 1, name: 'Alice', grade: 'A', subject: 'Math'},
    {id: 2, name: 'Bob', grade: 'B', subject: 'Science'},
    {id: 3, name: 'Charlie', grade: 'A', subject: 'English'},
    {id: 4, name: 'Diana', grade: 'C', subject: 'History'},
    {id: 5, name: 'Eve', grade: 'B', subject: 'Art'},
    {id: 6, name: 'Frank', grade: 'A', subject: 'Physics'},
    {id: 7, name: 'Grace', grade: 'B', subject: 'Chemistry'},
    {id: 8, name: 'Henry', grade: 'C', subject: 'Biology'},
    {id: 9, name: 'Ivy', grade: 'A', subject: 'Geography'},
    {id: 10, name: 'Jack', grade: 'B', subject: 'Literature'}
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter students
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Move student up/down
  const moveStudent = (index, direction) => {
    const newStudents = [...students];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < newStudents.length) {
      [newStudents[index], newStudents[targetIndex]] = [newStudents[targetIndex], newStudents[index]];
      setStudents(newStudents);
    }
  };

  // Nested subjects
  const subjects = [
    {name: 'Math', topics: ['Algebra', 'Geometry', 'Calculus']},
    {name: 'Science', topics: ['Physics', 'Chemistry', 'Biology']},
    {name: 'English', topics: ['Grammar', 'Literature', 'Writing']}
  ];

  return (
    <div className="container my-4">
      <h1>Lists and Keys Practice</h1>

      {/* Student Directory */}
      <div className="mb-4">
        <h2>Student Directory</h2>
        <div className="row">
          {students.map(student => (
            <div key={student.id} className="col-md-3 mb-3"> {/* Right way: unique id */}
              <div className="card">
                <div className="card-body">
                  <h5>{student.name}</h5>
                  <p>Grade: {student.grade}</p>
                  <p>Subject: {student.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filterable List */}
      <div className="mb-4">
        <h2>Filterable List</h2>
        <input 
          type="text" 
          className="form-control mb-3"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="row">
          {filteredStudents.map(student => (
            <div key={student.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5>{student.name}</h5>
                  <p>Grade: {student.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reorder Simulation */}
      <div className="mb-4">
        <h2>Reorder Simulation</h2>
        {students.slice(0, 5).map((student, index) => (
          <div key={student.id} className="d-flex align-items-center mb-2"> {/* Right way */}
            <button 
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => moveStudent(index, -1)}
              disabled={index === 0}
            >
              ↑
            </button>
            <span className="me-2">{student.name}</span>
            <button 
              className="btn btn-sm btn-outline-primary"
              onClick={() => moveStudent(index, 1)}
              disabled={index === 4}
            >
              ↓
            </button>
          </div>
        ))}
      </div>

      {/* Nested List */}
      <div className="mb-4">
        <h2>Nested List</h2>
        {subjects.map(subject => (
          <div key={subject.name} className="mb-3">
            <h4>{subject.name}</h4>
            <ul>
              {subject.topics.map(topic => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Wrong way example (commented out) */}
      {/* {students.map((student, index) => (
        <div key={index}> // Wrong: index as key causes bugs on reorder
          {student.name}
        </div>
      ))} */}
    </div>
  );
}

export default ListsAndKeys;