import { useState } from "react";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";

export default function Home() {
  const [ids, updateIds] = useState(() => getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }]);

  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }]);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  console.log(firstPokemon.data);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder ?</div>
      <div className="p-2"></div>
      <div className="border rounded-lg p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex flex-col mr-10">
          <img
            src={firstPokemon.data?.sprites.front_default}
            className="w-full"
            alt="firstPokemon"
          />
          <div className="text-xl text-center pb-4 capitalize mt-[-2rem]">
            {firstPokemon.data?.name}
          </div>
        </div>
        <div className="p8">vs</div>
        <div className="w-64 h-64 flex flex-col  ml-10">
          <img
            src={secondPokemon.data?.sprites.front_default}
            className="w-full"
            alt="secondPokemon"
          />
          <div className="text-xl text-center pb-4 capitalize mt-[-2rem]">
            {firstPokemon.data?.name}
          </div>
        </div>
      </div>
    </div>
  );
}
