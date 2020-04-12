import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BusinessItem from './BusinessItem'
import { getBusinessList, setFetchingState } from '@/store/modules/index/actionCreators'
import { getDocumentSize, getClientSize, getScrollDistance } from '@/assets/javascripts/utils/bom'
import './Business.style.scss'

function Business({ businessList, getBusinessList, isFetching, setFetchingState }) {
  const [pageIndex, setPageIndex] = useState(1)

  useEffect(() => {
    getBusinessList()
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollFetch())
    return () => {
      document.removeEventListener('scroll', scrollFetch())
    }
  }, [])

  // BUG: isFetching
  const scrollFetch = () => () => {
    if (isFetching) return

    let scrollTop = getScrollDistance().scrollTop
    let clientHeight = getClientSize().clientHeight
    const documentHeight = getDocumentSize().documentHeight

    if (scrollTop + clientHeight >= documentHeight - clientHeight) {
      // 最多加载 3 页
      if (pageIndex > 3) return
      setFetchingState(true)
      getBusinessList(pageIndex)
      setPageIndex(pageIndex + 1)
    }
  }

  function renderBusinessList(businessList) {
    return businessList.map((item, index) => (
      <BusinessItem key={item.id + index} index={index} item={item} />
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
  businessList: state.index.businessList,
  isFetching: state.index.isFetching,
})

const mapDispatchToProps = {
  getBusinessList,
  setFetchingState,
}

export default connect(mapStateToProps, mapDispatchToProps)(Business)
