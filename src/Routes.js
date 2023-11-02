import tabsData from "./tabs.json";
import React, { useEffect, useState, Suspense } from "react";
import { Route, Link, Routes, Outlet } from "react-router-dom";

const DummyTable = React.lazy(() => import("./DummyTable"));
const DummyChart = React.lazy(() => import("./DummyChart"));
const DummyList = React.lazy(() => import("./DummyList"));

const TabsComponent = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link to={`/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {tab.id === "dummyTable" ? (
                  <DummyTable title={tab.title} order={tab.order} />
                ) : tab.id === "dummyChart" ? (
                  <DummyChart title={tab.title} order={tab.order} />
                ) : tab.id === "dummyList" ? (
                  <DummyList title={tab.title} order={tab.order} />
                ) : null}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default TabsComponent;
