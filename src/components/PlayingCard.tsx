interface PlayingCardProps {
  isFlipped: boolean;
  symbol: string;
  color: string;
}

export const PlayingCard = ({ isFlipped, symbol, color } : PlayingCardProps) => {
  return (
    <div className="h-36 w-24 bg-transparent">
      <div className={`relative h-full w-full preserve-3d transition-transform duration-1000 ${isFlipped && 'my-rotate-y-180'}`}>
      <div id="front" className="absolute h-full w-full backface-hidden border-8 border-white bg-red-400 rounded-lg"></div>
      <div id="back" className="absolute h-full w-full backface-hidden my-rotate-y-180 bg-white rounded-lg">
        <div className="flex h-full justify-center items-center">
          <span className={`font-mono text-9xl ${color}`}>{symbol}</span>
        </div>
      </div>
    </div>
  </div>
  )
}
