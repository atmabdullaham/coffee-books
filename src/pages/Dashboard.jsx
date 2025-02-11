import { useEffect, useState } from "react";
import Heading from "./../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setCoffees(favorites);
  };
  return (
    <div className="mt-16">
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have added as favorite. You can view or them from here"
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            coffee={coffee}
            handleRemove={handleRemove}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
