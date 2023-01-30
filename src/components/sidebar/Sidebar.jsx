import {
  BusinessOutlined,
  DynamicFeed,
  Home,
  MailOutline,
  Message,
  Person,
  Store,
  TrendingUp,
} from "@material-ui/icons";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Dashboard
            <ul className="sidebarList">
              <a href="/" className="link">
                <li className="sidebarListItem">
                  <Home classname="sidebarIcon" />
                  Home
                </li>
              </a>
              <a href="/companymasters" className="link">
                <li className="sidebarListItem">
                  <BusinessOutlined classname="sidebarIcon" />
                  Company Masters
                </li>
              </a>
              <li className="sidebarListItem">
                <TrendingUp classname="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarTitle">
            Quick Menu
            <ul className="sidebarList">
              <a href="/users" className="link">
                <li className="sidebarListItem">
                  <Person />
                  Users
                </li>
              </a>
              <a href="/products" className="link">
                <li className="sidebarListItem">
                  <Store />
                  Products
                </li>
              </a>
              <li className="sidebarListItem">
                <TrendingUp />
                Transactions
              </li>
              <li className="sidebarListItem">
                <TrendingUp />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarTitle">
            Notifications
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed />
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message />
                Messages
              </li>
            </ul>
          </div>
          {/* <div className="sidebarTitle">
            Staff
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp />
                Reports
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
