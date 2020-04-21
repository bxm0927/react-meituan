import React from 'react'
import './BusinessItem.style.scss'

function BusinessItem({ item, index }) {
  function renderBrand(brandType) {
    if (brandType) {
      return <span className="brand brand-pin">品牌</span>
    } else {
      return <span className="brand brand-xin">新到</span>
    }
  }

  function renderActivityBox(activityList) {
    return (
      <div className="activity-box">
        <ul className="activity-list">
          {activityList.map((item) => (
            <li key={item.id} className="activity-item">
              <img className="pic" src={item.icon_url} alt={item.info} />
              <span className="info">{item.info}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  function renderScore(score = 0) {
    const stars = []
    const MAX_STAR = 5
    const fullstarCount = Number.parseInt(score)
    const halfstarCount = Number.isInteger(score) ? 1 : 0
    const graystarCount = MAX_STAR - fullstarCount - halfstarCount

    for (let i = 0; i < fullstarCount; i++) {
      stars.push(<i key={i + 'fullstar'} className="star fullstar" />)
    }
    for (let i = 0; i < halfstarCount; i++) {
      stars.push(<i key={i + 'halfstar'} className="star halfstar" />)
    }
    for (let i = 0; i < graystarCount; i++) {
      stars.push(<i key={i + 'graystar'} className="star graystar" />)
    }

    return stars
  }

  return (
    <li className="business-item" data-index={index}>
      <a href={`/detail/${item.id}`} className="business-link">
        <div className="business-pic">
          <img className="pic" src={item.pic_url} alt={item.name} />
          {renderBrand(item.brand_type)}
        </div>

        <div className="business-info">
          <p className="name ellipsis">{item.name}</p>
          <p className="name2 ellipsis">{item.name}</p>

          <div className="meta-box">
            <span className="score">{renderScore(item.wm_poi_score)}</span>
            <span className="count">月销{item.month_sale_num}+</span>
            <span className="distance">{item.distance}</span>
            <span className="time">{item.mt_delivery_time}</span>
          </div>

          <div className="price-box">
            <span className="price">{item.min_price_tip}</span>
            {/* <span className="price">{item.shipping_fee_tip}</span> */}
            <span className="price">{item.average_price_tip}</span>
            {item.delivery_type && <span className="delivery">美团专送</span>}
          </div>

          {item.discounts2 && item.discounts2.length > 0 && renderActivityBox(item.discounts2)}
        </div>
      </a>
    </li>
  )
}

export default BusinessItem
