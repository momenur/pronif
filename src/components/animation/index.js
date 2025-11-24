"use client";

import Hero from "./Hero";
import FeatureGrid from "./FeatureGrid";
import ScrollTimeline from "./ScrollTimeline";
import InteractiveCard from "./InteractiveCard";
import CallToAction from "./CallToAction";

const AnimationPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <FeatureGrid />
      <ScrollTimeline />
      <InteractiveCard />
      <CallToAction />
    </main>
  );
};

export default AnimationPage;
