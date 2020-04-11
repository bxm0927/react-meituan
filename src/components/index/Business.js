import React from "react";
import "./Business.style.scss";

const businessList = [
  { id: 1, name: "lorem lorem" },
  { id: 2, name: "lorem lorem" },
  { id: 3, name: "lorem lorem" },
  { id: 4, name: "lorem lorem" },
  { id: 5, name: "lorem lorem" },
  { id: 6, name: "lorem lorem" },
  { id: 7, name: "lorem lorem" },
  { id: 8, name: "lorem lorem" },
  { id: 9, name: "lorem lorem" },
];

function Business() {
  function renderBusinessList(businessList) {
    return businessList.map((item) => (
      <li key={item.id} className="business-item">
        <a href={`/detail/${item.id}`} className="business-link">
          <div className="business-pic">
            <img
              className="pic"
              src="https://p0.meituan.net/business/c938fe7a513778a05f6d5fad05a47a2c744078.png@114h_80Q_0e_1l.webp?cimage=true"
              alt=""
            />
          </div>

          <div className="business-info">
            <p className="name ellipsis">串意十足烧烤店(武宁路店)</p>
          </div>
        </a>
      </li>
    ));
  }

  return (
    <section className="business-wrapper">
      <h2 className="title">附近商家</h2>
      <ul className="business-list">{renderBusinessList(businessList)}</ul>
    </section>
  );
}

export default Business;
