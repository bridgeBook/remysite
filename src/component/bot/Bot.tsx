import "./Bot.css";
import Scroll from "../Scroll.ts";

function Bot() {
  return (
    <>
      <div className="bot">
        <div className="home" onClick={() => Scroll(0)}>↑に戻る</div>
      </div>
    </>
  );
}

export default Bot;
