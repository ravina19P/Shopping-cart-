import React from 'react';
import './PapularProduct.css'
import product1 from '../Images/product-1-1.jpg'
import product2 from '../Images/product-2-1.jpg'
import product3 from '../Images/product-3-1.jpg'
import product4 from '../Images/product-4-1.jpg'
import product5 from '../Images/product-5-1.jpg'
import product6 from '../Images/product-6-1.jpg'
import product7 from '../Images/product-7-1.jpg'
import product8 from '../Images/product-8-2.jpg'
import product9 from '../Images/product-9-1.jpg'
import product10 from '../Images/product-10-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const PapularProduct = () => {
  return (
    <div>
      <div className='PapularHeading'>
        <h3>Popular Products</h3>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{ color: '#3BB77E' }}>All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Milks & Dairies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Coffes & Teas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Pet Foods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Meats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Vegetables</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Fruits</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container_featured m-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
              <span className="product-label-hot">Hot</span>
              <img src={product1} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Snack</small></p>
                  <h2 className="card-title fs-6 fw-bold">Seeds of Change Organic Quinoa, Brown, & Red Rice</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
              <span className="product-label-sale">Sale</span>
              <img src={product2} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Hodo Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">All Natural Italian-Style Chicken Meatballs</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">Stouffer</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
              <span className="product-label-new">New</span>
              <img src={product3} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Snack</small></p>
                  <h2 className="card-title fs-6 fw-bold">Angie’s Boomchickapop Sweet & Salty Kettle Corn</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">StarKist</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
            <span className="product-label-labelvalue">labelvalue</span>
              <img src={product4} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Vegetables</small></p>
                  <h2 className="card-title fs-6 fw-bold">Foster Farms Takeout Crispy Classic Buffalo Wings</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
              <span className="product-label-best-sale">-14%</span>
              <img src={product5} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Pet Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">Blue Diamond Almonds Lightly Salted Vegetables</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
            <span className="product-label-labelvalue">labelvalue</span>
              <img src={product6} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Hodo Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">Chobani Complete Vanilla Greek Yogurt</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}> 
            <span className="product-label-labelvalue">labelvalue</span>            
              <img src={product7} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Hodo Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
            <span className="product-label-sale">Sale</span>
              <img src={product8} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Hodo Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">Encore Seafoods Stuffed Alaskan Salmon</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
            <span className="product-label-hot">Hot</span>
              <img src={product9} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Vegetables</small></p>
                  <h2 className="card-title fs-6 fw-bold">Foster Farms Takeout Crispy Classic Buffalo Wings</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card featured_card" style={{ width: '16rem', height: '32rem', borderRadius: '15px' }}>
            <span className="product-label-labelvalue">labelvalue</span>
              <img src={product10} />
              <div className="card-body">
                <div className='text-start'>
                  <p className="card-text"><small>Hodo Foods</small></p>
                  <h2 className="card-title fs-6 fw-bold">Haagen-Dazs Caramel Cone Ice Cream Ketchup</h2>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#c7a331', fontSize: '10px' }} />
                  <span className='ml-5 text-secondary'>(4.0)</span>
                  <div>
                    <span className="company">By <a href="#">NestFood</a></span>
                  </div>
                </div>
                <div className='Addblock mt-3'>
                  <p className="card-text">0,99 $ <span><del
                    className="text-secondary fs-6"><small>2200$</small></del></span></p>
                  <a href="#"><button type="button" className="custom_btn">
                    <span className="fw-medium"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3BB77E', fontSize: '16px', border: 'no-border' }} />Add</span></button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapularProduct;