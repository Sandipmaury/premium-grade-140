import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMealData } from "../../redux/MealDealsReducer/action";

const useMealDesc = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const mealData = useSelector((store) => store.MealDataReducer.mealData);
    const [currentMealData, setCurrentMealData] = useState({});
  
    useEffect(() => {
      if (mealData.length === 0) {
        dispatch(getMealData());
      }
    }, [dispatch, mealData.length]);
  
    useEffect(() => {
      if (id) {
        const currentData = mealData.data?.find((e) => e._id === id);
        currentData && setCurrentMealData(currentData);
      }
    }, [id, mealData]);

    return currentMealData;

}

export {useMealDesc}