import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const tabContent = [
  {
    title: "Section Title 1",
    content: "Content of section 1"
  },
  {
    title: "Section Title 2",
    content: "Content of section 2"
  },
  {
    title: "Section Title 3",
    content: "Content of section 3"
  }
];

const solution = (N, K) => {
  const remainder0 = 9 - parseInt(N.toString()[0]);
  const remainder1 = 9 - parseInt(N.toString()[1]);
  const remainder2 = 9 - parseInt(N.toString()[2]);

  if (remainder0 + remainder1 + remainder2 <= K)
    return 999;

  if (remainder0 >= K) {
    return N + K * 100;
  } else if (remainder1 + remainder0 >= K) {
    return N + remainder0 * 100 + (K - remainder0) * 10;
  } else {
    return N + remainder0 * 100 + remainder1 * 10 + (K - remainder0 - remainder1);
  }
}

console.log(solution(191, 40));

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, element => {
      if (!React.isValidElement(element)) return;
      const { props: { tab, children } } = element;
      data.push({ tab, children })
    })

    setTabsData(data)
  }, [children])


  return (
    <div >
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        {tabsData.map(({ tab }, idx) => (
          <li className="nav-item">
            <button
              className='btn'
              disabled={`${idx === activeTab ? "active" : ""}`}
              href="#"
              onClick={() =>
                setActiveTab(idx)
              }
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className='tab-content p-3'>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  )
}

const TabPane = ({ children }) => {
  return { children }
}

Tab.TabPane = TabPane;

export default function Tabs() {


  return (
    <div className='row text-left'>
      <Tab active={0}>
        {
          tabContent.map((tab, idx) => <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>{tab.content}
          </Tab.TabPane>)
        }
      </Tab>
    </div>
  )
}
