import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [
    descriptionVisible,
    setDescriptionVisibility
  ] = useState(true);

  return (
    <div className="m-auto w-75">
      <h1
        className="text-center"
        onClick={() => setDescriptionVisibility(!descriptionVisible)}
      >
        It is a home page
      </h1>
      {descriptionVisible && (
        <div>Some awesome home page with some awesome description like never before you havent seen</div>
      )}
      <Link to="/about">About</Link>

    </div>
  )
}

export default Home;
