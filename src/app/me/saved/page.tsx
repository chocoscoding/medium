import { getDraftStory, getPublishedStory, getSavedStory } from "@/actions/me";
import React from "react";
import StoryPage from "../StoryPage";

type Props = {};

const page = async () => {
  const drafts = await getDraftStory();
  const published = await getPublishedStory();
  const saved = await getSavedStory();
  return (
    <div>
      <StoryPage
        stories={saved.response}
        TotalDrafts={drafts.response.length}
        TotalPublished={published.response.length}
        TotalSaved={saved.response.length}
      />
    </div>
  );
};

export default page;