import { useLoaderData } from "react-router-dom";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
