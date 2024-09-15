import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Question = ({ question }) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="wrap p-2">
      <div className="card">
        <div className="card-body">
          <h5 className="fw-bolder">{question.author}</h5>
          <p>{formatDate(question.timestamp)}</p>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => showDetail(question.id)}
          >
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
