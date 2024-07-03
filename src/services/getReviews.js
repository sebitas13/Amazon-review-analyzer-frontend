export const getReviewsWithAnalysis = async (asin, number, country) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(
      `${API_URL}/reviews/${asin}?number=${number}&country=${country}`
    );

    // if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("There was a problem with the fetch operation", error);
  }
};

// export const getData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         if(!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log('There was a problem with the fetch operation',error);
//     }
// }
