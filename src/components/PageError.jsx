import React from 'react';

const PageError = ({ error }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#0a192f]">
      <div className="p-10">
        <div className="bg-gray-600 text-white p-5 border">{error}</div>
      </div>
    </div>
  );
};

export default PageError;
