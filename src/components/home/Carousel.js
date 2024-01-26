import carousel1 from '../../assets/carousel-1.png';
import carousel2 from '../../assets/carousel-2.png';
import carousel3 from '../../assets/carousel-3.png';
const Carousel =()=>{
    return (     
        
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1}   className="d-block w-100 h-60" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Login Screen</h5>
        <p>SBSA Rent cars desktop application login screen.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel2}   className="d-block w-100 h-60" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Loading Screen</h5>
        <p>SBSA Rent cars desktop application home screen..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel3}   className="d-block w-100 h-60" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Home Screen</h5>
        <p>SBSA Rent cars desktop application home screen.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
);
}
export default Carousel;