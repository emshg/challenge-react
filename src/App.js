import './App.css';
import NavbarLinks from './NavbarLinks';
import Info from './Info';
import QuizUnit from './QuizUnit';
import MobileNav from './MobileNav';
import Footer from './Footer';

function App() {
  return (
    <div className='outer'>
      <div className="App">
        <header className="App-header">
          <nav className='navbar'>
            <img src="https://d1udg35vyt7lx2.cloudfront.net/b8bf38217e1439a0a2d96c5b1cbe8f0a/dist/img/button.svg" className="button-logo" alt="logo" />
            <div className='navbar-title'>
              under the&nbsp;<span style={{
                fontWeight: 700,
                color: '#446cb3'
              }}>button</span>
            </div>
            <MobileNav />
            <div>
              <span className='navbar-subtitle'>Penn's Only Intentionally Satirical Publication</span>
            </div>
            <div>
              <NavbarLinks />
            </div>
          </nav>
        </header>
        <div className='main'>
          <Info />
          <QuizUnit />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
