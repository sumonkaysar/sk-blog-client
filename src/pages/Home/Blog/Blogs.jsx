import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const [id, setId] = useState(null);
  const blogs = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  max-w-[1440px] px-5 mx-auto">
      {
        blogs.map(blog => <Blog
          key={blog._id}
          blog={blog}
          setId={setId}
        />)
      }
    </div>
  );
}

export default Blogs;
