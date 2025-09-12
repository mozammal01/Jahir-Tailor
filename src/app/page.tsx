import AboutSection from "@/components/Home/about";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Navbar from "@/components/Home/navigation";
import Services from "@/components/Home/services";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Banner />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}
