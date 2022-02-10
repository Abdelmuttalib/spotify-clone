import React from "react"

import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"

export interface Props {
  provider: Object
}
const Login = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black gap-6">
      <Image
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
        width={180}
        height={180}
      />
      {Object.values(props).map((provider) => (
        <div key={provider.name}>
          <button
            type="button"
            className="px-5 py-3 font-medium text-white rounded-full bg-spotifyGreen hover:bg-opacity-90 ease-in-out duration-200"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return { props: providers }
}
