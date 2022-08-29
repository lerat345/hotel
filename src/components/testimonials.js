import guest1 from '../images/guest1.webp';
import guest2 from '../images/guest2.webp';
import guest4 from '../images/guest4.webp';
function Testimonials() {
    return (
        <div style={{ backgroundColor: "whitesmoke" }}>

            <h1 className="happy1">HAPPY GUESTS</h1>
            <div className='happy2'>

                <div className='guestbox1'>
                    <div style={{display:"flex"}}>

                        <div>
                        <img src={guest1} className="guest1" />
                        </div>
                     <div>

                     <h1 className=''>Elisa Manchester</h1>
                        <div>
                            <h4 className=''>MARKETING MANAGER</h4>
                        </div>
                        
                           
                        
                     </div>


                    </div>
                    <p>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                </div>
                <div className='guestbox2'>
                    <div style={{display:"flex"}}>

                        <div>
                        <img src={guest2} className="guest2" />
                        </div>
                     <div>

                     <h1 className=''>Elisa Manchester</h1>
                        <div>
                            <h4 className=''>MARKETING MANAGER</h4>
                        </div>
                        
                           
                        
                     </div>


                    </div>
                    <p>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                </div>

                <div className='guestbox3'>
                    <div style={{display:"flex"}}>

                        <div>
                        <img src={guest4} className="guest3" />
                        </div>
                     <div>

                     <h1 className=''>Elisa Manchester</h1>
                        <div>
                            <h4 className=''>MARKETING MANAGER</h4>
                        </div>
                        
                           
                        
                     </div>


                    </div>
                    <p>Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia,<br></br> there live the blind texts.</p>
                </div>



                



            </div>

        </div>

    )
}
export default Testimonials;