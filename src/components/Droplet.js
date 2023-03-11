import { number, bool } from "prop-types";

const FilledDropletPath = ({ width }) => (
  <path
    fill="#000"
    className="cls-1"
    d="M9,7.55A4.52,4.52,0,0,1,4.49,12,4.53,4.53,0,0,1,0,7.55C0,5.13,4.49,0,4.49,0S9,5,9,7.55Z"
  />
);

const EmptyDropletPath = ({ width }) => (
  <path
    fill="#000"
    d="M4.48,1.54C6.06,3.46,8,6.22,8,7.55A3.52,3.52,0,0,1,4.47,11,3.53,3.53,0,0,1,1,7.55c0-1.22,1.86-4,3.51-6M4.47,0S0,5.13,0,7.55A4.53,4.53,0,0,0,4.47,12,4.52,4.52,0,0,0,9,7.55C9,5,4.47,0,4.47,0Z"
  />
);

const Droplet = ({ isFilled, width }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-testid="droplet-icon"
        viewBox="0 0 9 12"
        width={width}
        height={width * (4 / 3)}
      >
        <defs>
          <style>{`.cls-1{fill-rule:evenodd;}`}</style>
        </defs>
        <title>droplet</title>
        {isFilled ? <FilledDropletPath /> : <EmptyDropletPath />}
      </svg>
    );
};

Droplet.propTypes = {
  isFilled: bool,
  width: number,
};

Droplet.defaultProps = {
  isFilled: false,
  width: 9,
};

export default Droplet;