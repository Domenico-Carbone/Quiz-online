import "./SummaryStats.css";

export default function SummaryStats({text, stats, max}) {
  return (
    <div>
      <p className="number">{stats === max ? stats+1 : stats}%</p>
      <p className="text">{text}</p>
    </div>
  );
}
