import { Link } from "react-router-dom";
import image from "../../../assets/1.jpg";
import image1 from "../../../assets/1-1.jpg";
const ProductCard = (props) => {
  const remise = (percent, total) => {
    return ((percent / 100) * total).toFixed(2);
  };
  const handleOnView = () => {
    console.log("view Item");
  };
  const handleOnViewOrders = () => {
    props.onOpen();
  };
  const handleOnAddToCart = (item) => {
    props.addItem({ ...item, amount: 1 });
  };

  return (
    <>
      <div className="col-md-3 col-sm-6">
        <div className="product-grid4">
          <div className="product-image4">
            <Link to="/">
              <img className="pic-1" src={image} />
              <img className="pic-2" src={image1} />
            </Link>
            <ul className="social">
              <li>
                <Link onClick={handleOnView} data-tip="Quick View">
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
              <li>
                <Link onClick={handleOnViewOrders} data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag"></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleOnAddToCart(props.course)}
                  data-tip="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
            {props.course.new === true && (
              <span className="product-new-label">New</span>
            )}
            {props.course.discount !== 0 && (
              <span className="product-discount-label">
                -{props.course.discount}%
              </span>
            )}
          </div>
          <div className="product-content">
            <h3 className="title">
              <Link href="#">{props.course.name}</Link>
            </h3>
            <div className="price">
              $
              {props.course.new
                ? props.course.price
                : props.course.price -
                  remise(props.course.discount, props.course.price)}
              {props.course.new === false && <span>${props.course.price}</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
