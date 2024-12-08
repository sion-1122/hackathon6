import React from "react";
import Image from "next/image";

const BlogLayout = () => {
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      category: "Wood",
      date: "14 Oct 2022",
      image: "https://via.placeholder.com/600x300", // Replace with actual image
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      category: "Handmade",
      date: "14 Oct 2022",
      image: "https://via.placeholder.com/600x300", // Replace with actual image
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    "Going all-in with millennial design",
    "Exploring new ways of decorating",
    "Handmade pieces that took time to make",
    "Modern home in Milan",
    "Colorful office redesign",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-3">
                    <span>Admin</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="block mt-4 text-blue-600 hover:underline text-sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    {post}
                  </li>
                ))}
              </ul>
            </div>

            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
                <Image height={270} width={1440} alt="logo" src="/fr.png" />
                </div>
    </div>
  );
};

export default BlogLayout;