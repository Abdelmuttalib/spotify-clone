import React from "react"

import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Clone</title>
      </Head>

      <main className="flex justify-center min-h-screen italic font-semibold text-green-600 py-44 text-8xl bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
        Spotify Clone
      </main>
    </div>
  )
}
