import './index.css';
import parents from './figure.jpg';

export default function Main() {
  return (
  <div className='info-section'>
    <h1>
        Quiz: Do Your Parents Miss You or 
        Do They Just Feel Obligated to Talk to You?
    </h1>
    <figure>
        <img src={parents} alt='parents' className='main-img'></img>
    </figure>
    <figcaption>
        <p>
            Photo by SteFou! / CC BY 2.0
        </p>
    </figcaption>
    <div className='info'>
        <p className='authors'>
            By <a href='/' className='author-name'>Josh Campbell</a>
        </p>
        <p className="publish-time">
            January 30, 2020 at 12:00 am
        </p>
    </div>
  </div>
  );
}