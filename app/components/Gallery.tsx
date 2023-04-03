import React from "react";
import Posts from "../helper/data";
import Card from "./Card";

function Gallery() {
  return (
    <div className="mx-auto lg:grid lg:grid-cols-3 gap-4 pt-4">
      {Posts.map((post) => (
        <Card title={post.title} image={post.image_url} />
      ))}
    </div>
  );
}

export default Gallery;
