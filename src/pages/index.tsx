import React from "react"

import Head from "next/head"

import SideBar from "@components/SideBar"

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify Clone</title>
      </Head>

      <main>
        {/* SideBar */}
        <SideBar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
