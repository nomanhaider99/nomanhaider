import Box from "@/components/ui/box";
import MenuBar from "@/components/ui/menu";
import Shadow from "@/components/ui/shadow";
import Tabs from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-black flex justify-center py-5"
    >
      <div className="w-[30%]"><Box /></div>
      <div className="w-[40%] absolute flex flex-col justify-between items-center">
        <Tabs />
        <Shadow />
      </div>
      {/* Button */}
      <div className="w-[30%] flex justify-end items-end">
        <MenuBar />
      </div>
    </div>
  );
}
