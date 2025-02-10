import { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router-dom";
import { addFavorite } from "../utils";

const CoffeeDetails = () => {
  const allCoffeeData = useLoaderData();
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleData = allCoffeeData.find((coffee) => coffee.id == id);
    setCoffee(singleData);
  }, [allCoffeeData, id]);

  const {
    category,
    description,
    image,
    ingredients,
    making_process,
    name,
    nutrition_info,
    origin,
    popularity,
    rating,
    type,
  } = coffee;
  // handle favorite btn click
  const handleFavorite = (coffee) => {
    addFavorite(coffee);
  };
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-gray-600 text-center pb-2">
        {description}
      </h1>
      <div className=" w-full md:w-11/12 lg:w-10/12 mx-auto card bg-base-100  shadow-sm">
        <figure className="">
          <img
            className="h-[500px] w-full object-cover "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex  flex-row">
          <div className="w-1/2">
            <h2 className="card-title text-3xl font-semibold text-gray-600">
              {name}
            </h2>
            <h4 className="text-base font-thin mt-2">
              Popularity: {popularity}
            </h4>
            <h4 className="text-base font-thin">Rating: {rating}</h4>
          </div>
          <div className="card-actions justify-end w-1/2  ">
            <button
              onClick={() => handleFavorite(coffee)}
              className="btn btn-primary"
            >
              Favorite
            </button>
          </div>
        </div>
        <div className="card-body ">
          <div className="w-full">
            <h2 className="card-title text-2xl font-semibold text-gray-600">
              Making Process
            </h2>
            <h4 className="text-base font-thin mt-2">{making_process}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
