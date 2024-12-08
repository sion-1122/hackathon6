import Image from "next/image";
import Hero from "@/components/hero";
import Mid from "@/components/mid";
import Forth from "@/components/forth";
import {RoomInspiration} from "@/components/fifth";
import Last from "@/components/last"

export default function Home() {
  return (
    <div className="">
       <Hero />
        <Mid />
        <Forth />
        <RoomInspiration />
        <Last />
    </div>
  );
}
