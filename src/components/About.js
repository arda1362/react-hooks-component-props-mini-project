import React from "react";

function About({ image, about }) {
  // Use a placeholder image if 'image' prop is not provided
  const defaultImage =
    "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
