import "./styles.css";
import Machine from "./Machine";

function getXorYorZ() {
  let xyz = "XYZ";
  let number = Math.random() * 2; // [0, 2]

  let roundoff = Math.round(number); // 0, 1, 2
  return xyz[roundoff];
}

export default function App() {
  return (
    <div className="App">
      <Machine v1={getXorYorZ()} v2={getXorYorZ()} v3={getXorYorZ()} />
    </div>
  );
}

// X, Y, Z
// XXX, YYY, ZZZ You Win
// Any other case You Lose
// <Machine v1="X" v2="X" v3="Y">
