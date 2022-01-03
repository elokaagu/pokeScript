import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";

export default function Home() {
  const [first, second] = getOptionsForVote();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder ?</div>
      <div className="p-2"></div>
      <div className="border rounded-lg p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-800 mr-10">{first}</div>
        <div className="p8">vs</div>
        <div className="w-16 h-16 bg-red-800 ml-10">{second}</div>
      </div>
    </div>
  );
}
