import { Link, useLocation } from "react-router-dom";

import { MdDelete } from "react-icons/md";

const Card = ({ coffee, handleRemove }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover: scale-105 shadow-xl rounded-xl "
      >
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img className="h-56 w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="card-actions flex items-center justify-between px-4">
              <div className="badge badge-outline">Category</div>
              <div className="border-b-1 border-t-1 rounded-lg p-1">
                {category}
              </div>
            </div>
            <div className="card-actions flex items-center justify-between px-4">
              <div className="badge badge-outline">Origin</div>
              <div className="border-b-1 border-t-1 rounded-lg p-1">
                {origin}
              </div>
            </div>
            <div className="card-actions flex items-center justify-between px-4">
              <div className="badge badge-outline">Type</div>
              <div className="border-b-1 border-t-1 rounded-lg p-1">{type}</div>
            </div>
            <div className="card-actions flex items-center justify-between px-4">
              <div className="badge badge-outline">Rating</div>
              <div className="border-b-1 border-t-1 rounded-lg p-1">
                {rating}
              </div>
            </div>
            <div className="card-actions flex items-center justify-between px-4">
              <div className="badge badge-outline">Popularity</div>
              <div className="border-b-1 border-t-1 rounded-lg p-1">
                {popularity}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute text-2xl p-3 bg-warning rounded-full cursor-pointer z-50 -top-2 -right-2 "
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
};

export default Card;
