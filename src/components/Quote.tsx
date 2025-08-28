export default function Quote() {
  return (
    <blockquote 
      className="hidden md:flex flex-row gap-[10px] p-2 border border-[#ABB2BF] text-[#ABB2BF] font-mono text-base leading-[1.312em]"
      style={{ fontFamily: 'Fira Code, monospace' }}
    >
      <span>&quot;I like winter more than summer&quot;</span>
    </blockquote>
  );
}