import React from "react";

function Menu() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-heading">MENU</h1>
      </div>

      {/* Fresh Juice Section */}
      <div className="mb-3 fs-5">Fresh Juice</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Orange Juice</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Mixed Fruit Juice</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>Mango Juice</td>
              <td>950</td>
            </tr>
            <tr>
              <td>Pineapple Juice</td>
              <td>750</td>
            </tr>
            <tr>
              <td>Lime Soda</td>
              <td>800</td>
            </tr>
            <tr>
              <td>Home made Ginger Beer</td>
              <td>850</td>
            </tr>
            <tr>
              <td>Lime Juice</td>
              <td>750</td>
            </tr>
            <tr>
              <td>Passion Mint</td>
              <td>850</td>
            </tr>
            <tr>
              <td>Papaya Juice</td>
              <td>950</td>
            </tr>
            <tr>
              <td>King Coconut Lime</td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/drink.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>

      {/* Soup Section */}
      <div className="mb-3 fs-5">Soup</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Vegetable Soup</td>
              <td>850</td>
            </tr>
            <tr>
              <td>Sweet Corn Chicken Soup</td>
              <td>950</td>
            </tr>
            <tr>
              <td>Roasted Fish Soup</td>
              <td>1050</td>
            </tr>
            <tr>
              <td>Mulligatawny Soup</td>
              <td>1150</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/soup1.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>

      {/* Fried Rice Section */}
      <div className="mb-3 fs-5">Fried Rice</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Fried Rice - Chicken</td>
              <td>1900</td>
            </tr>
            <tr>
              <td>Fried Rice - Fish</td>
              <td>1900</td>
            </tr>
            <tr>
              <td>Fried Rice - Prawn</td>
              <td>2900</td>
            </tr>
            <tr>
              <td>Fried Rice - Mutton</td>
              <td>2700</td>
            </tr>
            <tr>
              <td>Fried Rice - Veg</td>
              <td>1100</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/rice.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>

      {/* Biriyani Section */}
      <div className="mb-3 fs-5">Biriyani</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Chicken Biriyani</td>
              <td>2300</td>
            </tr>
            <tr>
              <td>Prawn Biriyani</td>
              <td>2400</td>
            </tr>
            <tr>
              <td>Seafood Biriyani</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>Mutton Biriyani</td>
              <td>2300</td>
            </tr>
            <tr>
              <td>Veg Biriyani</td>
              <td>1800</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/biriyani.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>

      {/* Kottu Section */}
      <div className="mb-3 fs-5">Kottu</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Chicken Kottu</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Prawn Kottu</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Seafood Kottu</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Mutton Kottu</td>
              <td>1900</td>
            </tr>
            <tr>
              <td>Veg Kottu</td>
              <td>1300</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/kottu.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>

      {/* Dessert Section */}
      <div className="mb-3 fs-5">Dessert</div>
      <div className="d-flex px-5">
        <table className="table table-striped w-75 me-5">
          <tbody>
            <tr>
              <td>Ice Cream</td>
              <td>750</td>
            </tr>
            <tr>
              <td>Fruit Salad with Ice Cream</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Watalappam</td>
              <td>1150</td>
            </tr>
            <tr>
              <td>Curd and Treacle</td>
              <td>650</td>
            </tr>
            <tr>
              <td>Hopper Mousse</td>
              <td>800</td>
            </tr>
          </tbody>
        </table>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img
            src="Images/food.png"
            alt="menu 1"
            className="object-fit-cover w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
