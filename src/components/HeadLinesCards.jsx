import React from "react";

const HeadLinesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Frontend</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Mockup</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Design</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Test</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
};

export default HeadLinesCards;
