import AppLayout from "@/components/layout/AppLayout";
import PageContainer from "@/components/layout/PageContainer";
import SidebarNavigation from "@/components/navigation/SidebarNavigation";
import Hero from "@/components/sections/about/Hero";
import Education from "@/components/sections/about/Education";
import { aboutSidebar } from "@/content";
import Skills from "@/components/sections/about/Skills";
import FocusAreas from "@/components/sections/about/FocusAreas";
import Interests from "@/components/sections/about/Interests";
export default function HomePage() {
  return (
    <AppLayout>
      <SidebarNavigation items={aboutSidebar} />

  <PageContainer>
  <Hero />
  <Education />
  <Skills />
  <FocusAreas />
  <Interests />
</PageContainer>
    </AppLayout>
  );
}