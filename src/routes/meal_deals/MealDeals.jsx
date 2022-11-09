import React from "react";
import styled from "styled-components";
import styles from "./MealDeals.module.css";
import MealList from "./MealList";
const MealDeals = () => {
  return (
    <MealDealsWraper>
      <div className={styles.head_section}>
        <div className={styles.head_text}>
          <h1>Meat-Free Deals | Restaurants In Malaysia</h1>
          <p>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </p>
          <br />
          <p>
            Download our mobile app now to easily get coupons and start dining
            in a few seconds. Effortlessly save lives, health, environment and
            money now!
          </p>
        </div>
        <br />
        <div className={styles.searching_div}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search Shop or Deal Name"
          />
          <select name="category" id="" className={styles.all_categories}>
            <option value="">All Categories</option>
            <option value="pasta">Pasta</option>
            <option value="burger">Burger</option>
            <option value="breakfast">Break Fast</option>
            <option value="salad">Salad</option>
            <option value="bekary">Bekary</option>
            <option value="hightea">Tea & dessert</option>
            <option value="local">Local Delights</option>
            <option value="japkorean">Jap & Korean</option>
            <option value="chinese">Chainese</option>
            <option value="indian">Indian</option>
            <option value="soup">Soup</option>
            <option value="cute">Cute</option>
          </select>

          <select
            name="searchLocation"
            id="searchLocation"
            className={styles.all_location}
          >
            <option value="0">All Locations</option>
            <option value="">Klang Valley</option>
            <option value="60">&bull;&nbsp; Kuala Lumpur</option>
            <option value="42">&bull;&nbsp; Petaling Jaya</option>
            <option value="20">&bull;&nbsp; Ampang</option>
            <option value="22">&bull;&nbsp; Bangsar</option>
            <option value="23">&bull;&nbsp; Bangsar South</option>
            <option value="69">&bull;&nbsp; Banting</option>
            <option value="24">&bull;&nbsp; Bukit Bintang</option>
            <option value="26">&bull;&nbsp; Bukit Damansara</option>
            <option value="27">&bull;&nbsp; Cheras</option>
            <option value="29">&bull;&nbsp; Damansara Heights</option>
            <option value="31">&bull;&nbsp; Damansara Utama</option>
            <option value="62">&bull;&nbsp; Ipoh</option>
            <option value="34">&bull;&nbsp; Kepong</option>
            <option value="35">&bull;&nbsp; Klang</option>
            <option value="37">&bull;&nbsp; Kota Damansara</option>
            <option value="39">&bull;&nbsp; Mont Kiara</option>
            <option value="41">&bull;&nbsp; Old Klang Road</option>
            <option value="50">&bull;&nbsp; Seri Kembangan</option>
            <option value="52">&bull;&nbsp; Shah Alam</option>
            <option value="54">&bull;&nbsp; Sri Petaling</option>
            <option value="55">&bull;&nbsp; Subang</option>
            <option value="56">&bull;&nbsp; Taman Desa</option>
            <option value="58">&bull;&nbsp; Taman Tun</option>{" "}
          </select>

          <button className={styles.search_deals}>Search Deals</button>
          <button className={styles.browse_restaurants}>
            Browse Restaurants
          </button>
        </div>
      </div>
      <div className={styles.arrow}>
        <div className={styles.cover_arrow}></div>
      </div>
      <div className={styles.top_banner}>
        <img
          src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg"
          alt="banner"
        />
      </div>
      <div className={styles.pagination}>
        <div className={styles.pageNumber}>
          <p>Page</p>
          <p>:</p>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </div>
        <div className={styles.button}>
          <button className={styles.prevButton}>Prev</button>
          <button className={styles.nextButton}>Next</button>
        </div>
      </div>
      <MealsListWraper>
        <MealList />
      </MealsListWraper>
    </MealDealsWraper>
  );
};

const MealDealsWraper = styled.div`
  width: 100%;
  height: auto;
`;

const MealsListWraper = styled.div`
  width: 1100px;
  display: flex;
  margin:auto;
  justify-content:space-between;
  
`;

export default MealDeals;
