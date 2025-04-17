import "./Top.css";
import React, { useState } from 'react';
import Scroll from "../Scroll.ts";

function Top() {

  const text = 'hashimotoknt1125@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // 3秒後にメッセージを非表示にする
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      alert('コピーに失敗しました: ' + err);
    }
  };

  return (
    <>
      <div className="top">
        <div className="topMenu">
          <div className="topMenu_left">
            <div className="topHome" onClick={() => Scroll(0)}>home</div>
          </div>
          <div className="topMenu_right">
            <a className="topMenu_about" onClick={() => Scroll(1000)}>about</a>
            <a className="topMenu_sample" onClick={() => Scroll(2000)}>history</a>
            <a className="topMenu_contact" onClick={() => { handleCopy() }}>contact</a>
          </div>
        </div>
        <div className={`fade-message ${copied ? 'visible' : ''}`}>
          メールアドレスを取得しました
        </div>
      </div>
    </>
  );
}

export default Top;
