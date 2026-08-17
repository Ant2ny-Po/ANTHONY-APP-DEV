export default function About() {
  return (
    <main className="flex-1 page-main bg-white min-h-[80vh] py-4 pb-12">
      <div className="page-container">
        
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="page-title">ABOUT ME</h1>
            <p className="text-[1rem] text-[#444] leading-[1.6] mb-4">
              Hi! Vincent Anthony Pogoy, a 3rd-year Bachelor of Science in Information Technology (BSIT) student. I was born on September 8, 2005, and I&apos;m 20 years old.
            </p>
            <p className="text-[0.95rem] text-[#666] leading-[1.6] m-0">
              In my free time, you&apos;ll usually find me playing online games or dancing. They help me recharge and enjoy life outside of school. I believe there&apos;s always something new to learn, and I&apos;m always willing to improve myself.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="image-card">
            <img src="/vincent.jpg" alt="About ANTHONY" />
          </div>
        </div>

      </div>
    </main>
  );
}