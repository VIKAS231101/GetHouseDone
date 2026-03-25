import { useState } from "react";
import CostForm from "../components/CostForm";
import CostBreakdown from "../components/CostBreakdown";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }} // using public folder method
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">
          AI Construction Cost Estimator
        </h1>

        <div className="bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-4xl">
          <CostForm setResult={setResult} />
        </div>

        {result && (
          <div className="mt-10 bg-black/60 backdrop-blur-md p-8 rounded-2xl w-full max-w-4xl">
            <CostBreakdown result={result} />
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;