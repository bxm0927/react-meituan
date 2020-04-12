import axios from 'axios'
import * as constants from './actionTypes'

export const increase = (count) => ({
  type: constants.INCREASE,
  count,
})

export const changeActiveTab = (activeKey) => ({
  type: constants.CHANGE_ACTIVE_TAB,
  activeKey,
})

export const setCategoryData = (categoryData) => ({
  type: constants.SET_CATEGORY_DATA,
  categoryData,
})

export const setBusinessData = (businessData) => ({
  type: constants.SET_BUSINESS_DATA,
  businessData,
})

export const getCategoryData = () => async (dispatch) => {
  const { status, data } = await axios.get('/mock/categoryList.json')
  if (status === 200 && data.code === 0) {
    const categoryData = data.data
    dispatch(setCategoryData(categoryData))
  }
}

export const getBusinessData = () => async (dispatch) => {
  const { status, data } = await axios.get('/mock/businessList.json')
  if (status === 200 && data.code === 0) {
    const businessData = data.data
    console.log('businessData: ', businessData)
    dispatch(setBusinessData(businessData))
  }
}
