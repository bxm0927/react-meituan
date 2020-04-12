import axios from 'axios'
import * as constants from './actionTypes'

export const changeActiveTab = (activeKey) => ({
  type: constants.CHANGE_ACTIVE_TAB,
  activeKey,
})

export const setCategoryList = (categoryList) => ({
  type: constants.SET_CATEGORY_LIST,
  categoryList,
})

export const setBusinessList = (businessList) => ({
  type: constants.SET_BUSINESS_LIST,
  businessList,
})

export const setFetchingState = (isFetching) => ({
  type: constants.SET_FETCHING_STATE,
  isFetching,
})

export const getCategoryList = () => async (dispatch) => {
  const { status, data } = await axios.get('/mock/categoryList.json')
  if (status === 200 && data.code === 0) {
    const categoryList = data.data.primary_filter.slice(0, 10)
    dispatch(setCategoryList(categoryList))
  }
}

export const getBusinessList = (pageIndex = 1) => async (dispatch) => {
  const { status, data } = await axios.get('/mock/businessList.json', {
    params: { pageIndex },
  })

  if (status === 200 && data.code === 0) {
    const businessList = data.data.poilist
    dispatch(setBusinessList(businessList))
  }
}
