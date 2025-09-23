import React from "react";

export default function VisualPanel() {
  return (
    <div className="hidden md:block relative p-8 bg-gradient-to-tr from-indigo-600 to-purple-500 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
      <div className="relative z-10 flex flex-col h-full justify-center gap-6">
        <h2 className="text-3xl font-bold">Bem-vindo de volta</h2>
        <p className="text-sm opacity-90">
          Faça login para continuar no painel. Segurança e simplicidade no acesso.
        </p>
        <button
          onClick={() => alert("Demo: insira aqui um CTA para cadastro")}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 hover:bg-white/25 transition"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
