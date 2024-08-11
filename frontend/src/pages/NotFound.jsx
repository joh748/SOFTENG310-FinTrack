import React from "react";
import sharkImage from "../assets/images/logo_shark.png";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={sharkImage} alt="Shark Logo" className="h-48 w-48" />
        </div>
        <h1 className="text-9xl font-bold text-blue-600 mt-4">404</h1>
        <p className="text-lg text-gray-700 mt-2">
          The page you have been looking for might have been removed,
        </p>
        <p className="text-lg text-gray-700 mt-2">
          had its name changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
