export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-zinc-400 mb-2">Step {step} of 8</p>
      <div className="max-w-md mx-auto h-2 bg-zinc-800 rounded-full">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
          style={{ width: `${(step / 8) * 100}%` }}
        />
      </div>
    </div>
  );
}