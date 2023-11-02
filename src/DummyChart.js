import React from "react";
import { useParams } from "react-router-dom";

const DummyChart = ({ title, order }) => {
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

export default DummyChart;
