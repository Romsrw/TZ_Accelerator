import { useState } from "react";
import "./App.css";

const BUTTONS = [1, 2, 3];

const App = () => {
  const [mainBtn, setMainBtn] = useState(1);
  const [isShowButtons, setIsShowButtons] = useState(false);
  const [rowButtons, setRowButtons] = useState(BUTTONS);

  const handleClickBtn = () => {
    setIsShowButtons((prev) => (!rowButtons.length ? true : !prev));
    if (!rowButtons.length) {
      setRowButtons(BUTTONS);
    }
  };

  return (
    <div className="wrapper">
      <button onClick={handleClickBtn}>{mainBtn}</button>

      {isShowButtons &&
        rowButtons.map((item) => (
          <button
            key={item}
            onClick={() => {
              setMainBtn(item);
              setRowButtons((prev) => prev.filter((btn) => btn !== item));
            }}
          >
            {item}
          </button>
        ))}
    </div>
  );
};

export default App;
