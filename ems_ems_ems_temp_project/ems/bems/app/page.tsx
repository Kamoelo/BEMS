import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-teal-700 text-white text-center py-10">
        <div className="text-3xl font-extrabold tracking-widest mt-2 mb-2 text-black">EMPULSE</div>
        <p className="text-lg text-black">Empower.Engage.Excel</p>
        <div className="flex justify-center mt-4 gap-2">
          <span className="w-3 h-3 bg-white rounded-full" />
          <span className="w-3 h-3 bg-gray-400 rounded-full" />
          <span className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </section>

      {/* Info */}
      <section className="bg-gray-200 text-center py-10 px-6">
    <p className="font-bold text-xl mb-4 text-black">An Employee Management system</p>
  <p className="max-w-3xl mx-auto text-black">
          It serves as a centralized hub, orchestrating and automating an array
          of tasks that span the entire employee lifecycle — from hiring and
          onboarding to evaluations and recognition.
        </p>
      </section>

      {/* Roles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-teal-700 py-10 text-white text-center">
        {["CEO", "COO", "CFO"].map((role) => (
          <div key={role}>
            <div className="w-24 h-24 bg-white text-teal-700 rounded-full mx-auto flex items-center justify-center text-4xl">
              👤
            </div>
            <p className="mt-2 font-medium">{role}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
