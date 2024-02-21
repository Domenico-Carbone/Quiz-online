import "./SummaryStats.css";

export default function SummaryStats({text, stats}) {
  return (
    <div>
      <p className="number">{stats}%</p>
      <p className="text">{text}</p>
    </div>
  );
}
