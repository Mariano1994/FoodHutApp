import { useRouteError } from "react-router-dom";

export const ErrorMessage = () => {
  const error = useRouteError();

  return (
    <>
      <div className=" grid place-content-center h-screen bg-bg-primary">
        <div className=" flex flex-col items-center content-center gap-[1.5rem]">
          <h1 className=" text-huge text-primary ">{error.status}</h1>
          <h2 className=" text-5xl">{`Page ${error.statusText}`}</h2>
        </div>
      </div>
    </>
  );
};
