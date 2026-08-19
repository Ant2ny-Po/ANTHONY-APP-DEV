export function CardDataSection() {
  const socialLinks = [
    {
      id: 1,
      name: "INSTAGRAM",
      description: "@ant2nyv",
      url: "https://www.instagram.com/ant2nyv/"
    },
    {
      id: 2,
      name: "TIKTOK",
      description: "@benthongzz",
      url: "https://www.tiktok.com/@benthongzz"
    },
    {
      id: 3,
      name: "FACEBOOK",
      description: "Vincent Anthony Pogoy",
      url: "https://www.facebook.com/Ant2nyv"
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {socialLinks.map((social) => (
        <a 
          key={social.id} 
          href={social.url} 
          target="_blank" 
          rel="noreferrer" 
          style={{ 
            display: 'flex',  alignItems: 'center',  padding: '16px 20px',  borderRadius: '12px',  border: '1px solid #e0e0e0',  backgroundColor: '#fff',  textDecoration: 'none' 
          }}
        >
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.05em' }}>{social.name}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>{social.description}</div>
          </div>
        </a>
      ))}
    </div>
  );
}