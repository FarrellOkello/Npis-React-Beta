import { Visibility } from "@material-ui/icons";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="wigetSmUser">
            <span className="widgetSmUsername">Atwau Paul</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="wigetSmUser">
            <span className="widgetSmUsername">Balitema Paul</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="wigetSmUser">
            <span className="widgetSmUsername">Walujo Emmanuel</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="wigetSmUser">
            <span className="widgetSmUsername">Okello Farrel</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="wigetSmUser">
            <span className="widgetSmUsername">Enamul Hassan</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
