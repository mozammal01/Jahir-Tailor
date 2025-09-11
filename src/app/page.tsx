import Banner from "@/components/Home/Banner";
import Navbar from "@/components/Home/navigation";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Banner />
      </div>
    </>
  );
}
