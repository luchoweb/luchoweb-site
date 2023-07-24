const Information = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-6 mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="box-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <p className="m-0">
            <strong className="d-block">luchoweb.dev@gmail.com</strong>
            <span className="text-secondary">Email address</span>
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="box-icon">
            <i className="bi bi-phone"></i>
          </div>
          <p className="m-0">
            <strong className="d-block">+57 324-680-2820</strong>
            <span className="text-secondary">Phone number</span>
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="d-flex align-items-center gap-3">
          <div className="box-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <p className="m-0">
            <strong className="d-block">Soledad, Atlántico</strong>
            <span className="text-secondary">Location</span>
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="d-flex align-items-center gap-3">
          <div className="box-icon">
            <i className="bi bi-mouse"></i>
          </div>
          <p className="m-0">
            <strong className="d-block">Remote</strong>
            <span className="text-secondary">Work Type</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information;
