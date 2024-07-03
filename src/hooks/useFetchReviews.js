import { getReviewsWithAnalysis } from "../services/getReviews";

import { useState, useEffect } from "react";

export const useFetchReviews = (asin, number, country) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const newData = await getReviewsWithAnalysis(asin, number, country);
    setData(() => newData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: data,
    isLoading: isLoading,
  };
};
