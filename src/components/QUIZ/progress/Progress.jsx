import "./Progress.css";

export default function Progress({remainingTime, timer}) {
  return <progress value={remainingTime} max={timer}></progress>;
}
