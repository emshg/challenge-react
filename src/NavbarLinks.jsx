import './index.css';

export default function Navbar() {
  return (
  <div className='navbar-links'>
    <a href="/">News</a>
    <a href="/">Opinion</a>
    <a href="/">In Print</a>
    <a href="/">Video</a>
    <a href="/">Projects</a>
    <a href="/">About</a>
    <a href="/" style={{color:'white', 
    backgroundColor:'#466fb1',
    borderRadius:'4px',
    padding: '0 1rem'}}>Newsletters</a>
    
  </div>
  );
}