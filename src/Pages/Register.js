import React from 'react'

function Register() {
  return (
    <div>
          <div id="reservation" className="py-4 bg-dark">
        <div>
          <h1 className="text-white text-heading">REGISTER</h1>
        </div>
        <div>
          <form className="py-3 text-white">
          
            <div className="d-flex px-5 mt-4">
              <div class="mb-3 w-50 me-5">
                <label class="form-label w-100 text-start ps-2" for="Name">
                  Name
                </label>
                <input type="text" class="form-control" id="Name" />
              </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="E-Mail">
                  E-Mail
                </label>
                <input type="text" class="form-control" id="E-Mail" />
              </div>
            </div>
            <div className="d-flex px-5 mt-4">
              <div class="mb-3 w-50 me-5">
                <label class="form-label w-100 text-start ps-2" for="Select">
                  Contact Number
                </label>
                <input type="text" class="form-control" id="Select" />
              </div>
              <div class="mb-3 w-50 me-5">
                <label class="form-label w-100 text-start ps-2" for="Name">
                  Enter Password
                </label>
                <input type="text" class="form-control" id="Name" />
              </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="Password">
                 Confirm Pasword
                </label>
                <input type="text" class="form-control" id="Password" />
              </div>
            </div>
            <button type="submit" class="btn btn-light w-25 mt-3">
              Submit
            </button>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Register