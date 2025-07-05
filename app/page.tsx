import Navbar from "@/components/sections/NavBar";
import HomeSection from "@/components/sections/Homesection";
import AboutSection from "@/components/sections/AboutSection";
import BackstorySection from "@/components/sections/BackStorySection";
import HowToPlaySection from "@/components/sections/HowToPlaySection";
import RolesSection from "@/components/sections/RolesSection";
// import Footer from "@/components/sections/Footer";
import TrailerSection from "@/components/sections/TrailerSection";
import DocumentationSection from "@/components/sections/DocumentationSection";
import GameplayInsightsSection from "@/components/sections/GameplayInsightsSection";
import ContributionSection from "@/components/sections/ContributionSection";

export default function GuardDutyWebsite() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-50">
            <Navbar />
            <HomeSection />
            <TrailerSection />
            <AboutSection />
            <BackstorySection />
            <RolesSection />
            <HowToPlaySection />
            <DocumentationSection />
            <GameplayInsightsSection />
            <ContributionSection />
            {/* <Footer /> */}
        </div>
    );
}
