import "./App.css";
// import Button from "product/button";
import { Button as UIButton } from "@tw/ui-kit";
const App = () => {
  return (
    <div className="content">
      <h1>Admin Panel - rspack</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>        
        {/* <Button text="Product Button - from Product app"/> */}
        <UIButton text="Product Button - from UI Kit" className="blue"/>        
      </div>
    </div>
  );
};

export default App;
