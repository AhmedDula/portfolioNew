export default function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-gray-300 mb-1">
        <span>{name}</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-300 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
