import { CardDataSection } from "@/components/features/home/card-data-section";

export default function SocialMedia() {
  return (
    <main className="flex-1 page-main bg-white min-h-[80vh] py-4 pb-12">
      <div className="page-container">
        
        <div className="flex justify-center mb-6">
          <div className="image-card">
            <img src="/pogoy.jpg" alt="Vincent Anthony" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="page-title mb-2.5 m-0">SOCIAL MEDIA</h1>
            <p className="text-[0.85rem] text-[#666] tracking-[0.15em] uppercase m-0">
              Connect with me online
            </p>
          </div>
          <CardDataSection />
        </div>

      </div>
    </main>
  );
}