import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getMealData } from '../../redux/MealDealsReducer/action'
import styles from "./MealDeals.module.css"
const SearchingByName = () => {
    const [searchParams,setSearchparams]=useSearchParams("")
    const getByPage=searchParams.get("page")
    const initCat=searchParams.get("category")
    const initTitle=searchParams.get("title")
    const [title,setTitle]=useState(initTitle||"")
    const [category,setCategory]=useState(initCat||"")
    const initAddress=searchParams.get("address")
    const [address,setAddress]=useState(initAddress||"")
    const dispatch=useDispatch()

    const sortFilter=()=>{
        const params={limit:4,page:getByPage}
        if(category){
          params.category=category
        }
        if(title){
          params.title=title
        }
        if(address){
          params.address=address
        }
        setSearchparams(params)
        dispatch(getMealData(params))
    }
    
  return (
    <>
        <input
            className={styles.input}
            type="text"
            placeholder="Search Shop or Deal Name"
            onChange={(e)=>setTitle(e.target.value)}
          />
          <select name="category" id="" className={styles.all_categories} onChange={(e)=>setCategory(e.target.value)}>
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

          <button className={styles.search_deals} onClick={sortFilter}>Search Deals</button>
          <button className={styles.browse_restaurants}>
            Browse Restaurants
          </button>
    </>
  )
}

export default SearchingByName