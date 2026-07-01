import AppLayout from "@/components/layout/AppLayout";
import PageContainer from "@/components/layout/PageContainer";
import SidebarNavigation from "@/components/navigation/SidebarNavigation";
import Hero from "@/components/sections/about/Hero";
import Education from "@/components/sections/about/Education";
import { aboutSidebar } from "@/content";

export default function HomePage() {
  return (
    <AppLayout>
      <SidebarNavigation items={aboutSidebar} />

      <PageContainer>
  <Hero />

  <Education />
</PageContainer>
    </AppLayout>
  );
}