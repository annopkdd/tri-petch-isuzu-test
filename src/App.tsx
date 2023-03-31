import {
  BasketballerLine1,
  BasketballerLine2,
  BasketballerLine3,
  FootballerLine1,
  FootballerLine2,
  FootballerLine3,
} from "./components";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <FootballerLine1 />
      <FootballerLine2 />
      <FootballerLine3 />

      <BasketballerLine1 />
      <BasketballerLine2 />
      <BasketballerLine3 />
    </div>
  );
}

export default App;
