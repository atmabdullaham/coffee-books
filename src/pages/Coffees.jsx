import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center my-12">
        <div className="">
          <h1 className="text-3xl font-thin">
            Sort Coffee & apos;s by popularity & rating{" "}
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort by Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
