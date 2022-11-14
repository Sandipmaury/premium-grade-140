import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getMealData } from '../../redux/MealDealsReducer/action'
import styles from "./MealDeals.module.css"

const SearchingByName = () => {
  const [searchParams, setSearchparams] = useSearchParams("");
  const getByPage = searchParams.get("page");
  const initCat = searchParams.get("category");
  const initTitle = searchParams.get("title");
  const [title, setTitle] = useState(initTitle || "");
  const [category, setCategory] = useState(initCat || "");
  const initAddress = searchParams.get("address");
  const [address, setAddress] = useState(initAddress || "");
  const dispatch = useDispatch();

  const sortFilter = () => {
    const params = { limit: 4, page: getByPage };
    if (category) {
      params.category = category;
    }
    if (title) {
      params.title = title;
    }
    if (address) {
      params.address = address;
    }
    setSearchparams(params);
    dispatch(getMealData(params));
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Shop or Deal Name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        name="category"
        id=""
        className={styles.all_categories}
        onChange={(e) => setCategory(e.target.value)}
      >
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
            onChange={(e)=>setAddress(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Kepong, Kuala Lumpur">&bull;&nbsp; Kuala Lumpur</option>
            <option value="Petaling Jaya, Selangor">&bull;&nbsp; Petaling Jaya</option>
            <option value="Cheras, Kuala Lumpur">&bull;&nbsp; Cheras</option>
            <option value="Damansara Heights">&bull;&nbsp; Damansara Heights</option>
            <option value="Damansara Utama">&bull;&nbsp; Damansara Utama</option>
            <option value="Ipoh">&bull;&nbsp; Ipoh</option>
            <option value="Kepong, Kuala Lumpur">&bull;&nbsp; Kepong</option>
            <option value="Shah Alam, Selangor">&bull;&nbsp; Shah Alam</option>
            <option value="Petaling Jaya, Selangor">&bull;&nbsp; Sri Petaling</option>
          </select>


      <button className={styles.search_deals} onClick={sortFilter}>
        Search Deals
      </button>
      <button className={styles.browse_restaurants}>Browse Restaurants</button>
    </>
  );
};

export default SearchingByName;
