import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <h1 className="hero-title">
                Your Intelligent AI Assistant
            </h1>

            <p className="hero-subtitle">
                Chat • Code • Images • Documents • Voice
            </p>

            <div className="hero-input">

                <input
                    type="text"
                    placeholder="Ask anything..."
                />

                <button>
                    →
                </button>

            </div>

        </section>
    );
}

export default Hero;