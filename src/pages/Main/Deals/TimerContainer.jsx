export default function TimerContainer({ count, title }) {
  return (
    <div className="timer-container-box">
      <h4>{count}</h4>
      <h6>{title}</h6>
    </div>
  )
}
