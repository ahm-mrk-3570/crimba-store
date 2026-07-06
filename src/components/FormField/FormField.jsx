import './FormField.css';

const FormField = ({ label, name, placeholder, required, value, onChange, error }) => (
  <div className="ap-field">
    <label className="ap-label">
      {label}
      {required && <span className="ap-required">*</span>}
    </label>
    <input
      className={`ap-input ${error ? "ap-input--error" : ""}`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
    {error && <span className="ap-error-msg">{error}</span>}
  </div>
);

export default FormField;