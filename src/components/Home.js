import React from "react";
import "./App.css"
import image1 from "./images1/image1.png";
import image2 from "./images1/image2.png";
import addressmark from "./images1/addressmark.png"
import Smarthouse from "./images1/Smarthouse.png"
import fingerprint from "./images1/securedataprotectionwithfingerprintandlock.png"

function Home() {
  return (
    <div>
      <div className="container">
       
        <div className="container2">
          <div className="container2cont">
            <div className="container2contents">
              <div className="Helping-you">
                <h1>
                  Helping you find the <br /> property of your <br /> dreams.
                  <p />
                </h1>
              </div>
              <div className="creating-quality">
                <p>
                  Creating quality urban lifestyles,building <br /> stronger
                  communities
                </p>
              </div>
              <div className="btns">
                <div className="learnmore">
                  <button>Learn More</button>
                  <div className="playbutton">
                    <i className="fa fa-play-circle" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container2image">
              <img src={image1} alt="container2image" />
            </div>
          </div>
        </div>
       <br /> <br />
        <h2 style={{ color: "#0f298b", fontSize: "32px" }}>Our Products</h2>
        <div className="howitworks">
          <h2>How it works.</h2>
          <p>This is how our products works</p>
        </div>
        <div className="container4">
          <div className="locationicon">
            <img src={addressmark} alt="locationicon" />
            <h4>Find Home</h4>
            <p>
              Our properties are locted at prime areas where by there won't be
              problem with transportation
            </p>
          </div>
          <div className="payments">
            <img src={Smarthouse} alt="make payments" />
            <h4>Make payments</h4>
            <p>
              Our estates comes with good network,portable water,24hrs light and
              round the clock security.
            </p>
          </div>
          <div className="padlock">
            <img
              src={fingerprint}
              alt="padlock"
            />
            <h4>Make it Official</h4>
            <p>
              We have been in business for over 32 years,for client outside the
              country you can trust us to deliver well.
            </p>
          </div>
        </div>
        <div className="container5">
          <div className="container5image">
            <img src={image2} alt="container house" />
          </div>
          <div className="chooseus">
            <h2>Why you should choose us.</h2>
            <p>Creating quality urban lifestyles,building strong communities</p>
            <div className="checkbox1">
              <p>
                <span>
                  {/* <img src="img/check.png" /> */}
                  <strong> World class</strong>
                </span>
              </p>
              <p>
                <span>
                  {/* <img src="img/check.png" /> */}
                  <strong> Trusted</strong>
                </span>
              </p>
            </div>
            <div className="checkbox2">
              <p>
                <span>
                  {/* <img src="img/check.png" /> */}
                  <strong> Affordable</strong>
                </span>
              </p>
              <p>
                <span>
                  {/* <img src="img/check.png" /> */}
                  <strong> Amenities</strong>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="esteemed">
          <h2>Our Esteemed Customers</h2>
          <p>This is what our client are saying</p>
        </div>
        <div className="container7">
          <div className="esteemedcustomers">
            <h4>Alex Godwin</h4>
            <h4>South Africa</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              commodi deleniti nulla fuga dolorum doloremque magni voluptates
              earum amet voluptas, incidunt expedita sequi, aperiam veniam.
              Rerum sed in non consectetur?
            </p>
          </div>
          <div className="esteemedcustomers">
            <h4>Alex Godwin</h4>
            <h4>South Africa</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              commodi deleniti nulla fuga dolorum doloremque magni voluptates
              earum amet voluptas, incidunt expedita sequi, aperiam veniam.
              Rerum sed in non consectetur?
            </p>
          </div>
          <div className="esteemedcustomers">
            <h4>Alex Godwin</h4>
            <h4>South Africa</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              commodi deleniti nulla fuga dolorum doloremque magni voluptates
              earum amet voluptas, incidunt expedita sequi, aperiam veniam.
              Rerum sed in non consectetur?
            </p>
          </div>
        </div>
        <div className="viewmoreesteemed">
          <button>View more</button>
        </div>
      </div>
      <footer>
        <div className="mainfootercontainer">
          <div className="innerfooter">
            <div className="vallieestate">
              <h3>Zen House Listings</h3>
              <p>
                Solution for easy and flexible <br /> house hunting.You can
                trust us <br /> anywhere through this
                <br /> platform
              </p>
            </div>
            <div className="footerproperty">
              <h3>Property</h3>
              <ul>
                <li>Learning Modules</li>
                <li>Partnership</li>
                <li>Watch demo</li>
                <li>Event</li>
              </ul>
            </div>
            <div className="footerabout">
              <h3>About</h3>
              <ul>
                <li>Our Company</li>
                <li>Career</li>
                <li>Investor Relations</li>
                <li>Social Impact</li>
              </ul>
            </div>
            <div className="footerresources">
              <h3>Resources</h3>
              <ul>
                <li>Contact</li>
                <li>Give feedback</li>
                <li>System status</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
