import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategoryData } from '@/store/modules/index/actionCreators'
import './Category.style.scss'

function Category({ categoryData, getCategoryData }) {
  const categoryList = categoryData ? categoryData.primary_filter.slice(0, 10) : []

  useEffect(() => {
    getCategoryData()
  }, [])

  function renderCategoryList(categoryList) {
    return categoryList.map((item) => (
      <li key={item.code} className="category-item">
        <a href={`/category/${item.code}`}>
          <img className="img" src={item.url} alt={item.name} />
          <p className="name">{item.name}</p>
        </a>
      </li>
    ))
  }

  return (
    <section className="category-wrapper">
      <ul className="category-list">{renderCategoryList(categoryList)}</ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  categoryData: state.index.categoryData,
})

const mapDispatchToProps = {
  getCategoryData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
