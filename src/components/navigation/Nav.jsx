import "./Nav.css";

function Nav() {
  return (
    <>
      <aside className="navigation">
        <nav>
          <li>
            <div className="circle">1</div>
            <div>
              <div className="step">STEP 1</div>
              <div className="stepName">YOUR INFO</div>
            </div>
          </li>

          <li>
            <div className="circle">2</div>
            <div>
              <div className="step">STEP 2</div>
              <div className="stepName">SELECT PLAN</div>
            </div>
          </li>
          <li>
            <div className="circle">3</div>
            <div>
              <div className="step">STEP 3</div>
              <div className="stepName">ADD-ONS</div>
            </div>
          </li>
          <li>
            <div className="circle">4</div>
            <div>
              <div className="step">STEP 4</div>
              <div className="stepName">SUMMARY</div>
            </div>
          </li>
        </nav>
      </aside>
    </>
  );
}

export default Nav;
