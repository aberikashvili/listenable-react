


function AudioIcon() {
    const strokeColor = {
        stroke:"#F155BD"
    }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22C8.20914 22 10 20.2091 10 18C10 15.7909 8.20914 14 6 14C3.79086 14 2 15.7909 2 18C2 20.2091 3.79086 22 6 22Z"
        style={strokeColor}
        strokeWidth="1.5" // Corrected from "stroke-width"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 20C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20Z"
        style={strokeColor}
        strokeWidth="1.5" // Corrected from "stroke-width"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.9899V9.07996C9.99907 7.66136 10.5008 6.28824 11.4162 5.20447C12.3315 4.1207 13.6012 3.39634 15 3.15991L22 1.98987V15.9899"
        style={strokeColor}
        strokeWidth="1.5" // Corrected from "stroke-width"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AudioIcon; // Updated the export name
