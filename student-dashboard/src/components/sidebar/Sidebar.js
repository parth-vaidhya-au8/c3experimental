import "./Sidebar.css";
//import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>Student Dashboard</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Home</a>
        </div>
      <div>


      </div>
        <div className="sidebar__link">
          <a href="#">DashBoard</a>
        </div>
        <div className="sidebar__link">
          
          <a href="#">MY COURSES</a>
        </div>
        <div className="sidebar__link">
          
          <a href="#">ACHIEVEMENTS</a>
        </div>
        <div className="sidebar__link">
         
          <a href="#">FORUM</a>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
