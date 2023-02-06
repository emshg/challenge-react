import './index.css';

export default function Info() {
  return (
  <div className='info-section'>
    <h1>
        Quiz: Do Your Parents Miss You or 
        Do They Just Feel Obligated to Talk to You?
    </h1>
    <figure>
        <img src='https://snworksceo.imgix.net/dpn-utb/e6f44799-1365-49ec-930a-61c7c2522cc0.sized-1000x1000.jpg?w=1000' alt='parents' className='main-img'></img>
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