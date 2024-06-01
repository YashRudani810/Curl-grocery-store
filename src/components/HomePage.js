import React from 'react'
import Header from './Header'
import Footer from './Footer'

const HomePage = () => {
  return (
   <>
     <body>
        <Header/>

       
        <section class="feature_part padding_top">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section_tittle text-center">
                  <h2>Featured Category</h2>
                </div>
              </div>
            </div>
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-7 col-sm-6">
                <div class="single_feature_post_text">
                  <p>Premium Quality</p>
                  <h3>Latest foam Sofa</h3>
                  <a href="#" class="feature_btn">
                    EXPLORE NOW <i class="fas fa-play"></i>
                  </a>
                  <img src="img/feature/feature_1.png" alt="" />
                </div>
              </div>
              <div class="col-lg-5 col-sm-6">
                <div class="single_feature_post_text">
                  <p>Premium Quality</p>
                  <h3>Latest foam Sofa</h3>
                  <a href="#" class="feature_btn">
                    EXPLORE NOW <i class="fas fa-play"></i>
                  </a>
                  <img src="img/feature/feature_2.png" alt="" />
                </div>
              </div>
              <div class="col-lg-5 col-sm-6">
                <div class="single_feature_post_text">
                  <p>Premium Quality</p>
                  <h3>Latest foam Sofa</h3>
                  <a href="#" class="feature_btn">
                    EXPLORE NOW <i class="fas fa-play"></i>
                  </a>
                  <img src="img/feature/feature_3.png" alt="" />
                </div>
              </div>
              <div class="col-lg-7 col-sm-6">
                <div class="single_feature_post_text">
                  <p>Premium Quality</p>
                  <h3>Latest foam Sofa</h3>
                  <a href="#" class="feature_btn">
                    EXPLORE NOW <i class="fas fa-play"></i>
                  </a>
                  <img src="img/feature/feature_4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section class="our_offer section_padding">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6 col-md-6">
                <div class="offer_img">
                  <img src="img/offer_img.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="offer_text">
                  <h2>Weekly Sale on 60% Off All Products</h2>
                  <div class="date_countdown">
                    <div id="timer">
                      <div id="days" class="date"></div>
                      <div id="hours" class="date"></div>
                      <div id="minutes" class="date"></div>
                      <div id="seconds" class="date"></div>
                    </div>
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter email address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <a href="#" class="input-group-text btn_2" id="basic-addon2">
                        book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        <section class="subscribe_area section_padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="subscribe_area_text text-center">
                  <h5>Join Our Newsletter</h5>
                  <h2>Subscribe to get Updated with new offers</h2>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter email address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <a href="#" class="input-group-text btn_2" id="basic-addon2">
                        subscribe now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="client_logo padding_top">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_1.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_2.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_3.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_4.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_5.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_3.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_1.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_2.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_3.png" alt="" />
                </div>
                <div class="single_client_logo">
                  <img src="img/client_logo/client_logo_4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer/>
      </body>
   </>
  )
}

export default HomePage