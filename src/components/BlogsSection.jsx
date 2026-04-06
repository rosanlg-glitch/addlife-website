import { Link } from "react-router-dom";
import { blogs } from "../data";

export default function BlogSection() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <p className="ph text-primary">News & Blog</p>
        <h2 className="h2 text-text">Our Latest News & Blogs</h2>
      </div>

      <div className="flex justify-end mb-8">
        <Link
          to="/blog"
          className="flex items-center gap-2 text-text font-semibold hover:text-primary transition"
        >
          Explore more →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-card rounded-xl overflow-hidden border border-base flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-text font-bold text-base md:text-lg mb-2">
                {blog.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {blog.description}
              </p>
              <Link
                to={blog.path}
                className="mt-4 text-primary text-sm font-semibold hover:opacity-80 transition"
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
