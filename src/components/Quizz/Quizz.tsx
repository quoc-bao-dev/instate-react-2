import { memo } from "react";
import useQuizzStore from "../../store/quizzStore";
import { cn, st } from "../../utils";
import { checkAllAnswer } from "../../helper";
import { useNavigate } from "react-router-dom";

const Quizz = () => {
    const data = useQuizzStore((state) => state.quizz);
    const choice = useQuizzStore((state) => state.choice);
    const nav = useNavigate();

    console.log("quizz render");

    return (
        <div className="pb-8">
            {data.map((item) => (
                <div
                    className="p-4 rounded-lg border border-gray-200 bg-gray-50 mt-5"
                    key={item.question}
                >
                    <p>{st(item.question)}</p>
                    <p className="font-bold py-2">Answers: </p>
                    <div className="flex gap-3">
                        {item.answers?.map((answer) => (
                            <button
                                className={cn(
                                    `p-2 px-4 py-2 block rounded-lg border transition duration-300 ${
                                        answer == item.chosenAnswer
                                            ? "bg-green-500 border-green-500 text-white hover:bg-green-600 hover:text-white"
                                            : "bg-gray-50 border-gray-200 hover:bg-green-400 hover:text-gray-700"
                                    }`
                                )}
                                key={answer}
                                onClick={() => {
                                    choice(answer, item.question);
                                }}
                            >
                                {st(answer)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <div className="pt-5">
                {checkAllAnswer(data) && (
                    <button
                        className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg w-full"
                        onClick={() => nav("/result")}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default memo(Quizz);
