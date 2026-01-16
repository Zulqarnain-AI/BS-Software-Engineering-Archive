function Pagination({ totalCourses, coursesPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          style={{
            margin: "5px",
            background: currentPage === i + 1 ? "#4CAF50" : "#ddd"
          }}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
