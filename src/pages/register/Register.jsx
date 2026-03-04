import "./register.css"
export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Socially</h3>
                <span className="registerDesc">
                    Connect with friend and the world aroung you on Socially.
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" name="" id="" className="registerInput" />
                    <input placeholder="Email" name="" id="" className="registerInput" />
                    <input placeholder="Password" name="" id="" className="registerInput" />
                    <input placeholder="Re-Type Password" name="" id="" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                    <span className="registerForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Log Into Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
