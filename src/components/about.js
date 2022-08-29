import Card from 'react-bootstrap/Card';
import Menupage from '../images/hotel.jpg';



import Accordion from 'react-bootstrap/Accordion';
import hotelpics1 from "../images/hotelpics1.webp";
import hotelpics2 from '../images/hotelpics2.webp'
import hotelpics3 from '../images/hotelpics3.jfif';
import Container from 'react-bootstrap/Container'
import wifi from '../images/wifi.png';
import service from'../images/service.png';
import swimmingpool from'../images/swimming pool.png';
import food2 from'../images/food2.webp';
import food1 from'../images/food1.webp';
import food3 from'../images/food3.webp';
import food4 from'../images/food4.webp';
import food5 from'../images/food5.jpg';
import food6 from'../images/food6.jpg';
import food7 from'../images/food7.webp';
import food8 from'../images/food8.webp';
import food9 from'../images/food9.jpg';
import { Button } from 'react-bootstrap';




function HotelDetails() {
    return (
        <div>

            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{backgroundColor:'#F5F5F5'}}>ABOUT</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" >
                    <Accordion.Header style={{backgroundColor:'#F5F5F5'}}>MAP</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion  >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>RESTAURANT</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>SPA</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br></br><br></br>
            <h1 className='room1'>OUR ROOMS</h1>
            <div  style={{backgroundColor:"#D9D9D9"}}>

                <Container className='rooms'>
                    <div className='box1' style={{'width' : '500px', 'height' : '394px'}} >
                    <h1 className='head1'>suit room</h1>
                        <p className='para1'>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                        <div className='img1'>
                        <img src={wifi}></img>
                        <img src={service}></img>
                        <img src={swimmingpool}></img>
                        </div>
                        <div style={{color:"#C0AF72"}}className='price1'> $450 / NIGHT </div>
                        
                    </div>
                    
                    <div className='room2'>
                        <img src={hotelpics2} style={{'width' : '400px', 'height' : '400px'}} />
                    </div>
                    <div className='box2' style={{'width' : '400px', 'height' : '378px'}} > 
                    
                    <div  style={{backgroundColor:"white"}}>
                       
                        </div> 
                        <div className='head2'>
                        <h1>family room</h1>
                        <p className='para2'>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                        <div className='img2'>
                        <img src={wifi}></img>
                        <img src={service}></img>
                        <img src={swimmingpool}></img>
                        </div>
                        <div style={{color:"#C0AF72"}}className='price1'> $450 / NIGHT </div>
                        </div>
                       
                    </div>
                
                </Container>
                

                <Container className='rooms1'>
                  <div className='box3' style={{'width' : '400px', 'height' : '400px'}} >
                    <img src={hotelpics3} style={{'width' : '500px', 'height' : '400px'}} className='hotelpic'/>
                    </div>
                    
                    <div className='room2'>
                        <div  style={{backgroundColor:"white"}}>
                    <h1 className='head3'>deluxe room</h1>
                        <p className='para3'>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                        <div className='img2'>
                        <img src={wifi}></img>
                        <img src={service}></img>
                        <img src={swimmingpool}></img>
                        </div>
                        <div style={{color:"#C0AF72"}}className='price1'> $450 / NIGHT </div>
                    </div>
                    <div className='box4' style={{'width' : '500px', 'height' : '400px'}} >
                    <img src={hotelpics1} style={{'width' : '500px', 'height' : '400px'}} className='hotelpic2'/>
                    </div>
                    </div>
                
                    
                  
                    
                </Container>
                

            </div>

            <br></br><br></br>
            <h1 className='restaurant'>OUR RESTAURANT</h1>
            <div className='menu-box'>
                <div>
                    <img src='hotel.jpg'/>
                    
                </div>
              <div  style={{marginLeft:"3%"}}>
                <h4>grilled potatoes  $20.00</h4>
                <br></br>
                <div className='list'>
                <img src={food1}/>

              
                
                </div>

                <div>
                <h4>grilled potatoes $20.00</h4>
                <div className='listbox'>
                    <img src={food2}/>
                </div>
                </div>

                <div>
                <h4>grilled potatoes $20.00</h4>
                <div className='listtable'>
                    <img src={food3}/>

                </div>
               
                </div>
                
               

               
            </div>

            <div  style={{marginLeft:"15%"}}>
                <h4>grilled potatoes  $20.00</h4>
                <br></br>
                <div className='list'>
                <img src={food1}/>
                </div>

                <div>
                <h4>grilled potatoes $20.00</h4>
                <div className='listbox'>
                    <img src={food2}/>
                </div>
                </div>

                <div>
                <h4>grilled potatoes $20.00</h4>
                <div className='listtable2'>
                    <img src={food3}/>

                </div>
               
                </div>
                
               

               
            </div>
            </div>
            
            
           
            
            
          

</div>


    )
    
}



export default HotelDetails;