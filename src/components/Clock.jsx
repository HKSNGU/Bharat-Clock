let d = new Date();
var date = d.toLocaleDateString();
var time = d.toLocaleTimeString();

function Clock() {
  return (
    <>
      <p>
        This is the current time: {date} - {time}{" "}
      </p>
    </>
  );
}

export default Clock;
