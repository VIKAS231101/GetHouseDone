import bg from "../assets/bg.jpg";

function History() {
  const data = [
    { cost: "₹172800", date: "2026-03-02" },
    { cost: "₹8640000", date: "2026-03-02" },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-20">
        <h1 className="text-5xl font-bold mb-10">Estimate History</h1>

        <div className="space-y-6 max-w-2xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl flex justify-between"
            >
              <span className="text-xl font-semibold">{item.cost}</span>
              <span className="text-gray-300">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;