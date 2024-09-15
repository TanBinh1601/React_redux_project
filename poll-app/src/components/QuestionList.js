import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <div className="p-2 d-flex flex-wrap border">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
