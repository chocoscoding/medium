import React from "react";

//story item skeleton
const StoryItemSkeleton = ({ amount = 9 }: { amount?: number }) => {
  return (
    <>
      {Array(amount)
        .fill(0)
        .map((_, i) => (
          <OneStoryItemSkeleton key={`StorySkeletonItem__${i}`} />
        ))}
    </>
  );
};

export default StoryItemSkeleton;

const OneStoryItemSkeleton = () => {
  return (
    <div className="mt-5">
      <div className="my-8 border-b-[1px] pb-10 border-neutral-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 animate-pulse bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-3 animate-pulse bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 animate-pulse bg-gray-300 rounded w-1/2 mt-2"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-10 grid-cols-2 mt-5">
          <div className="md:col-span-3">
            <div className="h-5 animate-pulse bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="h-3 animate-pulse bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 animate-pulse bg-gray-300 rounded w-full mb-2"></div>
            <div className="flex items-center space-x-5 mt-6">
              <div className="h-5 animate-pulse bg-gray-300 rounded-full w-20"></div>
              <div className="h-5 animate-pulse bg-gray-300 rounded-full w-10"></div>
              <div className="h-5 animate-pulse bg-gray-300 rounded-full w-10"></div>
            </div>
          </div>
          <div className="w-full h-30 animate-pulse bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
