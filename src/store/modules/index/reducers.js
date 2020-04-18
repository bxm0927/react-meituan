import * as constants from './actionTypes'

const initialState = {
  tabs: [
    { key: 'index', name: '首页', link: '/' },
    { key: 'order', name: '订单', link: '/order' },
    { key: 'mine', name: '我的', link: '/mine' },
  ],
  categoryList: [],
  businessList: [],
  orderList: [],

  // business search
  pageIndex: 1,
  pageSize: 10,
  isLastPage: false,
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_CATEGORY_LIST:
      return { ...state, categoryList: action.categoryList }

    case constants.SET_BUSINESS_LIST:
      return { ...state, businessList: [...state.businessList, ...action.businessList] }

    case constants.SET_PAGE_INDEX:
      return { ...state, pageIndex: action.pageIndex }

    case constants.SET_LAST_PAGE_STATE:
      return { ...state, isLastPage: action.isLastPage }

    case constants.SET_FETCHING_STATE:
      return { ...state, isFetching: action.isFetching }

    case constants.SET_ORDER_LIST:
      return { ...state, orderList: action.orderList }

    default:
      return state
  }
}
