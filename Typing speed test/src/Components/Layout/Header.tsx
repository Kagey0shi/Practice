import Logo from "../logo";
import Best from "../Best";

export default function Header({ bestWpm }: { bestWpm: number | null }) {
  return (
    <header>
      <Logo />
      <Best bestWpm={bestWpm} />
    </header>
  );
}
