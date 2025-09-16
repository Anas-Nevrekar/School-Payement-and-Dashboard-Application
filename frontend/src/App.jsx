import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import CreatePayment from "./CreatePayment";
import Call_Back_Page from "./Call_Back_Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-payment" element={< CreatePayment />} />
      <Route path="/payment/callback" element={<Call_Back_Page />} />
    </Routes>
  );
}

export default App;