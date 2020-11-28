import React from "react";
import PageHeader from "antd/es/page-header";
import Step from "./Step";
import { StartUrl } from "./Step";

const Test = ({ type }) =>
  type === "view" ? (
    <div>View Test</div>
  ) : (
    <>
      <StartUrl />
    </>
  );

export default Test;
