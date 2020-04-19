import React, { useEffect } from 'react'
import { getDocumentSize, getClientSize, getScrollDistance } from '@/assets/javascripts/utils/bom'

/**
 * 页面滚动时，加载列表数据
 * @param {*} children Slot 插槽
 * @param {Function} cb 加载触发回调
 * @param {Boolean} isFetching 是否正在加载中
 * @param {Boolean} isEnd 是否停止加载
 */
function ScrollView({ children, cb, isFetching, isEnd }) {
  useEffect(() => {
    document.addEventListener('scroll', scrollFetch)
    return () => document.removeEventListener('scroll', scrollFetch)
  })
  // [isFetching, pageIndex]

  const scrollFetch = () => {
    if (isFetching || isEnd) return

    let scrollTop = getScrollDistance().scrollTop
    let clientHeight = getClientSize().clientHeight
    const documentHeight = getDocumentSize().documentHeight

    // 提前一屏(clientHeight)加载数据
    if (scrollTop + clientHeight >= documentHeight - clientHeight) {
      cb && cb()
    }
  }

  return <div className="scroll-view">{children}</div>
}

export default ScrollView
