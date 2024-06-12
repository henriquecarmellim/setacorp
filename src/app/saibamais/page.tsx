import Link from "next/link";
import { Footerg, HeaderG } from "../components";
import { Cards } from "./components";

export default function component() {
  return (
    <div className="bg-white flex flex-col min-h-[100dvh]">
      <HeaderG></HeaderG>
      <main className="flex-1 py-12 md:py-20 font-family[Montserrat, sans-serif]">
        <Cards></Cards>
      </main>
      <Footerg></Footerg>
    </div>
  );
};