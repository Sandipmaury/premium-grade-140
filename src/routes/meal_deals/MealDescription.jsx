import React from "react";
import styles from "./MealDescription.module.css";
import styled from "styled-components";
import { ImTwitter } from "react-icons/im";
const MealDescription = () => {
  return (
    <>
      <MealDealsDescription>
        <HeadSectionWraper>
          <img
            src="https://www.kindmeal.my/photos/shop/5/591-c.jpg"
            alt="head-1"
            width="100%"
          />
        </HeadSectionWraper>
        <div className={styles.restaurentName}>
          <h2>Ring Zhi Vegetarian Restaurant 灵芝素食饭店</h2>
        </div>
      </MealDealsDescription>

      <div className={styles.mainTab}>
        <div className={styles.menuTab}>
          <div className={styles.tabs}>
            <img
              src="https://www.kindmeal.my/photos/shop/3/392-2513-m.jpg"
              alt="tab-img"
              width="180px"
            />
            <button>Overview</button>
            <button>Meal Deals</button>
            <button>Food Menu</button>
            <button>Location</button>
          </div>
          <div className={styles.socials}>
            <div className={styles.twiter}>
              <ImTwitter />
              <button>Twiter</button>
            </div>
            <button className={styles.share}>Share</button>
            <div className={styles.like}>
              <button>Like</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <DealsMainContainer>
        <h1>Cozy Oriental Dining</h1>
        <div className={styles.singleMealBox}>
          <div className={styles.image}>
            <img src="https://www.kindmeal.my/photos/deal/5/506-2350-m.jpg" alt="img-deal" />
          </div>
          <div className={styles.discountText}>
            <div className={styles.pricing}>
              <div className={styles.price}>
                <p>Normal Price</p>
                <h1>RM9.00</h1>
                <p>& Above</p>
              </div>
              <div className={styles.percentDiscount}>
                <p>kindMeal Discount</p>
                <h1>20% off</h1>
              </div>
            </div>
            <div className={styles.coupon}>
              <p>No pre-payment or booking needed. Get coupon & dine instantly!</p>
              <button>Get FREE Coupon</button>
              <p>Grab this KindMeal Coupon now to enjoy 20% off!   <span>How it works</span></p>
            </div>
          </div>
        </div>
        <div className={styles.descriptionTextBox}>
          <div className={styles.details}>
            <h1>Delicious Details</h1>
            <p>This place brings back memories to those days where we would have such delicious authentic meals for festive eats.</p>
            <br />
            <p>Select from ANY of our menu items, including the ones below:</p>
            <li>Vege Meat Selection 素肉类</li>
            <li>Combination Sharks Fin Abalone 素拼盘鱼翅鲍鱼参类</li>
            <li>Vege Seafood Selection 素海鲜类</li>
          </div>
          <div className={styles.location}>
            <h1>Location</h1>
            <p>No.2, Jalan Prima 8, Pusat Niaga Metro Prima, Metro Prima, 52100 Kepong, Kuala Lumpur.</p>
            <p>Opens: Mon - Sun: 10.30 am - 10.30 pm</p>
            <p>Tel: +60 3-6250 6561</p>
            <a href="#">View Details & Location Map »</a>
          </div>
        </div>
      </DealsMainContainer>
    </>
  );
};

const MealDealsDescription = styled.div`
  position: relative;
`;

const HeadSectionWraper = styled.div`
  width: 100%;
`;
const DealsMainContainer = styled.div`
  width: 80%;
  margin: 8rem auto;
  background-color: rgb(180, 176, 176);
  text-align: center;
  height: auto;
`;
export default MealDescription;
