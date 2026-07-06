export default function InputBox({ title, id, placeHolder }) {
  return (
    <div className='middle-input-field'>
      <label htmlFor={id}>{title}</label>
      <input type="text" id={id} className='field-input' placeholder={placeHolder} />
    </div>
  )
}
