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
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            Dashboard
            <ul className="sidebarList">
              <Link to="/" /* target={"_blank"} */ className="link">
                <li className="sidebarListItem">
                  <Home classname="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/companymasters" target={"_blank"} className="link">
                <li className="sidebarListItem">
                  <BusinessOutlined classname="sidebarIcon" />
                  Company Masters
                </li>
              </Link>
              <li className="sidebarListItem">
                <TrendingUp classname="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarTitle">
            Quick Menu
            <ul className="sidebarList">
              <Link to="/users" target={"_blank"} className="link">
                <li className="sidebarListItem">
                  <Person />
                  Users
                </li>
              </Link>
              <Link to="/products" target="/products" className="link">
                <li className="sidebarListItem">
                  <Store />
                  Products
                </li>
              </Link>
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
