import './SettingRow.css'

const SettingRow = ({ icon, title, description, right }) => (
  <div className="ps-row">
    <div className="ps-row__icon">{icon}</div>
    <div className="ps-row__text">
      <p className="ps-row__title">{title}</p>
      <p className="ps-row__desc">{description}</p>
    </div>
    <div className="ps-row__right">{right}</div>
  </div>
);

export default SettingRow;