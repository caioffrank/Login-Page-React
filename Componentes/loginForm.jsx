import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import SocialButtons from "./SocialButtons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!email) return "Informe o e-mail.";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return "E-mail inválido.";
    if (!password) return "Informe a senha.";
    if (password.length < 6) return "Senha deve ter ao menos 6 caracteres.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900)); // Simulação
      alert("Login efetuado (simulação). Conecte sua API real aqui.");
    } catch {
      setError("Erro ao autenticar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 md:p-12 max-w-md mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Entrar na sua conta</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm bg-red-50 p-2 rounded">{error}</div>}

        <label className="block">
          <span className="text-sm text-slate-600">E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3"
            placeholder="seu@exemplo.com"
          />
        </label>

        <PasswordInput value={password} onChange={setPassword} />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="form-checkbox h-4 w-4"
            />
            <span>Lembrar-me</span>
          </label>
          <button type="button" className="text-indigo-600 hover:underline">
            Esqueceu a senha?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg px-4 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <SocialButtons />
    </div>
  );
}
