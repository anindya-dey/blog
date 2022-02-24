import React from "react";
import Link from "next/link";

const categories = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Web Development",
    slug: "web-development",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-blue-400">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white drop-shadow-md">
              BLOG
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <span className="md:float-right mt-2 ml-4 align-middle font-semibold text-white cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
