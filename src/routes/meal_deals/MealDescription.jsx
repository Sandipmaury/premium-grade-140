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
        <div>

        </div>
        <DealsMainContainer>

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
const DealsMainContainer=styled.div`
  width: 80%;
  margin-top:8rem;
  background-color:whitesmoke;
  height:15vh;
`;
export default MealDescription;
