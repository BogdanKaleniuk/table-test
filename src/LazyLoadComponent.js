import React, { useEffect, useState } from "react";
import DummyTable from "./DummyTable";
import DummyChart from "./DummyChart";
import DummyList from "./DummyList";

const LazyLoadComponent = ({ path }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import(`./${path}`).then((module) => {
      setComponent(module.default);
    });
  }, [path]);

  return Component ? <Component /> : <div>Loading...</div>;
};

export default LazyLoadComponent;
