import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
    return (
        <button className="btn">
            {children}
        </button>
    );
}

export default Button;