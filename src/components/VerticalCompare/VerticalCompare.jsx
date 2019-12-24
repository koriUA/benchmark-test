import React from "react";
import './VerticalCompare.scss';
import {Loading} from "carbon-components-react";

export default function VerticalCompare() {
  // <Loading />
  return (
    <div className="VerticalCompare">
      <h1>Visotor Traffic by Paid Search</h1>
      <span>Dec 2019</span>
      <div className="bx--row">
        <div className="bx--col-lg-2">
          Compare
        </div>
        <div className="bx--col-lg-2">

        </div>
        <div className="bx--col-lg-2">
          Your Site
        </div>
        <div className="bx--col-lg-2">

        </div>
        <div className="bx--col-lg-2">
          %
        </div>
        <div className="bx--col-lg-2">
          Percentile
        </div>
      </div>

    </div>
  );
}
