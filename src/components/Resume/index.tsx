const Resume = () => {
  return (
    <div className="row align-items-center">
      <div className="col-8 d-flex align-items-center gap-3">
        <div className="box-icon">
          <i className="bi bi-file-pdf"></i>
        </div>
        <p className="m-0">luis-rodriguez-resume.pdf</p>
      </div>
      <div className="col-4 text-end">
        <a
          href="/luis-rodriguez-resume.pdf"
          target="_blank"
          rel="noopener"
          className="btn btn-dark btn-sm"
        >
          <span className="me-2 d-none d-md-inline-block">Download</span>
          <i className="bi bi-download"></i>
        </a>
      </div>
    </div>
  );
};

export default Resume;
