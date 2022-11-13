import React from "react";
import styles from "./MealDescription.module.css";
import { useMealDesc } from "./useMealDesc";
import { MdDownloadForOffline } from "react-icons/md";

const MealDescList = () => {
  const currentMealData = useMealDesc();
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <h1 style={{ fontSize: "30px", padding: "10px" }}>
        {currentMealData.title}
      </h1>
      <div className={styles.singleMealBox}>
        <div className={styles.image}>
          <img src={currentMealData.img} alt="img-deal" />
        </div>
        <div className={styles.discountText}>
          <div className={styles.pricing}>
            <div className={styles.price}>
              <div>
                <p>Normal Price</p>
                <h1 style={{ fontSize: "2rem", fontWeight:"bold"}}>RM9.00</h1>
                <p>& Above</p>
              </div>
            </div>
            <div className={styles.percentDiscount}>
              <div>
                <p>kindMeal Discount</p>
                <h1 style={{ fontSize: "2rem", color: "green",fontWeight:"bold" }}>20% off</h1>
              </div>
            </div>
          </div>
          <div className={styles.coupon}>
            <div style={{ textAlign: "center" }}>
              <p>
                No pre-payment or booking needed. Get coupon & dine instantly!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "blue",
                  borderRadius: "10px",
                  color: "white",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "25px",
                  padding: "0.5rem",
                  lineHeight: "20px",
                }}
              >
                <div>
                  <MdDownloadForOffline />{" "}
                </div>
                <span>Get FREE Coupon</span>
              </div>
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
          <h1 style={{ fontSize: "2rem" }}>Delicious Details</h1>
          <br />
          <p>
            This place brings back memories to those days where we would have
            such delicious authentic meals for festive eats.
          </p>
          <br />
          <p>Select from ANY of our menu items, including the ones below:</p>
          <br />
          <h1>NOODLES</h1>
          <li> Cantonese Fried Song Mee </li>
          <li> Cantonese Fried Yin </li>
          <li> Cantonese Fried Mee </li>
          <li> Cantonese Fried Kuey </li>
          <li> Cantonese Fried Yee </li>
          <br />
          <h1>Fried Noodle (Dry)</h1>
          <li>Vege Meat Selection 素肉类</li>
          <li>Combination Sharks Fin Abalone 素拼盘鱼翅鲍鱼参类</li>
          <li>Vege Seafood Selection 素海鲜类</li>
          <li> Dried Fried Song Mee</li>
          <li>Fried Udon Noodle</li>
          <li>Black Pepper Udon</li>
          <li>Fried Mee Hoon</li>
          <li>Fried Kuey Teow</li>
          <li>Fried Mee Hoon Kuey Teow</li>
          <li>Fried Mee Hoon Tung Fun</li>
          <li>Fried Lao Shu Fun</li>
          <li>Fried Tung Fun</li>
          <li>Fragrance Fried Kuey Teow</li>
          <li>Singapore Fried Mee Hoon</li>
          <li>Salted Fish (V) Fried Mee Hoon</li>
          <br />
          <h1>Noodle with Gravy</h1>

          <li>Braised Yee Mee (Black Sauce)</li>
          <li>Braised Samg Mee (Black Sauce)</li>
          <li>Fried Kuey Teow (Black Sauce)</li>
          <li> Wanton Noodle</li>
          <br />
          <h1> Noodle in Claypot</h1>
          <li> Claypot Loh Shu Fun</li>
          <li> Claypot Yee Mee</li>
          <li> Claypot Sang Mee</li>
          <br />
          <h1>Noodle with Soup</h1>
          <li>Curry Wanton Noodle</li>
          <li> Curry Mee Hoon</li>
          <li> Bittergourd Soup Mee Hoon</li>
          <li>Tom Yam Soup Mee Hoon</li>
          <li>Fish Head Mee Hoon</li>
          <li>Ginger Egg Soup Mee Shua (Selected days only) </li>
          <br />
          <h1>RICE</h1>
          <h1>Claypot Soup with Rice</h1>
          <li>Herbal Soup with Rice (Bak Kut Teh)</li>
          <br />
          <h1>Fried Rice</h1>
          <li>Egg Fried Rice</li>
          <li>Pineapple Fried Rice</li>
          <li>Tom Yam Fried Rice</li>
          <li>Salted Fish (V) Fried Rice</li>
          <li> Belacan Fried Rice</li>
          <li>Ginger Egg Fried Rice</li>
          <br />
          <h1>Dishes with Rice</h1>
          <li>Sweet & Sour Chicken (V) with Rice</li>
          <li>Sweet Sour Ribs (V) Rice</li>

          <li>Belacan Chicken (V) Rice</li>

          <li>Kung Po Chicken (V) with Rice</li>

          <li>Salted Fish (V) & Lamb (V) Belly Rice</li>

          <li>Bittergourd & Fish (V) in Black Bean Sauce with Rice</li>

          <li>Bittergourd & Thick Beancurd Skin with Rice</li>

          <li>Mixed Vege Beancurd Rice</li>

          <li>Braised Mixed Vege Rice</li>
          <br />
          <br />
        </div>
        <div className={styles.location}>
          <h1 style={{ fontSize: "2rem" }}>Location</h1>
          <br />
          <p>
            No.2, Jalan Prima 8, Pusat Niaga Metro Prima, Metro Prima, 52100
            Kepong, Kuala Lumpur.
          </p>
          <p>Opens: Mon - Sun: 10.30 am - 10.30 pm</p>
          <p>Tel: +60 3-6250 6561</p>
          <a href="#" style={{ color: "blue", textDecoration: "underline" }}>
            View Details & Location Map »
          </a>

          <br />
          <br />
          <h1 style={{ fontSize: "2rem" }}>Terms & Conditions</h1>
        </div>
      </div>
      <div className={styles.reciepeContainer}>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4064-s.jpg"
            alt="img-1"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4065-s.jpg"
            alt="img-2"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4066-s.jpg"
            alt="img-3"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4067-s.jpg"
            alt="img-4"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4068-s.jpg"
            alt="img-5"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4069-s.jpg"
            alt="img-6"
          />
        </div>
        <div>
          <img
            src="https://www.kindmeal.my/photos/deal/6/657-4070-s.jpg"
            alt="img-7"
          />
        </div>
      </div>
    </div>
  );
};

export default MealDescList;
