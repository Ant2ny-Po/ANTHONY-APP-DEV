export default function Header() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '32px',
      alignItems: 'center',
      fontSize: '0.9rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px 0'
    }}>
      <a href="/" style={{ color: '#1a1a1a', textDecoration: 'none' }}>HOME</a>
      <a href="/about" style={{ color: '#666', textDecoration: 'none' }}>ABOUT</a>
      <a href="/hobbies" style={{ color: '#666', textDecoration: 'none' }}>SOCIAL MEDIA</a>
    </nav>
  );
}