import Link from "next/link";
import RotatingCheeseWheel from "./RoatingCheeseWheel";

export default function Home() {
  return (
    <>
      <script type="text/javascript" src="/guess-number.js" />
      <h1>Cheese of sil</h1>
      <RotatingCheeseWheel imageUrl="/GoatCheeseWheel.webp" />
      <Link href="/guess-my-number" >Guess My Number</Link>
    </>
  );
}