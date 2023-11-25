/* eslint-disable no-unused-vars */

function MicrophoneIcon() {
  const strokeColor = {
    stroke: "#F155BD",
  };
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 6.98987C7 5.66379 7.52677 4.39203 8.46445 3.45435C9.40213 2.51666 10.6739 1.98987 12 1.98987C13.3261 1.98987 14.5978 2.51666 15.5355 3.45435C16.4732 4.39203 17 5.66379 17 6.98987V12.9899C17 14.316 16.4732 15.5878 15.5355 16.5255C14.5978 17.4632 13.3261 17.9899 12 17.9899C10.6739 17.9899 9.40213 17.4632 8.46445 16.5255C7.52677 15.5878 7 14.316 7 12.9899V6.98987Z"
          style={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.9899C21 15.3768 20.0518 17.6661 18.364 19.3539C16.6761 21.0417 14.3869 21.9899 12 21.9899C9.61305 21.9899 7.32384 21.0417 5.63602 19.3539C3.94819 17.6661 3 15.3768 3 12.9899"
          style={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default MicrophoneIcon;
