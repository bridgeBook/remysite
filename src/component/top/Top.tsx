import "./Top.css";

function Top() {
  return (
    <>
      <div className="top">
        <div className="topMenu">
          <div className="topMenu_left">
            <div className="topHome">○</div>
          </div>
          <div className="topMenu_right">
            <div className="topMenu_about">about</div>
            <div className="topMenu_sample">sample</div>
            <div className="topMenu_contact">contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
