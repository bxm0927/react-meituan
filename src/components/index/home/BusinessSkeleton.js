import React, { Fragment } from 'react'
import './BusinessSkeleton.style.scss'

function Skeleton() {
  return (
    <Fragment>
      {[1, 2].map((item) => (
        <div className="skeleton" key={item}>
          <div className="skeleton-head"></div>
          <div className="skeleton-body">
            <div className="skeleton-title"></div>
            <div className="skeleton-content"></div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Skeleton
