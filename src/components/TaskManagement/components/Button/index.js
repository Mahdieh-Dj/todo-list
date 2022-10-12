export default function Button({ children, clickHandler, title, className }) {
  return (
    <button
      title={title}
      className={`task-edit-btn ${className} `}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
