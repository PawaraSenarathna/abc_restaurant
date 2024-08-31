import React from "react";

function Resevation() {
  return (
    <div>
      <div id="reservation" className="py-4 bg-dark">
        <div>
          <h1 className="text-white text-heading">RESERVATION</h1>
        </div>
        <div>
          <form className="py-3 text-white">
          <div class="mb-2 w-50 me-5">
                <label class="form-label w-100 text-start ps-3" for="pax">
                  Name
                </label>
                <input type="text" class="form-control" id="pax" />
              </div>
            <div className="d-flex px-5">
              <div class="mb-3 w-50 me-5">
                <label for="branch" class="form-label w-100 text-start ps-2">
                  Branch
                </label>
                <select class="form-select" aria-label="">
                  <option selected>Select branch</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Galle">Galle</option>
                  <option value="Kandy">Kandy</option>
                </select>
              </div>
              <div class="mb-3 w-50">
                <label for="time" class="form-label w-100 text-start ps-2">
                  Time
                </label>
                <input type="datetime-local" class="form-control" id="time" />
              </div>
            </div>
            <div className="d-flex px-5 mt-4">
              <div class="mb-3 w-50 me-5">
                <label class="form-label w-100 text-start ps-2" for="pax">
                  Pax
                </label>
                <input type="text" class="form-control" id="pax" />
              </div>
              <div class="mb-3 w-50">
                <label class="form-label w-100 text-start ps-2" for="phone">
                  Contact Number
                </label>
                <input type="text" class="form-control" id="phone" />
              </div>
            </div>
            <button type="submit" class="btn btn-light w-25 mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resevation;
