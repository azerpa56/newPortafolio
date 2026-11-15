import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl mb-3 text-gray-900 dark:text-white">
          Esta página no existe
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Puede que el enlace esté mal escrito o que la página se haya movido.
          <br />
          <span className="text-sm">This page doesn&apos;t exist.</span>
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
