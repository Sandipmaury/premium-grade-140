import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getMealData } from '../../redux/MealDealsReducer/action'
import styles from "./MealDeals.module.css"
const Pagination = () => {
  const [searchParams,setSearchparams]=useSearchParams()
  const initpage=searchParams.get("page")
  const [page,setPage]=useState(initpage||1)
  const initCat=searchParams.get("category")
  const initTitle=searchParams.get("title")
  const [title,setTitle]=useState(initTitle||"")
  const [category,setCategory]=useState(initCat||"")
  const initAddress=searchParams.get("address")
  const [address,setAddress]=useState(initAddress||"")

  const dispatch=useDispatch()
  const data=useSelector((store)=>store.MealDataReducer.mealData)
  useEffect(()=>{
    const params={page:page,limit:4}
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
    console.log("params init",page)
    dispatch(getMealData(params))

  },[page])
  return (
    <>
         <div className={styles.pageNumber}>
          <p>Page</p>
          <p>:</p>
          <button value="1" onClick={(e)=>setPage(+e.target.value)}>1</button>
          <button value="2" onClick={(e)=>setPage(+e.target.value)}>2</button>
       
        </div>
        <div className={styles.button}>
          <button className={styles.prevButton} onClick={()=>setPage(+page-1)} disabled={page<=1}>Prev</button>
          <button className={styles.nextButton} disabled={page>=4} onClick={()=>setPage(+page+1)}>Next</button>
        </div>
    </>
  )
}

export default Pagination