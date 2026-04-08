const ShimmerCard = () => {
  return (
    <div className="card bg-base-200 w-96 shadow-sm my-2 animate-pulse">

      {/* Image Skeleton */}
      <div className="w-full h-65 bg-gray-300 rounded-2xl"></div> 

      <div className="card-body space-y-3">
        {/* Name */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

        {/* Age/Gender */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        {/* Skills */}
        <div className="h-4 bg-gray-300 rounded w-full"></div>

        {/* About */}
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>

        {/* Buttons */}
        <div className="flex gap-4 mt-3">
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>

      </div>

    </div>
  );
};

export default ShimmerCard;