import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="footer_part">
          <div class="container">
            <div class="row justify-content-around">
              <div class="col-sm-6 col-lg-2">
                <div class="single_footer_part">
                  <h4>Top Products</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="">Managed Website</a>
                    </li>
                    <li>
                      <a href="">Manage Reputation</a>
                    </li>
                    <li>
                      <a href="">Power Tools</a>
                    </li>
                    <li>
                      <a href="">Marketing Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 col-lg-2">
                <div class="single_footer_part">
                  <h4>Quick Links</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="">Jobs</a>
                    </li>
                    <li>
                      <a href="">Brand Assets</a>
                    </li>
                    <li>
                      <a href="">Investor Relations</a>
                    </li>
                    <li>
                      <a href="">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
                           
              <div class="col-sm-6 col-lg-4">
                <div class="single_footer_part">
                  <h4>Newsletter</h4>
                  <p>Heaven fruitful doesn't over lesser in days. Appear creeping</p>
                  <div id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                      method="get"
                      class="subscribe_form relative mail_part"
                    >
                      <input
                        type="email"
                        name="email"
                        id="newsletter-form-email"
                        placeholder="Email Address"
                        class="placeholder hide-on-focus"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = ' Email Address '"
                      />
                      <button
                        type="submit"
                        name="submit"
                        id="newsletter-submit"
                        class="email_icon newsletter-submit button-contactForm"
                      >
                        subscribe
                      </button>
                      <div class="mt-10 info"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </footer>

        <script src="js/jquery-1.12.1.min.js"></script>

        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.magnific-popup.js"></script>
        <script src="js/swiper.min.js"></script>
        <script src="js/masonry.pkgd.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.nice-select.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/jquery.counterup.min.js"></script>
        <script src="js/waypoints.min.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>
        <script src="js/jquery.form.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="js/mail-script.js"></script>
        <script src="js/custom.js"></script>
    
    </>
  )
}

export default Footer