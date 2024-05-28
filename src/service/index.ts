import axios from "axios";

export const getCategories = async () => {
    try {
        const res = await axios.get("https://opentdb.com/api_category.php");
        return res.data;
    } catch (error) {
        console.warn(error);
    }
};

export const getAllQuiz = async (cateId: string, diff: string) => {
    try {
        const res = await axios.get(
            `https://opentdb.com/api.php?amount=5&category=${cateId}&difficulty=${diff}&type=multiple`
        );
        return res.data;
    } catch (error) {
        console.warn(error);
    }
};
