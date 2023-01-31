import { useLoaderData } from "react-router-dom";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
