import React from "react";

export default function SocialButtons() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3 my-2">
        <hr className="flex-1" />
        <span className="text-sm text-slate-400">ou</span>
        <hr className="flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button type="button" className="rounded-lg border px-4 py-2">
          Google
        </button>
        <button type="button" className="rounded-lg border px-4 py-2">
          Facebook
        </button>
      </div>
    </div>
  );
}
