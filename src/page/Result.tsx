import ResultCpm from "../components/Result/ResultCpm";

const Result = () => {
    return (
        <div className="pt-10">
            <h1 className="text-center font-semibold text-2xl pb-4">Result</h1>
            <div className="w-4/5 m-auto">
                <div className="pt-8">
                    <ResultCpm />
                </div>
            </div>
        </div>
    );
};

export default Result;
