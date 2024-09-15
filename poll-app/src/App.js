import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import PollDetail from "./components/PollDetail";
import Login from "./components/Login";
import CreatePoll from "./components/CreatePoll";
import LeaderBoard from "./components/LeaderBoard";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import Error from "./components/Error";
import HandleRoute from "./components/HandleRoute";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="login" exac element={<Login />}></Route>
        <Route
          path="/"
          element={
            <HandleRoute>
              <DashBoard />
            </HandleRoute>
          }
        ></Route>
        <Route
          path="/questions/:question_id"
          element={
            <HandleRoute>
              <PollDetail />
            </HandleRoute>
          }
        ></Route>
        <Route
          path="/leaderboard"
          element={
            <HandleRoute>
              <LeaderBoard />
            </HandleRoute>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <HandleRoute>
              <CreatePoll />
            </HandleRoute>
          }
        ></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default connect()(App);
