/*
 * @Author: xiaoming.bai
 * @Date: 2020-04-12 21:27:22
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-04-12 21:39:23
 */

/**
 * @description 获取视口(Viewport)尺寸
 * @see jQuery 写法: `$(window).width(); $(window).height();`
 */
export const getClientSize = () => {
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const clientHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  return { clientWidth, clientHeight }
}

/**
 * @description 获取滚动距离(`scrollTop`、`scrollLeft`)
 * @see `$(document).scrollTop(); $(document).scrollLeft();`
 */
export const getScrollDistance = () => {
  let scrollTop =
    (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
  let scrollLeft =
    (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft
  return { scrollTop, scrollLeft }
}
