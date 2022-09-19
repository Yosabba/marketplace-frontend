const Skeleton = () => {
  return (
    <div>
      <div className="bg-gray-200 h-64 w-64 rounded-lg animate-pulse"></div>
      <div className="bg-gray-200 h-8 w-32 rounded-lg mt-4 animate-pulse"></div>
      <div className="bg-gray-200 h-4 w-20 rounded-lg mt-2 animate-pulse"></div>
      <div className="bg-gray-200 h-4 w-24 rounded-lg mt-2 animate-pulse"></div>
      <div className="bg-gray-200 h-4 w-16 rounded-lg mt-2 animate-pulse"></div>
    </div>
  );
};

export default Skeleton;
