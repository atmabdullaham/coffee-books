const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center py-4 text-gray-600 gap-1">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-lg font-medium text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Heading;
