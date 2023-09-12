import React from "react";
import internal from "stream";

interface Inputfield {
  text?: string;
  type: string;
}

function Inputfield(prop: Inputfield) {
  return (
    <div>
      <input
        type={prop.type}
        required
        className="bg-slate-300 focus:bg-blue-200 rounded mb-2 py-2 text-lg text-center"
        placeholder={prop.text}
      />
    </div>
  );
}

export default Inputfield;
