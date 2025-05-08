import Link from "next/link";
import RotatingCheeseWheel from "./RoatingCheeseWheel";

export default function Home() {
  return (
    <>
      <header>
        <h1>Cheese of sil</h1>
      </header>
      <main className="grid grid-cols-5">
        <div>
          <Link className="block" href="/guess-my-number" >Guess My Number</Link>
          <Link className="block" href="/wizards-game" >Wizard Game</Link>
        </div>  
        <div className="col-span-4">
          <RotatingCheeseWheel imageUrl="/GoatCheeseWheel.webp" />
        </div>
      </main>
    </>
  );
}