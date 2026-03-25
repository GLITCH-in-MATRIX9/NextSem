import Image from "next/image";

export default function NavigationButtons({
  type,
  onClick,
  disabled,
}: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-16 h-16 hover:scale-110 transition disabled:opacity-40"
    >
      <Image
        src={type === "next" ? "/next-arrow.svg" : "/prev-arrow.svg"}
        alt={type}
        width={64}
        height={64}
      />
    </button>
  );
}