import { GetSelectedTopics } from "@/actions/Topics";
import { getUniqueTopics } from "@/actions/getStories";
import StoryList from "@/components/StoryList";

export default async function Home() {
  const allTopics = await getUniqueTopics();
  const UserTags = await GetSelectedTopics();
  return (
    <div className="max-w-[1000px] mx-auto px-5 mt-12">
      <StoryList allTopics={allTopics.response} UserTags={UserTags.Tags} />
    </div>
  );
}
