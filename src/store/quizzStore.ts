import { create } from "zustand";
import { IQuizCategory } from "../model";

interface QuizzState {
    quizz: IQuizCategory[];
    setQuizz: (quizzs: IQuizCategory[]) => void;
    choice: (answer: string, question: string) => void;
}

const useQuizzStore = create<QuizzState>()((set) => ({
    quizz: [],
    setQuizz: (quizzs: IQuizCategory[]) => {
        set({
            quizz: quizzs,
        });
    },
    choice: (answer: string, question: string) => {
        set((state) => {
            const indexQuestion = state.quizz.findIndex(
                (item) => item.question === question
            );
            if (indexQuestion > -1) {
                const newQuizz = state.quizz.map((item, index) =>
                    index === indexQuestion
                        ? { ...item, chosenAnswer: answer }
                        : item
                );
                return {
                    quizz: newQuizz,
                };
            }
            return state;
        });
    },
}));

export default useQuizzStore;
