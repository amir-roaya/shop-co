export default function Loading({ textColor }: { textColor: string }) {
  return (
    <div className={`font-integral-cf tracking-wider text-${textColor}`}>
      Loading
      <span className="animate-loading [animation-delay:0ms]">.</span>
      <span className="animate-loading [animation-delay:200ms]">.</span>
      <span className="animate-loading [animation-delay:400ms]">.</span>
    </div>
  );
}
