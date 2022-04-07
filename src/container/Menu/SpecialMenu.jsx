import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const title = "Today’s Special";
  const subTitle = "Menu that fits you palatte";

  return (
    <>
      <section className=" section__padding menu__contener">
        <div className="menu__tilte">
          <SubHeading title={title} center={true} subTitle={subTitle} />
        </div>

        <div className="menu__img_content_wraper">
          {/* pizzzzzzzzzzzas */}
          <div
            className="menu__mobile_div"
            style={{ marginBlock: "2rem", marginBottom: "3rem" }}
          >
            <p className="menu__pizzas_title">Pizzas</p>

            {data.pizzas.map((pizza, index) => {
              return (
                <div className="menu__pizza_div">
                  <p className="item__title">{pizza.title}</p>
                  <span className="dash"></span>
                  <p className="item__price">{pizza.price}</p>
                </div>
              );
            })}
          </div>

          {/* image */}

          <div>
            <img className="menu__img" src={images.menu}></img>
          </div>

          {/* meals */}

          <div
            className="menu__mobile_div"
            style={{ marginBlock: "2rem", marginBottom: "3rem" }}
          >
            <p className="menu__meals_title"> Popular Meals</p>
            {data.meals.map((meal, index) => {
              return (
                <div key={meal.title + index} className="menu__meal_div">
                  <p className="item__title">{meal.title}</p>
                  <span className="dash"></span>
                  <p className="item__price">{meal.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default SpecialMenu;
