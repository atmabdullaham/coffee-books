import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Categories"}
        subtitle={
          "Choose your best coffee categories for the shake of test, don't hasitate to choose"
        }
      ></Heading>
      {/* Categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
