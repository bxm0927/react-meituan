import React from "react";
import "./Category.style.scss";

const categoryList = [
  {
    id: 1,
    name: "美食",
    img: require("@/assets/images/index/category/hb.png").default,
  },
  {
    id: 2,
    name: "美团超市",
    img: require("@/assets/images/index/category/cs.png").default,
  },
  {
    id: 3,
    name: "生鲜果蔬",
    img: require("@/assets/images/index/category/sx.png").default,
  },
  {
    id: 4,
    name: "美团专送",
    img: require("@/assets/images/index/category/zs.png").default,
  },
  {
    id: 5,
    name: "下午茶",
    img: require("@/assets/images/index/category/xwc.png").default,
  },
  {
    id: 6,
    name: "汉堡披萨",
    img: require("@/assets/images/index/category/hb.png").default,
  },
  {
    id: 7,
    name: "小吃馆",
    img: require("@/assets/images/index/category/xcg.png").default,
  },
  {
    id: 8,
    name: "家常菜",
    img: require("@/assets/images/index/category/jcc.png").default,
  },
  {
    id: 9,
    name: "鲜花蛋糕",
    img: require("@/assets/images/index/category/xhdg.png").default,
  },
  {
    id: 10,
    name: "品牌连锁",
    img: require("@/assets/images/index/category/ppls.png").default,
  },
];

function Category() {
  function renderCategoryList(categoryList) {
    return categoryList.map((item) => (
      <li key={item.id} className="category-item">
        <a href={`/category/${item.id}`}>
          <img className="img" src={item.img} alt={item.name} />
          <p className="name">{item.name}</p>
        </a>
      </li>
    ));
  }

  return (
    <section className="category-wrapper">
      <ul className="category-list">{renderCategoryList(categoryList)}</ul>
    </section>
  );
}

export default Category;
