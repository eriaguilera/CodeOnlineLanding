import "../App.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import CallToAction from "../components/CallToAction/CallToAction";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;