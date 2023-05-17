import Image from "next/image";
import Herosection from "./components/Herosection";
import BigNav from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <BigNav />
      <Herosection />
    </main>
  );
}
