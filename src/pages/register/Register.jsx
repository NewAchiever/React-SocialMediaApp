import "./register.css"
export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Socially</h3>
                <span className="loginDesc">
                    Connect with friend and the world aroung you on Socially.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" name="" id="" className="loginInput" />
                    <input placeholder="Email" name="" id="" className="loginInput" />
                    <input placeholder="Password" name="" id="" className="loginInput" />
                    <input placeholder="Re-Type Password" name="" id="" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Log Into Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
