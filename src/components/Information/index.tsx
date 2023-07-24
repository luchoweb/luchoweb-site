import { information } from "../../services/information";

const Information = () => {
  return (
    <div className="row align-items-center">
      {information.map((info, index) => (
        <div className={`col-12 col-md-6 ${index < 2 ? "mb-4" : index === 2 ? "mb-4 mb-md-0" : ""}`}>
          <div className="d-flex align-items-center gap-3">
            <div className="box-icon">
              <i className={`bi bi-${info.icon}`}></i>
            </div>
            <p className="m-0">
              <strong className="d-block">{info.data}</strong>
              <span className="text-secondary">{info.label}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Information;
