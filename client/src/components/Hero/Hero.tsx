import "./Hero.css";


function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">
                    🚀 Powered by OpenMind AI
                </span>

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

            </div>

        </section>
    );
}

export default Hero;