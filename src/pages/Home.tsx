import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";

const features = [
    {
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        icon: "chat"
    },
    {
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!",
        icon: "money"
    },
    {
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe.",
        icon: "security"
    }
]

export function Home() {
    return <>
        <Header/>
        <section className="hero">
            <div className="hero__content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="hero__title">No fees.<br/>No minimum deposit.<br/>High interest rates.</p>
                <p className="hero__text">Open a savings account with Argent Bank today!</p>
            </div>
        </section>
        <section className="features">
            {features.map((feature, index) => <Feature key={index} title={feature.title} description={feature.description} icon={feature.icon}/>)}
        </section>
        <Footer/>
    </>
}