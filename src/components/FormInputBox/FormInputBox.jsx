import './FormInputBox.css';

export default function FormInputBox({ title, placeHolder, color, isEdited, value }) {
  return (
    <div className="box-container">
      <label htmlFor="box-input">{title}</label>
      <input onChange={(e) => console.log(e.target.value)} value={value || ""} disabled={isEdited} style={{
        border : color ? `1px solid ${color}` : "1px solid var(--border-color)",
      }} placeholder={placeHolder ? `Enter ${placeHolder}` : ''} type="text" id='box-input' />
    </div>
  )
}
