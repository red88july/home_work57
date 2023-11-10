const Toolbar = () => {
  return (
    <>
      <nav className="navbar bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png" alt="Logo" width="55" height="55" className="d-inline-block align-text-top" />
              <h3 className="d-inline-block ms-5">User managment application</h3>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;