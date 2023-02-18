import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>
        <Link href="/calender-sample">カレンダーサンプル</Link>
      </h1>
      <Image
        src="/lounge_map.png"
        width={750}
        height={750}
        alt="Lounge Map"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Home;
