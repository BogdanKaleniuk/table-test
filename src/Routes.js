import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import DummyTable from "./DummyTable";
import DummyChart from "./DummyChart";
import DummyList from "./DummyList";
import tabsData from "./tabs.json";

const TabsComponent = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <Router>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link to={`/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<DummyTable title={tab.title} order={tab.order} />}
          />
        ))}
        <Route path="/dummyChart" element={<DummyChart />} />
        <Route path="/dummyList" element={<DummyList />} />
      </Routes>
    </Router>
  );
};

export default TabsComponent;
