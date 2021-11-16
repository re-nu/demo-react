import { useState } from 'react';

export function Count() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  console.log(like, dislike);
  return (
    <div className="btnlnd">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>

  );
}
