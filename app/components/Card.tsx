import React from "react";
import Image from "next/image";

type Post = {
  title: string;
  image: any;
};

const Card: React.FC<Post> = ({ title, image }) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-slate-200 rounded-xl p-2">
      <Image src={image} alt={title} height={300} className="rounded-xl" />
      <h2 className="text-black text-lg">{title}</h2>
    </div>
  );
};

export default Card;
