import './index.css';

export default function MobileNav() {
    const handleOpen = (e) =>{
        const navbar=document.getElementById("navbar-mobile");
        if(!navbar.classList.contains("open")){
          document.getElementById("navbar-mobile").classList.add("open");
        } else{
          document.getElementById("navbar-mobile").classList.remove("open");
        }
      }
  return (
    <div>
    <button type="button" className="navbar-toggle" onClick={handleOpen}>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-mobile">
    <ul className="nav navbar-nav">
      <li><a href="https://www.underthebutton.com/section/news">News</a></li>
      <li><a href="https://www.underthebutton.com/section/opinion">Opinion</a></li>
      <li><a href="https://www.underthebutton.com/section/print">In Print</a></li>
      <li><a href="https://www.underthebutton.com/section/video">Video</a></li>
      <li><a href="//projects.underthebutton.com">Projects</a></li>
      <li><a href="https://www.underthebutton.com/page/about">About</a></li>
      <li><a href="https://thedp.us2.list-manage.com/subscribe?u=a96885e3aa3f8131c872ee329&amp;id=370b4800ba" style={{color: '#466fb1'}}>NEWSLETTERS</a></li>
    </ul>
  </div>
  </div>
  );
}