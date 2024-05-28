import { useEffect, useState } from "react";
import Quizz from "../components/Quizz/Quizz";
import { ICate } from "../model";
import { getAllQuiz, getCategories } from "../service";
import useQuizzStore from "../store/quizzStore";

const difficulty = [
    { id: 1, name: "easy" },
    { id: 2, name: "medium" },
    { id: 3, name: "hard" },
];

const Home = () => {
    const [cate, setCate] = useState<ICate[]>([]);
    const [cateId, setCateId] = useState("");
    const [diff, setDiff] = useState("");
    const setQuizz = useQuizzStore((state) => state.setQuizz);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCate(res.trivia_categories);
            })
            .catch(() => null);
    }, []);

    const handleSubmit = () => {
        if (cateId && diff) {
            getAllQuiz(cateId, diff)
                .then((data) => {
                    setQuizz(data);
                })
                .catch(() => null);
        }
    };
    return (
        <div className="pt-10">
            <h1 className="text-center font-semibold text-2xl pb-12">
                Quiz Maker
            </h1>
            <div className="w-4/5 m-auto">
                <div className="flex gap-3 pt-8">
                    <select
                        className="py-2 px-4 bg-slate-200 rounded-lg border border-slate-400 min-w-[353px]"
                        name="categories"
                        id="categorySelect"
                        defaultValue={""}
                        onChange={(e) => {
                            setCateId(e.target.value);
                        }}
                    >
                        <option value="" disabled hidden>
                            --Select Category--
                        </option>
                        {cate.map((item) => (
                            <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <select
                        className="py-2 px-4 bg-slate-200 rounded-lg border border-slate-400 min-w-[353px]"
                        name="categories"
                        id=""
                        defaultValue={""}
                        onChange={(e) => {
                            setDiff(e.target.value);
                        }}
                    >
                        <option value="" disabled hidden>
                            --Select Difficulty--
                        </option>
                        {difficulty.map((item) => (
                            <option
                                value={item.name}
                                key={item.id}
                                className="font-bold"
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button
                        className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg disabled:bg-gray-300 disabled:text-gray-100"
                        disabled={cateId === "" || diff === ""}
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                </div>
                <div className="pt-8">
                    <Quizz />
                </div>
            </div>
        </div>
    );
};

export default Home;
