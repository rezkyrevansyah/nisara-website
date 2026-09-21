import React from "react";
import EmergencyTopBar from "@/components/layout/EmergencyTopBar";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyNisaraSection from "@/components/sections/WhyNisaraSection";
import ThreePillarsSection from "@/components/sections/ThreePillarsSection";
import SafetyGuideSection from "@/components/sections/SafetyGuideSection";
import HelpChannelsSection from "@/components/sections/HelpChannelsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import JoinCommunitySection from "@/components/sections/JoinCommunitySection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import QuickExitButton from "@/components/ui/QuickExitButton";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper overflow-x-clip selection:bg-rose selection:text-plum-dark">
      {/* Fixed Header: Emergency Top Bar + Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <EmergencyTopBar />
        <Navbar />
      </div>

      {/* Spacer to preserve document flow under fixed header */}
      <div className="h-[100px] sm:h-[114px] md:h-[131.5px] w-full shrink-0 pointer-events-none" aria-hidden="true" />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <WhyNisaraSection />
        <ThreePillarsSection />
        <SafetyGuideSection />
        <HelpChannelsSection />
        <ProgramsSection />
        <JoinCommunitySection />
        <CollaborationSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Navigation */}
      <MobileStickyBar />

      {/* Quick Exit Floating Safety Action */}
      <QuickExitButton />
    </div>
  );
}
