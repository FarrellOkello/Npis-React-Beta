// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// // const Tab = ({ children, active = 0 }) => {
// //     const [activeTab, setActiveTab] = useState(active);
// //     const [tabsData, setTabsData] = useState([]);

// //     useEffect(() => {
// //         let data = [];

// //         React.Children.forEach(children, element => {
// //             if (!React.isValidElement(element)) return;
// //             const { props: { tab, children } } = element;
// //             data.push({ tab, children })
// //         })

// //         setTabsData(data)
// //     }, [children])

// //     return (
// //         <div >
// //             <ul style={{ listStyle: 'none', display: 'flex', height: 100 }}>
// //                 {tabsData.map(({ tab }, idx) => (
// //                     <li className="nav-item">
// //                         <button
// //                             disabled={`${idx === activeTab ? "active" : ""}`}
// //                             href="#"
// //                             onClick={() =>
// //                                 setActiveTab(idx)
// //                             }
// //                         >
// //                             {tab}
// //                         </button>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <div className='tab-content p-3'>
// //                 {tabsData[activeTab] && tabsData[activeTab].children}
// //             </div>
// //         </div>
// //     )
// // }

// // const TabPane = ({ children }) => {
// //     return { children }
// // }

// // Tab.TabPane = TabPane;

// export default Tab
