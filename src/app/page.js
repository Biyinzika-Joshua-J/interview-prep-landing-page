import Image from "next/image";
import {
  Hero,
  Characters,
  HowProgramWorks,
  CrushInterviews,
  Companies,
  Reserve,
  Featured,
  Guide,
  Apply,
  Parallax,
  Testimonials,
} from "../../components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      <Hero />
      <Characters />
      <HowProgramWorks />
      <Parallax/>
      <CrushInterviews />
      <Companies />
      <Reserve />
      <Featured/>
      <Testimonials/>
      <Apply/>
      <Guide/>
    </main>
  );
}
