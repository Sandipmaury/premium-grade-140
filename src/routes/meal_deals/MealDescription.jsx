import React from "react";
import styles from "./MealDescription.module.css";
import styled from "styled-components";
import { ImTwitter } from "react-icons/im";
import MealDescList from "./MealDescList";
import { useMealDesc } from "./useMealDesc";
const MealDescription = (ele) => {
 
const currentMealData=useMealDesc()

  return (
    <>
      <MealDealsDescription>
        <HeadSectionWraper>
          <img
            src="https://www.kindmeal.my/photos/shop/6/624-c.jpg"
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
              src={currentMealData.img}
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

      <DealsMainContainer>
       <MealDescList/>
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
