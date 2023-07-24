import "./styles.scss";

const Profile = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md-8 d-flex align-items-center gap-4">
        <picture className="profile__photo">
          <img src="/images/photo.jpeg" alt="Luis Rodríguez" height={80} width={80} />
        </picture>

        <div className="profile__info">
          <h2 className="m-0">Luis Rodríguez</h2>
          <p className="m-0">Senior Software Developer</p>
        </div>
      </div>

      <div className="col-12 col-md-4 text-center text-md-end mt-3 mt-md-0">
        <div className="profile__social">
          <a href="https://www.linkedin.com/in/luchowebdev/" target="_blank" rel="noopener" className="btn btn-sm btn-linkedin me-2">
            <i className="bi bi-linkedin me-1"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/luchoweb" target="_blank" rel="noopener" className="btn btn-sm btn-dark">
            <i className="bi bi-github me-1"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile;
