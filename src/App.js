import logo from './button.svg';
import './App.css';
import NavbarLinks from './NavbarLinks';
import Main from './Main';
import QuizUnit from './QuizUnit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='navbar'>
        <img src={logo} className="button-logo" alt="logo" />
        <div className='navbar-title'>
          under the&nbsp;<span style={{fontWeight:700,
    color: '#446cb3'}}>button</span>
        </div>
        <div>
            <span className='navbar-subtitle'>Penn's Only Intentionally Satirical Publication</span>
            </div>
            <div>
            <NavbarLinks/>
      </div>
        </nav>
      </header>
      <div className='main'>
        <Main/>
        <QuizUnit/>
      </div>
    </div>
    
  );
}

export default App;
