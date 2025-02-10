import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
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
      {/* Dynamic Nested */}
    </div>
  );
};

export default Home;
