import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";

export default function HomePage() {
  return (
    <div className="page-main bg-white min-h-[80vh] px-8 pb-8">
      <div className="page-container max-w-[1400px] mx-auto">
        <div className="flex justify-center">
          <div className="image-card h-[500px] relative top-6">
            <img src="/anthony.jpg" alt="Anthony" />
          </div>
        </div>

        <HomePageBannerSection />
      </div>
    </div>
  );
}