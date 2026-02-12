import "./login.css"
export default function login() {
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
                    <input placeholder="Email" name="" id="" className="loginInput" />
                    <input placeholder="Password" name="" id="" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
