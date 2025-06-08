import Home from "./Pages/Home/Home";
import { useEffect } from "react";
const app = () => {
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("/api/generate");
      console.log(res.ok);
    };
    getUsers();
  }, []);
  return (
    <div className="container">
      <Home />
    </div>
  );
};

export default app;
