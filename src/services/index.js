import axios from "axios";

   export const contestQuizQuestion = async () => {
      try {
        const response = await axios.get(
          "https://atme-quiz.onrender.com/api/json/data/6604b30057da7d5aabd8b9bf"
        );
        console.log("DATAAAAAA",response)
         return response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };import axios from "axios";

   export const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://atme-quiz.onrender.com/api/json/category/CONTEST`
        );
        console.log("DATAAAAAA",response)
         return response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    export const fetchCategoriesWisedata = async (category) => {
        try {
          const response = await axios.get(
            `https://atme-quiz.onrender.com/api/json/category/${category}`
          );
          console.log("DATAAAAAA",response)
           return response.data;
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

 
