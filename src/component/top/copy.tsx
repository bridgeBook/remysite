const copy = async () => {
      try {
        await navigator.clipboard.writeText("hashimotoknt1125@gmail.com");
        alert('クリップボードにコピーしました！');
      } catch (err) {
        alert('コピーに失敗しました: ' + err);
      }
}

export default copy;