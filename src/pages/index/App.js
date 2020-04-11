import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader/root";
import "./App.style.scss";

import Banner from "@/components/index/Banner";
import Category from "@/components/index/Category";
import Business from "@/components/index/Business";
import BottomNav from "@/components/common/BottomNav";

function App() {
  return (
    <div className="page-index">
      <Banner />
      <Category />
      <Business />
      <BottomNav />
    </div>
  );
}

export default hot(connect()(App));
