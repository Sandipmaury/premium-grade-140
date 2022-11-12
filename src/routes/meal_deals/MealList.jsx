import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getMealData } from '../../redux/MealDealsReducer/action';
import MealDealsCart from './MealDealsCart';


const MealList = () => {
  const data=useSelector((store)=>store.MealDataReducer.mealData)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(data.length===0){
      dispatch(getMealData())
    }
  },[data.length,dispatch])
  return (
    <>
          {data.data?.map((ele) => {
          return (
            <MealsCart key={ele._id}>
              <Link to={`/MealDeals/${ele._id}`}>
                 <MealDealsCart ele={ele} />
              </Link>
            </MealsCart>
          );
        })}
    </>
  )
}


const MealsCart = styled.div`
    width:500px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius:10px;
    
   
    
`;
export default MealList