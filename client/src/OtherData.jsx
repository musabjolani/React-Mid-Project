import { Outlet, useParams } from "react-router";
import "./App.css";

function OtherData() {
  const { userId } = useParams();
  return <Outlet context={userId}></Outlet>;
}

export default OtherData;
