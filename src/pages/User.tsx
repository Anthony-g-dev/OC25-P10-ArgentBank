import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Account } from "../components/Account";

const accounts = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: 2082.79,
        amountDescription: "Available balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: 10928.42,
        amountDescription: "Available balance",
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: 184.30,
        amountDescription: "Current balance",
    }
]

const USERNAME = "Username"

export function User() {
    return <>
        <Header authenticated={true}/>
        <main className="bg--dark flex--1">
            <div className="header">
                <h1>Welcome back<br/>{USERNAME} !</h1>
                <button className="editButton">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="accounts">
                {accounts.map((account, index) => <Account key={index} {...account}/>)}
            </section>
        </main>
        <Footer/>
    </>
}