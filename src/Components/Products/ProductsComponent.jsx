import "./Products.scss";
import { v4 as uuidv4 } from "uuid";
export default function ProductsComponent({productArr}) {
  return (
    <div>
      {productArr.map((item) => (
        <div className="burgers__card" key={uuidv4()}>
          <div className="burgers__card-wrap">
            <div className="burgers__card-head">
              <img src={item.img} alt="#" />
            </div>
            <div className="burgers__card-body">
              <span className="price">{item.price}</span>
              <span className="title">{item.title}</span>
              <span className="massa">{item.massa}</span>
            </div>
            <div className="burgers__card-footer">
              <a href="#">Добавить</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
