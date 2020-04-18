import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'
import { getOrderList } from '@/store/modules/index/actionCreators'
import './index.style.scss'

function Order({ orderList, getOrderList }) {
  console.log('orderList: ', orderList)
  useEffect(() => {
    getOrderList()
  }, [])

  return (
    <div className="order-tab">
      <header className="header">订单</header>

      <ul className="order-list">
        {orderList.map((item) => (
          <OrderItem item={item} key={item.order_id} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orderList: state.index.orderList,
})

const mapDispatchToProps = {
  getOrderList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
