import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Home1 from '../../assets/corousel/porject1/home.png'
import Allproduct from '../../assets/corousel/porject1/allproducts.png'
import Cart from '../../assets/corousel/porject1/cart.png'
import Contact from '../../assets/corousel/porject1/contact.png'
import Productdetail from '../../assets/corousel/porject1/product-detail.png'
import wishlist from '../../assets/corousel/porject1/profile-wishlist.png'

import './index.css'

let imgs=[ Home1,Allproduct,Cart,Contact,Productdetail,wishlist]

function Projectcorousel() {
  return (
    <Carousel indicators={false} interval={1500} className='corousel-container' fade>
     {
        imgs.map((each)=>( <Carousel.Item>
            <img className='corosla-img' src={each}/>
 
          </Carousel.Item>))
     }
    </Carousel>
  );
}

export default Projectcorousel;