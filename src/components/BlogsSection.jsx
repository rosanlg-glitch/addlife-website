import { Link } from "react-router-dom";
import { blogs } from "../data";

export default function BlogSection() {
  return (
    <div className="my-16 mx-6 max-w-7xl mx-auto bg-[F0F0F0]">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="ph text-primary">News & Blog</p>
        <h2 className="h2 text-text">Our Latest News & Blogs</h2>
      </div>

      {/* Explore more */}
      <div className="flex justify-end mb-8">
        <Link
          to="/blog"
          className="flex items-center gap-2 text-text font-semibold border-text pb-1 hover:text-primary hover:border-primary transition"
        >
          Explore more →
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-card rounded-xl overflow-hidden border border-base flex flex-col"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 p-4 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-text font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {blog.description}
              </p>

              {/* Learn More */}
              <Link
                to={blog.path}
                className="flex items-center justify-between mt-4 text-primary text-sm font-semibold hover:opacity-80 transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
