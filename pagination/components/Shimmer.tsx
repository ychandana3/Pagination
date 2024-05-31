import React from "react";

const Shimmer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center p-4 border rounded shadow-lg animate-pulse"
        >
          <div className="flex-1 mb-4 md:mb-0">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          </div>
          <div className="flex-1 md:ml-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
