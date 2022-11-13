import React from "react";
import styled from "styled-components";
import { Loding } from "../../Components/Loading";
import styles from "./MealDeals.module.css";
import MealList from "./MealList";
import Pagination from "./Pagination";
import SearchingByName from "./SearchingByName";
const MealDeals = () => {
  return (
    <MealDealsWraper>
      <Loding />
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
        <br />
        <div className={styles.searching_div}>
          <SearchingByName />
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
        <Pagination />
      </div>
      <MealsListWraper>
        <MealList />
      </MealsListWraper>
      <div className={styles.pagination}>
        <Pagination />
      </div>
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
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
  justify-content: space-between;
`;

export default MealDeals;
