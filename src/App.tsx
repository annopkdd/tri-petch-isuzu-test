import { MobileSize, TableAndDesktopSize } from "./components";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="hidden md:block">
        <TableAndDesktopSize />
      </div>
      <div className="block md:hidden">
        <MobileSize />
      </div>
    </div>
  );
}

export default App;
