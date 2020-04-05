import React from "react";
import { connect } from "react-redux";
import { increase } from "@/store/modules/home/actionCreators";
import "./style.scss";

function App({ tabs, count, increase }) {
  function hanelBtnClick() {
    increase(1);
  }

  return (
    <div className="page-home">
      <section className="banner"></section>

      <main>
        <h1>Page Home</h1>
        <p>count: {count}</p>
        <button onClick={hanelBtnClick}>increase</button>
      </main>

      <nav className="bottom-nav">
        <ul>
          {tabs.map((item) => (
            <li
              key={item.key}
              className={`${item.key} ${item.isActive ? "active" : ""}`}
            >
              <div className="icon"></div>
              <span className="name">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.home.count,
  tabs: state.home.tabs,
});

const mapDispatchToProps = {
  increase,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
