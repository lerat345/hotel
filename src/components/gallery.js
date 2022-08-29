import bikes from '../images/bikes.jpg';
import winery from '../images/winery.jpg';
import shopping from '../images/shopping.jpg';
import golf from '../images/golf.jpg';
import hiking from '../images/hiking.jpg';
import artgallery from '../images/artgallery.jpg';

function Gallery() {
  return (
<div>
<h1 className="head1">THINGS TO DO</h1>
    <div style={{ backgroundColor: "gray", marginTop: "5%", width: "130%" }}>
      

      <div className='picsbox2'>

        <div style={{ marginbottom: "15%", width: "30%" }}>

          <img src={winery} className='image1'></img>
        </div>

        


       

          <div className='image3'>
            <div style={{ marginbottom: "15%", width: "100%" }}>
              <img src={bikes} className='image2'></img>
            </div>
          </div>

    
      

          <div className='image4' style={{ marginbottom: "15%", width: "100%"}}>
            <div style={{ width: "30%", height: "30%" }}>
              <img src={shopping} className='image3'></img>
            </div>
          </div>

        



      </div>
      


      <div className='picsbox3'>

        <div className='image6' style={{  marginbottom: "15%", width: "100%"}}>
          <div style={{ marginbottom: "15%", width: "30%", height: "30%" }}>
          <img src={golf} className='image4'></img>
          </div>

        </div>
        <div className=''>

          <div className='image6' style={{ marginbottom: "15%", width: "100%"}}>
            <div style={{ marginbottom: "15%", width: "30%", height: "30%"}}>
            <img src={hiking} className='image5'></img>
            </div>

          </div>

        </div>
        <div className=''>

          <div className='image6' style={{ width: "100%", height: "70%"}}>
            <div style={{ marginbottom: "15%",width:"30%",  height: "30%"}}>
            <img src={artgallery}  className='image6'></img>
            </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    



















  )

}
export default Gallery