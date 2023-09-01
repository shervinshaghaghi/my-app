import React from 'react';

const Specials = ({ specialCourses }) => {
  return (
    <div className="specials">
      <h2>Special Courses for Today</h2>
      <ul>
        {specialCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specials;