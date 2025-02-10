const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return <div>Name: {name}</div>;
};

export default Card;
