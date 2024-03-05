export const ProductPageSkeleton = () => {
  return (
    <div className="absolute flex flex-col overflow-y-scroll min-h-screen w-full left-0 top-0 bg-service_bg z-10 p-5">
      <div className="w-full flex justify-end">
        <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />
      </div>
      <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-xl mx-auto mt-5" />
      <div className="w-[90%] h-3 mt-3 bg-gray-300 animate-pulse rounded-xl" />
      <div className="w-[70%] h-3 mt-3 bg-gray-300 animate-pulse rounded-xl" />
      <div className="flex items-center justify-end gap-2 border-y border-gray-300 py-4 mt-5">
        <div className="flex-grow h-3 rounded-xl bg-gray-300 animate-pulse" />
        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
      </div>
      <div className="flex items-end flex-grow">
        <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl" />
      </div>
    </div>
  );
};
