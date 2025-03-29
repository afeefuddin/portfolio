export function Switch({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`w-10 h-6 rounded-full p-1 transition-all duration-300 ${
        checked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
