import Head from "next/head"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Starter Next Tailwind</title>
      </Head>

      <main className=""></main>

      <footer className="">
        <p className="pb-4 font-mont text-gray-300 text-sm font-semibold">
          <a href="https://github.com/{your_nickname}">your_nickname</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}
