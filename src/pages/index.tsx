import { trpc } from "../utils/trpc";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder ?</div>
      <div className="p-2"></div>
      <div className="border rounded-lg p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200 mr-10"></div>
        <div className="p8">vs</div>
        <div className="w-16 h-16 bg-red-300 ml-10"></div>
      </div>
    </div>
  );
}
