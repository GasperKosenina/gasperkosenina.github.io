"use client";

/** Browser's own print-to-PDF. No PDF library, no server, no generated file. */
export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()}>
      Download PDF
    </button>
  );
}
