export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center gap-3">
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-blue-500" />
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-purple-500 [animation-delay:120ms]" />
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-indigo-500 [animation-delay:240ms]" />
        <p className="ml-2 text-sm font-medium">Cargando portfolio...</p>
      </div>
    </div>
  );
}
