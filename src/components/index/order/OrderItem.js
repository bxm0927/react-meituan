import React from 'react'
import './OrderItem.style.scss'

function OrderItem({ item }) {
  const renderProductList = () => (
    <ul className="product-list">
      {item.product_list.map((product, index) => (
        <li className="product-item" key={index}>
          <span className="name">{product.product_name} </span>
          <span className="count">x{product.product_count}</span>
        </li>
      ))}
    </ul>
  )

  const renderButtonList = () => (
    <div className="order-operations">
      {item.button_list.map((btn) => (
        <button key={btn.code} className={'btn btn-' + btn.code}>
          {btn.title}
        </button>
      ))}
    </div>
  )

  return (
    <li className="order-item">
      <a className="order-link" href={'/order/' + item.order_id}>
        <div className="order-content">
          <div className="left-photo">
            <img className="photo" src={item.poi_pic} alt={item.poi_name} />
          </div>

          <div className="right-info">
            <div className="poi-name">{item.poi_name}</div>
            {renderProductList()}
            <p className="total">
              总计{item.product_count}个商品，实付￥{item.total}
            </p>
          </div>
        </div>

        {renderButtonList()}
      </a>
    </li>
  )
}

export default OrderItem
