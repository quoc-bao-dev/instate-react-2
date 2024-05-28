export interface IQuiz {}

export interface IQuizCategory {
    category: string;
    correct_answer: string;
    difficulty: "easy" | "medium" | "hard";
    incorrect_answers: Array<string>;
    question: string;
    type: "multiple";
    answers?: Array<string>;
    chosenAnswer?: string;
}

export interface IQuizResponse {
    response_code: number;
    results: Array<IQuizCategory>;
}

export interface ICate {
    id: number;
    name: string;
}
