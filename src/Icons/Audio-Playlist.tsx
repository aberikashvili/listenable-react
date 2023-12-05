

const PlayListIcon = () => {
  const strokeColor = {
    stroke: "#F155BD"
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 22C15.2091 22 17 20.2091 17 18C17 15.7909 15.2091 14 13 14C10.7909 14 9 15.7909 9 18C9 20.2091 10.7909 22 13 22Z"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17.9899V9.07996C16.9991 7.66136 17.5008 6.28824 18.4161 5.20447C19.3315 4.1207 20.6012 3.39634 22 3.15991"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7H12"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11H12"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3H12"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlayListIcon;
