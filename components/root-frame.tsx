"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

type SectionId = "home" | "about" | "skills" | "projects" | "contact";

const sectionByPath: Record<string, SectionId> = {
    "/": "home",
    "/about": "about",
    "/skills": "skills",
    "/projects": "projects",
    "/contact": "contact",
};

interface RootFrameProps {
    children: ReactNode;
}

export default function RootFrame({ children }: RootFrameProps) {
    const pathname = usePathname();
    const activeSection = sectionByPath[pathname];

    if (!activeSection) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
            <Navigation activeSection={activeSection} />
            <main className="overflow-hidden">{children}</main>
            <Footer />
        </div>
    );
}
