import { Story } from "@prisma/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthorDetail } from "@/app/me/StoryPage";
import ClapComponent from "@/app/published/ClapComponent";
import SaveComponent from "@/app/published/SaveComponent";
import { CheckSaved } from "@/actions/Save";
import { ClapCount, ClapCountByUser } from "@/actions/Clap";
import { useEffect } from "react";
import { useState } from "react";
import StoryDataExtractor from "@/utils/text-extractor";

type Props = {
  key: string;
  story: Story;
};

const StoryItem = ({ key, story }: Props) => {
  const [userClaps, setUserclaps] = useState<number>(0);
  const [totalClaps, setTotalClaps] = useState<number>(0);
  const [SavedStatus, setSavedStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchClapCountByUser = async () => {
      try {
        const claps = await ClapCountByUser(story.id);
        setUserclaps(claps);
      } catch (error) {
        console.log("Error fetching the user claps");
      }
    };

    const fetchTotalClaps = async () => {
      try {
        const claps = await ClapCount(story.id);
        setTotalClaps(claps);
      } catch (error) {
        console.log("Error fetching the  claps");
      }
    };

    const fetchSavedStatus = async () => {
      try {
        const Savedstatus = await CheckSaved(story.id);
        if (Savedstatus.Status) setSavedStatus(Savedstatus.Status);
      } catch (error) {
        console.log("Error fetching the saved status");
      }
    };

    fetchSavedStatus();
    fetchTotalClaps();
    fetchClapCountByUser();
  }, [story.id]);

  const StoryData = new StoryDataExtractor(story.content as string);
  // Split the text into words and select the first 10
  const imgSrc = StoryData.extractImageSrc();
  const H1Element = StoryData.extractH1Content();
  const first30Words = StoryData.extractFirstNWords(30);
  return (
    <div className="mt-5 group">
      <Link key={story.id} href={`/published/${story.id}`} className="my-8 border-b-[1px] pb-10 border-neutral-100">
        <AuthorDetail story={story} />
        <div className="grid md:grid-cols-4 gap-10 grid-cols-2">
          <div className="md:col-span-3">
            <h1 className="text-xl font-bold py-3 group-hover:underline">{story.title}</h1>
            <p className="max-md:hidden text-neutral-600 font-serif">{first30Words} ...</p>
            <div className="flex items-center space-x-5 mt-6">
              {story.topics && <span className="px-2 py-1 rounded-full text-[13px] bg-black text-white">{story.topics}</span>}
              <ClapComponent storyId={story.id} UserClaps={userClaps} ClapCount={totalClaps} />
              <SaveComponent storyId={story.id} SavedStatus={SavedStatus} />
            </div>
          </div>
          <Image
            width={300}
            height={300}
            src={imgSrc ? imgSrc : "/no-image.jpg"}
            alt="Story Image"
            className="rounded-sm aspect-video h-full group-hover:scale-110 transition-all"
          />
        </div>
      </Link>
    </div>
  );
};

export default StoryItem;
