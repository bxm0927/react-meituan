import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BusinessItem from './BusinessItem'
import BusinessSkeleton from './BusinessSkeleton'
import ScrollView from '@/components/common/ScrollView'
import {
  getBusinessList,
  setPageIndex,
  setFetchingState,
} from '@/store/modules/index/actionCreators'
import './Business.style.scss'

function Business({
  businessList,
  getBusinessList,
  pageIndex,
  setPageIndex,
  isFetching,
  setFetchingState,
}) {
  const emptyPage = !businessList || (businessList && businessList.length === 0)

  // 页面初始化时，加载列表数据
  useEffect(() => {
    getBusinessList(pageIndex)
  }, [])

  const loadData = () => {
    const nextPageIndex = pageIndex + 1
    setFetchingState(true)
    setPageIndex(nextPageIndex)
    getBusinessList(nextPageIndex)
  }

  const renderBusinessList = () => {
    if (emptyPage) return <BusinessSkeleton />
    return (
      <ScrollView cb={loadData} isFetching={isFetching} isEnd={pageIndex >= 3}>
        <ul className="business-list">
          {businessList.map((item, index) => (
            <BusinessItem key={item.id + index} index={index} item={item} />
          ))}
        </ul>
      </ScrollView>
    )
  }

  const renderLoading = () => {
    if (emptyPage) return
    if (!isFetching) return <div className="loading">我也是有底线的</div>
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
      {renderBusinessList()}
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
