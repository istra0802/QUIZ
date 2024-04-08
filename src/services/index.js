import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/all/category`
    );
   console.log("rsponseeeee",response)
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchAllCategoryData = async () => {
  try {
    const response = await axios.get(`https://atme-quiz.onrender.com/api/contests`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesWisedata = async (category) => {
  console.log("categoryy",category)
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/category/${category}`
    );
   console.log("oooooooooo",response)
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchParticularContestdata = async (id) => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching particular contest data", error);
  }
};

export const firstTwoRandomQuestion = async () => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/questions/quiz`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching particular contest data", error);
  }
};