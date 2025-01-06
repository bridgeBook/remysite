import "./Top.css";

function Top() {

  const Scroll = () =>{
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="top">
        <div className="topMenu">
          <div className="topMenu_left">
            <div className="topHome">○</div>
          </div>
          <div className="topMenu_right">
            <a className="topMenu_about" onClick={Scroll}>about</a>
            <a className="topMenu_sample">sample</a>
            <a className="topMenu_contact">contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
