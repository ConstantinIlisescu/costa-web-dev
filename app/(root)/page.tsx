import HomeHero from "@/components/HomeHero";
import HomeAction from "@/components/HomeAction";
import HomeProjects from "@/components/HomeProjects";
import HomeAbout from "@/components/HomeAbout";
import HomeSteps from "@/components/HomeSteps";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAction />
      <HomeProjects />
      <HomeAbout />
      <HomeSteps />
    </>
  );
}
