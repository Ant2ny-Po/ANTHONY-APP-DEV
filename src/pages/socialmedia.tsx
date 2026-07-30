import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function SocialMedia() {
  const socialCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    backgroundColor: '#ffffff',
    textDecoration: 'none'
  };

  return (
    <>
      <Header />
      <main className="flex-1 page-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh', padding: '1rem 0 3rem 0' }}>
        <div className="page-container">
          
          {/* Left Side: Square Image Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="image-card">
              <img src="pogoy.jpg" alt="Vincent Anthony" />
            </div>
          </div>

          {/* Right Side: Social Media Links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <div>
              <h1 className="page-title" style={{ margin: '0 0 10px 0' }}>SOCIAL MEDIA</h1>
              <p style={{ fontSize: '0.85rem', color: '#666', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                Connect with me online
              </p>
            </div>

            {/* Social List Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
              
              <a href="https://www.instagram.com/ant2nyv/" target="_blank" rel="noreferrer" style={socialCardStyle}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.05em' }}>INSTAGRAM</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>@ant2nyv</div>
                </div>
              </a>

              <a href="https://www.tiktok.com/@benthongzz" target="_blank" rel="noreferrer" style={socialCardStyle}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.05em' }}>TIKTOK</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>@benthongzz</div>
                </div>
              </a>

              <a href="https://www.facebook.com/Ant2nyv" target="_blank" rel="noreferrer" style={socialCardStyle}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.05em' }}>FACEBOOK</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>Vincent Anthony Pogoy</div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}