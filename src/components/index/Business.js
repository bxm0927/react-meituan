import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BusinessItem from './BusinessItem'
import {
  getBusinessList,
  setPageIndex,
  setFetchingState,
} from '@/store/modules/index/actionCreators'
import { getDocumentSize, getClientSize, getScrollDistance } from '@/assets/javascripts/utils/bom'
import './Business.style.scss'

function Business({
  businessList,
  getBusinessList,
  pageIndex,
  setPageIndex,
  isFetching,
  setFetchingState,
}) {
  // 页面初始化时，加载列表数据
  useEffect(() => {
    getBusinessList(pageIndex)
  }, [])

  // 页面滚动时，加载列表数据
  useEffect(() => {
    document.addEventListener('scroll', scrollFetch)
    return () => document.removeEventListener('scroll', scrollFetch)
  }, [isFetching, pageIndex])

  const scrollFetch = () => {
    // 最多加载 3 页
    if (isFetching || pageIndex >= 3) return

    let scrollTop = getScrollDistance().scrollTop
    let clientHeight = getClientSize().clientHeight
    const documentHeight = getDocumentSize().documentHeight

    // 提前一屏加载数据
    if (scrollTop + clientHeight >= documentHeight - clientHeight) {
      const nextPageIndex = pageIndex + 1
      setFetchingState(true)
      setPageIndex(nextPageIndex)
      getBusinessList(nextPageIndex)
    }
  }

  const renderBusinessList = () => {
    return businessList.map((item, index) => (
      <BusinessItem key={item.id + index} index={index} item={item} />
    ))
  }

  const renderLoading = () => {
    if (!isFetching) return
    return (
      <div className="loading">
        <img src={require('@/assets/images/common/loading.svg').default} alt="loading" />
        加载中...
      </div>
    )
  }

  return (
    <section className="business-wrapper">
      <h2 className="title">附近商家</h2>
      <ul className="business-list">{renderBusinessList()}</ul>
      {renderLoading()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  businessList: state.index.businessList,
  pageIndex: state.index.pageIndex,
  isFetching: state.index.isFetching,
})

const mapDispatchToProps = {
  getBusinessList,
  setPageIndex,
  setFetchingState,
}

export default connect(mapStateToProps, mapDispatchToProps)(Business)
