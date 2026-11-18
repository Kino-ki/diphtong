import AgencyClients from "@/components/collabSections/AgencyClients";
import CollabHero from "@/components/collabSections/CollabHero";
import CollabProcedure from "@/components/collabSections/CollabProcedure";
import FAQ from "@/components/collabSections/FAQ";
import RisksComponent from "@/components/collabSections/RisksComponent";
import Projects from "@/components/sectionshome/Projects";
import ReachOutSection from "@/components/sectionshome/ReachOutSection";

export default function CollabPage() {
  return (
    <div>
      <CollabHero />
      <AgencyClients />
      <RisksComponent />
      <div className="h-1 " />
      <Projects />
      <CollabProcedure />
      <FAQ />
      <ReachOutSection />
    </div>
  );
}
