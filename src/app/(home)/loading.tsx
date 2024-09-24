import StoryItemSkeleton from "@/components/Skeletons/StoryItemSkeleton";

export default function Loading() {
  return (
    <div className="max-w-[1000px] mx-auto px-5 mt-12">
      <div className="flex items-center space-x-6 border-b-[1px] text-sm opacity-60">
        <div className="pb-3 w-12 h-7 mb-1 animate-pulse bg-gray-300 rounded"></div>
        <div className="pb-3 w-10 h-7 mb-1 animate-pulse bg-gray-300 rounded"></div>
        <div className="pb-3 w-16 h-7 mb-1 animate-pulse bg-gray-300 rounded"></div>
      </div>
      <StoryItemSkeleton />
    </div>
  );
}
