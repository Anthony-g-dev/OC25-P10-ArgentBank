import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function SignIn() {
    return <>
        <Header/>
        <main className="bg--dark flex--1">
            <section className="signInForm">
                <i className="fa-solid fa-circle-user signInForm__icon"></i>
                <h1 className="signInForm__title">Sign in</h1>
                <form className="signInForm__form">
                    <div className="inputWrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="inputRemember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="signInButton">Sign In</button>
                </form>
            </section>
        </main>
        <Footer/>
    </>
} 