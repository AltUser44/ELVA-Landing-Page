export function ElvaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/elva-bot.png"
        alt="Elva Logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
