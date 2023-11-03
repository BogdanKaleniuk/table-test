import tabsData from "./tabs.json";
import React, { useEffect, useState, Suspense } from "react";
import { Route, Link, Routes } from "react-router-dom";

// Імпортуйте ваші компоненти з відкладеним завантаженням за допомогою React.lazy()
const DummyTable = React.lazy(() => import("./DummyTable"));
const DummyChart = React.lazy(() => import("./DummyChart"));
const DummyList = React.lazy(() => import("./DummyList"));

const TabsComponent = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  const handleTabChange = async () => {
    console.log("sds");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link to={`/${tab.id}`} onClick={handleTabChange}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={
              <Suspense fallback={<div>{loading ? "Loading..." : null}</div>}>
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
