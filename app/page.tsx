export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-50 p-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-neuron-purple">
          Proyecto Neuron
        </h1>
        <p className="text-gray-500">Sistema de Diseño v1.0</p>
      </div>
      
      {/* Grilla de Colores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta Amarilla */}
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-neuron-yellow shadow-xl transition-transform hover:scale-105">
          <span className="text-2xl">🧪</span>
          <span className="font-bold text-white mt-2">Ciencia</span>
          <span className="text-xs text-white/80">--neuron-yellow</span>
        </div>

        {/* Tarjeta Rosada */}
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-neuron-pink shadow-xl transition-transform hover:scale-105">
          <span className="text-2xl">🎉</span>
          <span className="font-bold text-white mt-2">Diversión</span>
          <span className="text-xs text-white/80">--neuron-pink</span>
        </div>

        {/* Tarjeta Celeste */}
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-neuron-cyan shadow-xl transition-transform hover:scale-105">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-white mt-2">Futuro</span>
          <span className="text-xs text-white/80">--neuron-cyan</span>
        </div>
      </div>
    </main>
  );
}