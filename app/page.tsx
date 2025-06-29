import Navbar from "@/components/sections/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BackstorySection from "@/components/sections/BackStorySection";
import HowToPlaySection from "@/components/sections/HowToPlaySection";
import RolesSection from "@/components/sections/RolesSection";
import Footer from "@/components/sections/Footer";
import TrailerSection from "@/components/sections/TrailerSection";
import DocumentationSection from "@/components/sections/DocumentationSection";
import TimingSection from "@/components/sections/TimingSection";
import ContributionSection from "@/components/sections/ContributionSection";

export default function GuardDutyWebsite() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-50">
            <Navbar />
            <HeroSection />
            <TrailerSection />
            <AboutSection />
            <BackstorySection />
            <HowToPlaySection />
            <RolesSection />
            <DocumentationSection />
            <TimingSection />
            <ContributionSection />
            <Footer />
        </div>
    );
}
