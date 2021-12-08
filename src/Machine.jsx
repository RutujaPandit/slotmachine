let Machine = ({ v1, v2, v3 }) => {
  let text = "You Lose";
  if (v1 === v2 && v1 === v3) {
    text = "You Win!!!";
  }
  return (
    <div>
      <p>
        {v1} {v2} {v3}
      </p>
      <p>{text}</p>
    </div>
  );
};

// expression ? true case : false case
// (v1 === v2 && v1 === v3) ? "You Win!!": "You Lose"

export default Machine;
