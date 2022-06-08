import React from 'react';

const Skills = ({ data }) => {
  console.log(data);
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {data.map(({ label, img }) => (
            <div
              key={label}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto"
                src={`http://localhost:4000/static/portfolio/${img}`}
                // src={`http://localhost:4000/static/portfolio/react.png`}
                alt={label}
              />
              <p className="my-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
