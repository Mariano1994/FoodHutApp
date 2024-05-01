import searchIcon from "../../assets/search-icon.svg";

export const NotFoundMessage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gpa-4 mb-20 mt-20">
        <img src={searchIcon} />
        <span className=" text-[2rem] font-semibold">
          Food <span className="text-primary">not</span> found
        </span>
      </div>
    </>
  );
};
