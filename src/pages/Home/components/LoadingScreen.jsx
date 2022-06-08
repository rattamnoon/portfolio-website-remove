import React from 'react';

const LoadingScreen = ({ full, component }) => {
  if (full)
    return (
      <div
        className="fixed top-0 w-screen h-screen opacity-25 flex justify-center items-center"
        style={{ zIndex: 9999 }}
      >
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );

  if (component)
    return (
      <div className="flex w-full h-full bg-white opacity-75 justify-center items-center">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );

  return (
    <div className="flex w-screen h-screen bg-[#0a192f] justify-center items-center">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
