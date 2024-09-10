import React from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Resevation from "./Resevation";
import ContactPage from "./ContactPage";
import EditMenu from "./EditMenu.Js";
import OnlineOrder from "./OnlineOrder"
import { Link } from "react-router-dom";





function HomePage() {
  return (
    <div id="home" className="container-fluid border p-0 m-0">
      <div class="vh-100">
        {/* Section: Navigation */}
        <section id="navigation" className="h-15">
          <Navigation />
        </section>

        {/* Section: Home Page */}
        <div className="h-85 homepage m-0 p-0 w-100">
          <div className="bg-dark h-100 bg-opacity-75 d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3 text-warning">
              <h1 className="fw-regular mb-3 text-heading">ABC RESTAURANT</h1>
              <h3 className="fw-lighter">
                Elevate Your Dining Experience with Us. Taste Passion, Love
                Food. A Culinary Journey Awaits You.
              </h3>
            </div>
            <div className="d-flex w-50 justify-content-center mt-5">
              <div className="w-40 me-5">
              <Link to={'/login'}>
                <button className="btn btn-light w-100 py-2">Login</button>
                </Link>
              </div>
              <div className="w-40">
                <Link to={'/register'}>
                <button className="btn btn-outline-warning w-100 py-2">
                  Register
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: About */}
      <div id="about" className="bg-dark text-white p-5 d-flex flex-column align-items-center">
        <div className="">
          <h1 className="text-heading">ABOUT</h1>
        </div>
        <div className="lh-lg fs-5 w-75 mt-3 fw-lighter">
          Taking hospitality to the next level, ABC Restaurent Colombo is the
          destination for premium, personalized service in Sri Lanka. With an
          exquisite range of dining and entertainment experiences to choose from
          and world-class facilities, ABC Restaurent Colombo is the perfect
          venue for business and relaxation. ABC Restaurent Colombo is just a
          click away from delivering convenience to your door step; a piece of
          delight in every bite of our delectable selection of sweets and
          savouries by our talented chefs or The perfect gift in the prestige of
          an envelope to be delivered to your loved ones or book any ticket from
          the comfort of your home to be a part of exceptional events at our
          hotel… With the touch of a button, we can make it all happen!
        </div>
      </div>

      {/* Service */}
      <div id="service" className="d-flex flex-column align-items-center py-4 bg-dark">
        <div className="mb-3">
          <h1 className="text-white text-heading">SERVICES</h1>
        </div>
        <div className="row w-100">
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/reserved.png"
                  alt="table reservation"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Table Reservation</div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/Menu.png"
                  alt="table reservation"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Menu </div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/Online.png"
                  alt="table reservation"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Online Order</div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/locations.png"
                  alt="branch locator"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Branch Locator</div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/gallery.png"
                  alt="customer feedback"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Gallery </div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 py-4 d-flex justify-content-center">
            <div className="bg-white rounded-3 w-75 p-4">
              <div className="mb-4">
                <img
                  src="Images/feedback.png"
                  alt="table reservation"
                  className="w-25"
                />
              </div>
              <div>
                <div className="fs-4">Customer Feedback</div>
                <div className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div id="menu">
        <Menu/>
      </div>

      <div id="reservation" className="">
        <Resevation/>
      </div>

      <div id="contactpage">
        <ContactPage/>
      </div>

      <div id="OnlineOrder">
        <OnlineOrder/>
      </div>
      
      
      
    </div>
  );
}

export default HomePage;
