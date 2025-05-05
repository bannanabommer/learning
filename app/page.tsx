import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Cheese of sil</h1>
      <Image 
      src="/goatCheeseWheel.webp"
      width={175}
      height={225}
      alt="ultimate cheese"></Image>
    </>
  );
}
