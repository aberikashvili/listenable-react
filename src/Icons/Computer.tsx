
function ComputerIcon() {
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
        d="M17.5 3.00006H6.5C5.37366 2.93715 4.26817 3.32249 3.42502 4.07196C2.58187 4.82143 2.06958 5.87411 2 7.00006V13.0001C2.06958 14.126 2.58187 15.1787 3.42502 15.9282C4.26817 16.6776 5.37366 17.063 6.5 17.0001H17.5C18.6263 17.063 19.7318 16.6776 20.575 15.9282C21.4181 15.1787 21.9304 14.126 22 13.0001V7.00006C21.9304 5.87411 21.4181 4.82143 20.575 4.07196C19.7318 3.32249 18.6263 2.93715 17.5 3.00006V3.00006Z"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V21"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9004 21H7.90039"
        style={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ComputerIcon;
