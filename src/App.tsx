import { useState } from 'react'
import { PlayingCard } from './components/PlayingCard'

function App() {
  const cards = [
    { suit: 'spades', value: 'A', symbol: '🂡', color: 'text-black' },
    { suit: 'spades', value: '2', symbol: '🂢', color: 'text-black' },	
    { suit: 'spades', value: '3', symbol: '🂣', color: 'text-black' },
    { suit: 'spades', value: '4', symbol: '🂤', color: 'text-black' },
    { suit: 'spades', value: '5', symbol: '🂥', color: 'text-black' },
    { suit: 'spades', value: '6', symbol: '🂦', color: 'text-black' },
    { suit: 'spades', value: '7', symbol: '🂧', color: 'text-black' },
    { suit: 'spades', value: '8', symbol: '🂨', color: 'text-black' },
    { suit: 'spades', value: '9', symbol: '🂩', color: 'text-black' },
    { suit: 'spades', value: '10', symbol: '🂪', color: 'text-black' },
    { suit: 'spades', value: 'J', symbol: '🂫', color: 'text-black' },
    { suit: 'spades', value: 'Q', symbol: '🂭', color: 'text-black' },
    { suit: 'spades', value: 'K', symbol: '🂮', color: 'text-black' },
    { suit: 'hearts', value: 'A', symbol: '🂱', color: 'text-red-500' },
    { suit: 'hearts', value: '2', symbol: '🂲', color: 'text-red-500' },
    { suit: 'hearts', value: '3', symbol: '🂳', color: 'text-red-500' },
    { suit: 'hearts', value: '4', symbol: '🂴', color: 'text-red-500' },
    { suit: 'hearts', value: '5', symbol: '🂵', color: 'text-red-500' },
    { suit: 'hearts', value: '6', symbol: '🂶', color: 'text-red-500' },
    { suit: 'hearts', value: '7', symbol: '🂷', color: 'text-red-500' },
    { suit: 'hearts', value: '8', symbol: '🂸', color: 'text-red-500' },
    { suit: 'hearts', value: '9', symbol: '🂹', color: 'text-red-500' },
    { suit: 'hearts', value: '10', symbol: '🂺', color: 'text-red-500' },
    { suit: 'hearts', value: 'J', symbol: '🂻', color: 'text-red-500' },
    { suit: 'hearts', value: 'Q', symbol: '🂽', color: 'text-red-500' },
    { suit: 'hearts', value: 'K', symbol: '🂾', color: 'text-red-500' },
    { suit: 'clubs', value: 'A', symbol: '🃑', color: 'text-black' },
    { suit: 'clubs', value: '2', symbol: '🃒', color: 'text-black' },
    { suit: 'clubs', value: '3', symbol: '🃓', color: 'text-black' },
    { suit: 'clubs', value: '4', symbol: '🃔', color: 'text-black' },
    { suit: 'clubs', value: '5', symbol: '🃕', color: 'text-black' },
    { suit: 'clubs', value: '6', symbol: '🃖', color: 'text-black' },
    { suit: 'clubs', value: '7', symbol: '🃗', color: 'text-black' },
    { suit: 'clubs', value: '8', symbol: '🃘', color: 'text-black' },
    { suit: 'clubs', value: '9', symbol: '🃙', color: 'text-black' },
    { suit: 'clubs', value: '10', symbol: '🃚', color: 'text-black' },
    { suit: 'clubs', value: 'J', symbol: '🃛', color: 'text-black' },
    { suit: 'clubs', value: 'Q', symbol: '🃝', color: 'text-black' },
    { suit: 'clubs', value: 'K', symbol: '🃞', color: 'text-black' },
    { suit: 'diamonds', value: 'A', symbol: '🃁', color: 'text-red-500' },
    { suit: 'diamonds', value: '2', symbol: '🃂', color: 'text-red-500' },
    { suit: 'diamonds', value: '3', symbol: '🃃', color: 'text-red-500' },
    { suit: 'diamonds', value: '4', symbol: '🃄', color: 'text-red-500' },
    { suit: 'diamonds', value: '5', symbol: '🃅', color: 'text-red-500' },
    { suit: 'diamonds', value: '6', symbol: '🃆', color: 'text-red-500' },
    { suit: 'diamonds', value: '7', symbol: '🃇', color: 'text-red-500' },
    { suit: 'diamonds', value: '8', symbol: '🃈', color: 'text-red-500' },
    { suit: 'diamonds', value: '9', symbol: '🃉', color: 'text-red-500' },
    { suit: 'diamonds', value: '10', symbol: '🃊', color: 'text-red-500' },
    { suit: 'diamonds', value: 'J', symbol: '🃋', color: 'text-red-500' },
    { suit: 'diamonds', value: 'Q', symbol: '🃍', color: 'text-red-500' },
    { suit: 'diamonds', value: 'K', symbol: '🃎', color: 'text-red-500' },
  ]

  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="h-full bg-lime-900">
      <button className="bg-blue-500 py-4 px-8 m-4 rounded" onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
      <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-row items-center justify-center flex-wrap gap-2">
        {cards.map((card) => <PlayingCard key={card.value + card.suit} isFlipped={isFlipped} symbol={card.symbol} color={card.color} />)}
      </div>
    </div>
    </div>
  )
}

export default App
