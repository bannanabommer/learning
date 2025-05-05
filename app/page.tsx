import Image from "next/image";

export default function Home() {
  return (
    <>
      <script type="text/javascript" src="/guess-number.js" />
      <h1>Cheese of sil</h1>
      <Image 
      src="/goatCheeseWheel.webp"
      width={175}
      height={175}
      alt="ultimate cheese"></Image>
    </>
  );
}
