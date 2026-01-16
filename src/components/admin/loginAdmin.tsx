import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";


export function LoginAdmin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
          
        } catch (err) {
            setError("Correo o contraseña incorrectos");
        } finally {
            setLoading(false);
        }
    };
    return (

        <section className="relative w-full h-screen">
            <img
                src="/ImagenPrueba.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg w-full max-w-md">
                <img
                    src="/fondoLunas.png"
                    className="w-40 h-32 mx-auto mb-4 rounded-md object-cover"
                />

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Admin Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border p-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                    >
                        {loading ? "Entrando..." : "Login"}
                    </button>
                </form>
            </div>
        </section>
    );


}

