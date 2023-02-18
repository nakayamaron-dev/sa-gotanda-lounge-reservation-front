import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Image
        src="/lounge_map.png"
        fill
        alt="Lounge Map"
        style={{ objectFit: "contain" }}
      />
    </main>
  );
}
