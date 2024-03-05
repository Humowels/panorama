export const ProductCardSkeleton = () => {
  return (
    <div className="w-[170px] h-[250px] flex flex-col items-center  rounded-xl border ">
      <div className="bg-gray-300 w-[144px] h-[184px] rounded-2xl animate-pulse mt-3" />
      <div className="w-[80%] h-2 bg-gray-300 rounded-2xl animate-pulse mt-3" />
      <div className="w-1/2 h-2 mx-auto bg-gray-300 rounded-2xl animate-pulse mt-3" />
    </div>
  );
};
