import React from "react";

const DummyList = ({ title, order }) => {
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

export default DummyList;
