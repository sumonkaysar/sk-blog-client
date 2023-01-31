import { useLoaderData } from "react-router-dom";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div>
      home
    </div>
  );
}

export default Home;
