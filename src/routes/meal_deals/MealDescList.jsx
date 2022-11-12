import React from "react";
import styles from "./MealDescription.module.css";
import { useMealDesc } from "./useMealDesc";
import { MdDownloadForOffline } from "react-icons/md";

const MealDescList = () => {
  const currentMealData = useMealDesc();
  return (
    <div>
      <h1 style={{ fontSize: "30px", padding: "10px" }}>
        Cozy Oriental Dining
      </h1>
      <div className={styles.singleMealBox}>
        <div className={styles.image}>
          <img src={currentMealData.img} alt="img-deal" />
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
            <div style={{ textAlign: "center"}}>
              <p>
                No pre-payment or booking needed. Get coupon & dine instantly!
              </p>
              <button>
                <MdDownloadForOffline /> Get FREE Coupon
              </button>
              <p>
                Grab this KindMeal Coupon now to enjoy 20% off!{" "}
                <span>How it works</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionTextBox}>
        <div className={styles.details}>
          <h1>Delicious Details</h1>
          <p>
            This place brings back memories to those days where we would have
            such delicious authentic meals for festive eats.
          </p>
          <br />
          <p>Select from ANY of our menu items, including the ones below:</p>
          <li>Vege Meat Selection 素肉类</li>
          <li>Combination Sharks Fin Abalone 素拼盘鱼翅鲍鱼参类</li>
          <li>Vege Seafood Selection 素海鲜类</li>
        </div>
        <div className={styles.location}>
          <h1>Location</h1>
          <p>
            No.2, Jalan Prima 8, Pusat Niaga Metro Prima, Metro Prima, 52100
            Kepong, Kuala Lumpur.
          </p>
          <p>Opens: Mon - Sun: 10.30 am - 10.30 pm</p>
          <p>Tel: +60 3-6250 6561</p>
          <a href="#">View Details & Location Map »</a>
        </div>
      </div>
    </div>
  );
};

export default MealDescList;
