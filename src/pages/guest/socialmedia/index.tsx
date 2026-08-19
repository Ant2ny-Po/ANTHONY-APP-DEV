import { CardDataSection } from "@/components/features/socialmedia/card-data-section";

export default function SocialMedia() {
  return (
    <main className="flex-1 page-main" style={{ backgroundColor: '#fff', minHeight: '80vh', padding: '1rem 0 3rem' }}>
      <div className="page-container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="image-card">
            <img src="/pogoy.jpg" alt="Vincent Anthony" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h1 className="page-title" style={{ margin: '0 0 10px' }}>SOCIAL MEDIA</h1>
            <p style={{ fontSize: '0.85rem', color: '#666', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
              Connect with me
            </p>
          </div>
          <CardDataSection />
        </div>
      </div>
    </main>
  );
}