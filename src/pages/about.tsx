import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-1 page-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh', padding: '1rem 0 3rem 0' }}>
        <div className="page-container">
        
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <div>
              <h1 className="page-title">
                ABOUT ME
              </h1>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                Hi! Vincent Anthony Pogoy, a 3rd-year Bachelor of Science in Information Technology (BSIT) student. I was born on September 8, 2005, and I'm 20 years old.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                In my free time, you'll usually find me playing online games or dancing. They help me recharge and enjoy life outside of school. I believe there's always something new to learn, and I'm always willing to improve myself.
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="image-card">
              <img 
                src="vincent.jpg" 
                alt="About ANTHONY" 
              />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
