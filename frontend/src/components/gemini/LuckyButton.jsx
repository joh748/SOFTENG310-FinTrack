// LuckyAdviceButton.jsx
import React from 'react';

function LuckyButton({ onGetAdvice }) {
  const handleClick = () => {
    onGetAdvice();
  };

  return (
    <button onClick={handleClick} className="btn btn-success">
      I'm Feeling Lucky!
    </button>
  );
}

export default LuckyButton;
