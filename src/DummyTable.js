import tabsData from "./tabs.json";
import React, { useState, useEffect } from "react";

const DummyTable = ({ title, order }) => {
  return (
    <div>
      <table>
        <tr>
          <td>Title: {title}</td>
          <td>Order: {order}</td>
        </tr>
      </table>
    </div>
  );
};

export default DummyTable;
