export default function Header({level, children}) {
    switch(level) {
        case 1:
            return (
                <h1 className="text-6xl font-bold mb-6">{children}</h1>
            );
        case 2:
            return (
                <h2 className="text-4xl font-bold mb-6">{children}</h2>
            );
        case 3:
            return (
                <h3 className="text-xl font-bold mb-4">{children}</h3>
            );
        default:
            return (
                <h1 className="text-6xl font-bold mb-6">{children}</h1>
            );
    }
}
