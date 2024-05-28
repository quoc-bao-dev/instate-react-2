import { randomAnswer } from "./../utils/index";
import axios from "axios";
import { IQuizCategory } from "../model";

export const getCategories = async () => {
    try {
        const res = await axios.get("https://opentdb.com/api_category.php");
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getAllQuiz = async (cateId: string, diff: string) => {
    try {
        const res = await axios.get(
            `https://opentdb.com/api.php?amount=5&category=${cateId}&difficulty=${diff}&type=multiple`
        );
        const data = res.data.results as IQuizCategory[];
        return data.map((item) => {
            const answ = [item.correct_answer, ...item.incorrect_answers];
            const randAnswer = randomAnswer(answ);
            return {
                ...item,
                answers: randAnswer,
                chosenAnswer: "",
            };
        });
    } catch (error) {
        throw error;
    }
};
