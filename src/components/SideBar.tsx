import React from "react"

import {
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline"
import { signOut, useSession } from "next-auth/react"

type Props = {}

const SideBar = (props: Props) => {
  const { data: session, status } = useSession()
  console.log("session: ", session)
  return (
    <div className="p-4 text-sm text-gray-500 border-r border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-gray-900 border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="w-5 h-5" />
          <p>Your episodes</p>
        </button>

        <hr className="border-gray-900 border-t-[0.1px]" />

        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
      </div>
    </div>
  )
}

export default SideBar
