import React, { useState } from "react";

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <label className="block relative">
      <span className="text-sm text-slate-600">Senha</span>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 pr-12"
        placeholder="••••••••"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-2 top-9 text-sm opacity-70 hover:opacity-100"
      >
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </label>
  );
}
