import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader/root";
import { changeActiveTab } from "@/store/modules/home/actionCreators";
import "./style.scss";

function App({ tabs, activeTabKey, changeActiveTab }) {
  function handelNavChange(navItem) {
    if (navItem.key === activeTabKey) return;
    changeActiveTab(navItem.key);
  }

  return (
    <div className="page-home">
      <section className="banner">banner</section>

      <section className="category">category</section>

      <section className="business">business</section>

      <nav className="bottom-nav">
        <ul>
          {tabs.map((item) => {
            const isActive = item.key === activeTabKey ? "active" : "";
            return (
              <li
                onClick={handelNavChange.bind(this, item)}
                key={item.key}
                className={`${item.key} ${isActive}`}
              >
                <div className="icon"></div>
                <span className="name">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tabs: state.home.tabs,
  activeTabKey: state.home.activeTabKey,
});

const mapDispatchToProps = {
  changeActiveTab,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
