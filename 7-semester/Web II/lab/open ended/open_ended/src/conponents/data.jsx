export const fetchCourses = (page, limit = 20) => {
  return new Promise((resolve) => {
    // Simulating AJAX delay
    setTimeout(() => {
      const allCourses = Array.from({ length: 200 }, (_, i) => ({
        id: i + 1,
        title: `Course ${i + 1}: ${['Web Dev', 'Data Science', 'UI/UX', 'Cloud'][i % 4]}`,
        instructor: `Instructor ${String.fromCharCode(65 + (i % 26))}`,
      }));
      
      const start = (page - 1) * limit;
      const end = start + limit;
      resolve({
        data: allCourses.slice(start, end),
        total: allCourses.length
      });
    }, 500);
  });
};