import { FC, useState } from "react";

import "./Home.style.scss";
import { UnBoard, steps } from "../../base";

const Home: FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="home">
      <h2>Home page</h2>
      <div className="pointer" onClick={() => setOpenPopup(true)}>
        click to show popup window
      </div>
      {openPopup ? (
        <UnBoard
          steps={steps}
          length={3}
          setOpenPopup={() => setOpenPopup(false)}
        />
      ) : null}
    </div>
  );
};

export default Home;
