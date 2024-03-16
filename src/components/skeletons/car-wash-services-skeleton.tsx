export const CarWashServicesSkeleton = () => {
  return (
    <div className="flex items-center gap-2 w-full py-2 px-3 border-y border-gray-300">
      <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />
      <div className="flex-grow">
        <div className="w-[90%] bg-gray-300 animate-pulse h-2 rounded-xl " />
        <div className="w-[40%] bg-gray-300 animate-pulse h-2 rounded-xl mt-2" />
      </div>
      <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full" />
    </div>
  );
};
