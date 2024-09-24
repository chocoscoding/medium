"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ScrollText } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const UserSide = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const MakeNewStory = async () => {
    try {
      const response = await axios.post("/api/new-story");
      router.push(`/story/${response.data.id}`);
      console.log(response);
    } catch (error) {
      console.log("Error creating new story", error);
    }
  };
  if (isSignedIn)
    return (
      <div className="flex items-center space-x-7">
        <span
          onClick={MakeNewStory}
          className="flex items-center space-x-2 opacity-70 hover:opacity-100 duration-100 ease-in cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
            <path
              d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
              fill="currentColor"></path>
            <path
              d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
              stroke="currentColor"></path>
          </svg>
          <p className="font-light text-sm">Write</p>
        </span>
        <Link href="/me/drafts" className="opacity-60 flex items-center space-x-1 text-sm font-light">
          <ScrollText size={20} opacity={20} /> Me
        </Link>
        <UserButton signInUrl="/" />
      </div>
    );

  return <div className="rounded-full bg-green-600 text-white px-12 py-2 text-sm">Sign In</div>;
};

export default UserSide;
