import "./index.css";
export default function ToggleButton({ checked, clickHandler }) {
  return (
    <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button r" id="button-2">
          <input
            type="checkbox"
            defaultChecked={!checked}
            onClick={clickHandler}
            className="checkbox"
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
}
