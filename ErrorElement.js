import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import UserContext from "../../Hooks/UserContext";

const ErrorElement = () => {
  const { user } = useContext(UserContext);
  const error = useRouteError();

  return (
    <div className="relative flex flex-col bg-new-bg-color">
      {user && <Header />}
      <main className="mt-[3.15rem] flex h-[calc(100vh-3.15rem)] whitespace-nowrap bg-new-bg-color dark:bg-dark-bg-color">
        {user && <Nav />}
        <div className="outlet-border z-[1] mt-1 w-full overflow-y-auto bg-new-text-color p-4 text-new-bg-color dark:p-10">
          {/* Updated error content */}
        </div>
      </main>
    </div>
  );
};

export default ErrorElement;
