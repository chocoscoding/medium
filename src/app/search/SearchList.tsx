"use client";
import { getStoryByTag } from "@/actions/getStories";
import StoryItem from "@/components/StoryItem";
import StoryItemSkeleton from "@/components/Skeletons/StoryItemSkeleton";
import { Story } from "@prisma/client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {};

const SearchList = (props: Props) => {
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const searchparams = useSearchParams();
  const searchValue = searchparams.get("for");

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      try {
        const response = await getStoryByTag(searchValue || "All");
        setFilteredStories(response.stories);
      } catch (error) {
        console.log("Error in fetching the data");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [searchparams]);

  return (
    <div>{loading ? <StoryItemSkeleton amount={5} /> : filteredStories.map((story) => <StoryItem key={story.id} story={story} />)}</div>
  );
};

export default SearchList;
