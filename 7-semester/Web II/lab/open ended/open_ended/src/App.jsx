import { useState, useEffect } from 'react';
import { fetchCourses } from './conponents/data';
import ParticipantManager from './conponents/ParticipantManager';

function App() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchCourses(currentPage);
      setCourses(result.data);
      setLoading(false);
    };
    loadData();
  }, [currentPage]);

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      {/* Sidebar: Course Listing (Task 1) */}
      <div style={{ flex: 1 }}>
        <h2>Courses</h2>
        {loading ? <p>Loading...</p> : (
          <div>
            {courses.map(c => (
              <li 
                key={c.id} 
                onClick={() => setSelectedCourse(c)}
                style={{ 
                  padding: '0px', 
                  cursor: 'pointer', 
                  background: selectedCourse?.id === c.id ? '#e0e0e0' : 'white',
                  borderBottom: '1px solid #eee'
                }}
               >
                {c.title}
              </li>
            ))}
          </div>
        )}
        {/* Pagination Controls */}
        <div style={{ marginTop: '10px' }}>
          {[1, 2, 3, 4, 5].map(n => (
            <button key={n} onClick={() => setCurrentPage(n)}>{n}</button>
          ))}
        </div>
      </div>

      {/* Main Content: Participant Management (Task 2) */}
      <div style={{ flex: 2 }}>
        {selectedCourse ? (
          <>
            <h2>Editing: {selectedCourse.title}</h2>
            <ParticipantManager />
          </>
        ) : (
          <p>Select a course to manage participants</p>
        )}
      </div>
    </div>
  );
}

export default App;