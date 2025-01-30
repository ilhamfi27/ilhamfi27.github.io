import React from 'react';
import WorkingExperience from './WorkingExperience';

const Experience = ({ experiences }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        My working experience
      </h1>
      <WorkingExperience experiences={experiences} />
    </div>
  );
};

export default Experience;
