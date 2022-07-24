import { FC, useState } from "react";

import { Popup, steps } from "../../base";

import "./Home.style.scss";

const Home: FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="home">
      <h2>Home page</h2>
      <div
        className="pointer"
        title="please click!"
        onClick={() => setOpenPopup(true)}
      >
        click to show popup window
      </div>
      {openPopup ? (
        <Popup
          steps={steps}
          length={3}
          setOpenPopup={() => setOpenPopup(false)}
        />
      ) : null}
    </div>
  );
};

export default Home;
