import { useEffect } from "react";
import useQuizzStore from "../../store/quizzStore";
import { cn, st } from "../../utils";
import { useNavigate } from "react-router-dom";
import { checkResult } from "../../helper";

const ResultCpm = () => {
    const data = useQuizzStore((state) => state.quizz);
    const nav = useNavigate();
    const setQuizz = useQuizzStore((state) => state.setQuizz);
    useEffect(() => {
        window.scroll(0, 0);
        if (data.length == 0) {
            nav("/");
        }
        return () => {
            setQuizz([]);
        };
    }, []);

    const correct = checkResult(data) as number;

    return (
        <div className="pb-8">
            {data.map((item) => (
                <div
                    className={cn(
                        `p-4 rounded-lg border mt-5 ${
                            item.chosenAnswer == item.correct_answer
                                ? "border-green-200 bg-green-50"
                                : "border-gray-200 bg-gray-50"
                        }`
                    )}
                    key={item.question}
                >
                    <p>{st(item.question)}</p>
                    <p className="font-bold py-2">Answers: </p>
                    <div className="flex gap-3">
                        {item.answers?.map((answer) => (
                            <button
                                className={cn(
                                    `p-2 px-4 py-2 block rounded-lg border ${
                                        answer == item.chosenAnswer
                                            ? answer == item.correct_answer
                                                ? "bg-green-500 border-green-500 text-white"
                                                : "bg-red-500 border-red-500 text-white"
                                            : answer == item.correct_answer
                                            ? "bg-green-500 border-green-500 text-white"
                                            : "bg-gray-50 border-gray-200"
                                    }`
                                )}
                                key={answer}
                                disabled
                            >
                                {st(answer)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <div className="py-4">
                <div
                    className={cn(
                        `p-4 rounded-lg text-white ${
                            correct <= 1
                                ? "bg-red-500"
                                : correct <= 3
                                ? "bg-yellow-500"
                                : "bg-green-500"
                        }`
                    )}
                >
                    You scored {correct} out of {data.length}
                </div>
            </div>
            <div className="py-4">
                <button
                    className="p-2 px-4 py-2 block rounded-lg border w-full bg-blue-600 text-white"
                    onClick={() => {
                        nav("/");
                    }}
                >
                    Create New Quiz
                </button>
            </div>
        </div>
    );
};

export default ResultCpm;
