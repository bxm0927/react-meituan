/**
 * @description 获取文档(Document)尺寸
 * @see jQuery 写法: `$(document.body).width(); $(document.body).height();`
 */
export const getDocumentSize = () => {
  let documentWidth = document.body.offsetWidth || document.body.scrollWidth
  let documentHeight = document.body.offsetHeight || document.body.scrollHeight
  return { documentWidth, documentHeight }
}

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
 * @description 获取元素(Element)尺寸
 * @see jQuery 写法: `$(el).width(); $(el).height();`
 * @param {Element} el
 */
export const getElementSize = (el) => ({
  offsetWidth: el.offsetWidth,
  offsetHeight: el.offsetHeight,
  offsetTop: el.offsetTop,
  offsetLeft: el.offsetLeft,
})

/**
 *获取元素的坐标
 * @param {*} element
 */
export const getElementPos = (element) => {
  let x = element.getBoundingClientRect().top || 0
  let y = element.getBoundingClientRect().left || 0
  return { x, y }
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
