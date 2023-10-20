import { useEffect, useState } from "react";
import { activitiesData } from "../utils/apis/data";

export const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const getActivitiesData = () => {
    activitiesData()
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getActivitiesData();
  }, []);

  return { activities };
};
