import "./LoadingMessage.css";

export const LoadingMessage = () => {
  return (
    <div className="loading-message">
      <h2>
        <span>Loading</span>
        <span className="text-red">...</span>
      </h2>
    </div>
  );
};
