import { IQuizCategory } from "../model";

export const checkAllAnswer = (data: IQuizCategory[]) => {
    if (data.length == 0) return false;
    return data.every((item) => item.chosenAnswer != "");
};

export const checkResult = (data: IQuizCategory[]) => {
    if (data.length == 0) return false;
    let counter = 0;
    data.forEach((item) => {
        if (item.chosenAnswer == item.correct_answer) {
            counter++;
        }
    });
    return counter;
};
