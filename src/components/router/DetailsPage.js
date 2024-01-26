import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const params = useParams();
  return (
    <>
      <h1>Product id: </h1>
      {params.productId}
      <div className="row">
        <button className="btn btn-warning" onClick={cancelHandler}>
          {" "}
          Cancel
        </button>
      </div>
    </>
  );
};
export default DetailsPage;
