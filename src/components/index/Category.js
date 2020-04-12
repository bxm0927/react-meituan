import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategoryList } from '@/store/modules/index/actionCreators'
import './Category.style.scss'

function Category({ categoryList, getCategoryList }) {
  useEffect(() => {
    getCategoryList()
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
  categoryList: state.index.categoryList,
})

const mapDispatchToProps = {
  getCategoryList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
