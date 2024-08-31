import React from 'react'
import Navigation from './Navigation'

function Login() {
  return (
    <div>
        {/* Section: Navigation */}
        <section id="navigation" className="h-15">
          <Navigation />
        </section>
        <div id="reservation" className="py-4 bg-dark">
        <div>
          <h1 className="text-white text-heading">LOGIN</h1>
        </div>
        <div>
          <form className="py-3 text-white">
            
            <div className="d-flex px-5 mt-4">
              <div class="mb-3 w-50 me-5">
                <label class="form-label w-100 text-start ps-2" for="pax">
                  User Name
                </label>
                <input type="text" class="form-control" id="pax" />
              </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="phone">
                  Password
                </label>
                <input type="text" class="form-control" id="phone" />
              </div>
            </div>
            <button type="submit" class="btn btn-light w-25 mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/drink.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
        <div className="d-flax justify-contect-midille">
          <img
            src="Images/cheff.png"
            alt="menu 1"
            className="object-fit-cover w-30"
          />
        </div>
      </div>
    </div>
  )
}

export default Login