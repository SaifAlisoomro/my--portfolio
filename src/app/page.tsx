import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Projects from "./projects/page";
import About from "./about/page";
import Skills from "./skills/page";






export default function Home() {
  return (
<div>

< Hero />
< About />
< Projects />
< Skills />
< Contact />

 
</div>
  );
}
