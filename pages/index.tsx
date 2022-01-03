import React from "react";

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center max-w-2xl ">
      <div className="text-2xl text-center">Which Pokemon is rounder ?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-300"></div>
        <div className="p8">vs</div>
        <div className="w-16 h-16 bg-red-300"></div>
      </div>
    </div>
  );
}

export default Home;
