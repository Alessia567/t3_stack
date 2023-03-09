import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import React, { useState } from "react";

const Home: NextPage = () => {
 // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
  
  const [buildOrder, setBuildOrder] = useState("");
  const [MatchUp, setMatchUp] = useState("ZvT");

  function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault
    //so that the page doesnt refresh
  }
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" gap-4 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit a Build Order</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmitBuildOrder}>
        <label htmlFor="match-up-select">
          Matchup
       </label>
          <select
            className="text-black"
            value={MatchUp}
            onChange={(e) => { setMatchUp(e.target.value) }}
            id="match-up-select"
            required
          >
          <option value="zvt">ZvT</option>
          <option value="zvp">ZvP</option>
          <option value="zvz">ZvZ</option>

          <option value="pvt">PvT</option>
          <option value="pvp">PvP</option>
          <option value="pvz">PvZ</option>

          <option value="tvt">TvT</option>
          <option value="tvp">TvP</option>
          <option value="tvz">TvZ</option>



        </select>
          <textarea
            required
            className="text-black p-2"
            value={buildOrder}
            onChange={(e) => setBuildOrder(e.target.value)}
          />


        <button className="bg-white p-2 text-black">submit</button>
        </form>
      </main>
    </>
  );
};
//we want to listen to a user when it types and also update the state when the user types

export default Home;


