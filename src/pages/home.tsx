import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 page-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh', padding: '2rem 2rem' }}>
        <div className="page-container" style={{ maxWidth: '1400px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="image-card" style={{ height: '500px' }}>
              <img 
                src="/anthony.jpg" 
                alt="Anthony" 
              />
            </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', minHeight: '450px' }}>
            
            <div style={{ margin: '40px 0' }}>
              <h1 className="page-title" style={{ fontSize: '4rem', lineHeight: '1.1', margin: 0 }}>
                VINCENT ANTHONY <br />
                <span style={{ fontWeight: 700 }}>POGOY</span>
              </h1>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', color: '#666', marginTop: '16px', textTransform: 'uppercase', lineHeight: '1.6' }}>
                Welcome to my portfolio! Thanks for stopping by. I hope you enjoy exploring my work and getting to know me a little better.
              </p>

    
              <div style={{ marginTop: '28px' }}>
                <a 
                  href="/about" 
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  About Me
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
