import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBusinessData } from '@/store/modules/index/actionCreators'
import './Business.style.scss'

function Business({ businessData, getBusinessData }) {
  const businessList = businessData ? businessData.poilist : []

  useEffect(() => {
    getBusinessData()
  }, [])

  function renderBusinessList(businessList) {
    return businessList.map((item) => (
      <li key={item.id} className="business-item">
        <a href={`/detail/${item.id}`} className="business-link">
          <div className="business-pic">
            <img className="pic" src={item.pic_url} alt={item.name} />
          </div>

          <div className="business-info">
            <p className="name ellipsis">{item.name}</p>
            <p className="sold">月销{item.month_sale_num}+</p>
            <div className="meta-data">
              <span className="price">{item.min_price_tip}</span>
              <span className="price">{item.shipping_fee_tip}</span>
              <span className="price">{item.average_price_tip}</span>
            </div>
          </div>
        </a>
      </li>
    ))
  }

  return (
    <section className="business-wrapper">
      <h2 className="title">附近商家</h2>
      <ul className="business-list">{renderBusinessList(businessList)}</ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  businessData: state.index.businessData,
})

const mapDispatchToProps = {
  getBusinessData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Business)
