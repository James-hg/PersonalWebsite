import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowToPlaySection from "@/components/sections/HowToPlaySection";
import RolesSection from "@/components/sections/RolesSection";

export default function GuardDutyWebsite() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-50">
            <HeroSection />
            <AboutSection />
            <HowToPlaySection />
            <RolesSection />
        </div>
    );
}
