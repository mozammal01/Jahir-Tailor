import AboutSection from "@/components/Home/about";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Navbar from "@/components/shared/navigation";
import Services from "@/components/Home/services";
import FooterPage from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import Blogs from "@/components/Home/Blogs";
import Process from "@/components/Home/Process";

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
        <AboutSection />
      </div>
      <div>
        <Process />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Blogs />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <FooterPage />
      </div>
    </>
  );
}
