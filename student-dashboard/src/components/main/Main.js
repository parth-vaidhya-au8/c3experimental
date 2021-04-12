import "./Main.css";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Hello Student</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
          <i className="fa fa-file fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">UPCOMING LESSONS</p>
              <div className="lessons"></div>
              <div className="task"></div>
              <div className="task"></div>
              <div className="task"></div>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-list fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">TASKS TO DO</p>
              <div className="lessons"></div>
              <div className="task"></div>
              <div className="task"></div>
              <div className="task"></div>

            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">LeaderBoard</p>
              <div className="lessons"></div>
              <div className="task"></div>
              <div className="task"></div>
              <div className="task"></div>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Graph</h1>
              </div>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>My Courses</h1>
              </div>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>MATHEMATICS</h1>
                <br>
                
                </br>
                <p>30 LESSONS</p>
              </div>

              <div className="card2">
                <h1>Physics</h1>
                <br></br>
                <p>32 LESSONS</p>
              </div>

              
              
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
