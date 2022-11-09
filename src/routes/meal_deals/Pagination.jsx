import React from 'react'
import styles from "./MealDeals.module.css"
const Pagination = () => {
  return (
    <>
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
    </>
  )
}

export default Pagination