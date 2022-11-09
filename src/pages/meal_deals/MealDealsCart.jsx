import React from 'react'
import styles from "./MealDeals.module.css";

const MealDealsCart = ({ele}) => {
  return (
    <div className={styles.mealCart}>
      <div className={styles.images}>
          <img className={styles.img} src={ele.back} alt="img-1" />
      </div>
      <div className={styles.title}>{ele.name}</div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>{ele.hotel} - <span>{ele.location}</span></h1>
        </div>
        <div className={styles.couponButton}>
          <button className={styles.free_coupon}>Get FREE Coupon</button>
          <div className={styles.stars}>
            <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="start-1" />
            <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="start-2" />
            <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="start-3" />
            <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="start-4" />
            <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="start-5" />
            <p>(0)</p>
          </div>
        </div>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.discount_section}>
        <div className={styles.contains}>
          <img src="https://www.kindmeal.my/images/icon_egg.png" alt="contains-1" />
          <img src="https://www.kindmeal.my/images/icon_milk.png" alt="contains-2" />
          <img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="contains-3" />
        </div>
        
        <div className={styles.discount}>
          <div>
            <p>Kind Meal Discount</p>
            <h2>20% Off</h2>
          </div>
        </div>
        <div className={styles.expires}>
        <p>Expires</p>
            <h2>7 Days</h2>
        </div>
      </div>
      {/* <svg className={styles.percentof} height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg> */}
    </div>
  )
}

export default MealDealsCart