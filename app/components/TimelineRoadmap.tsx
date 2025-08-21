import Image from "next/image";

export default function TimelineRoadmap() {
  return (
    <div className="relative bg-gray-50 py-16 px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/background-pattern.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif font-semibold text-4xl text-green-900 mb-2">
          Timeline & Roadmap
        </h2>
        <p className="text-sm text-gray-700 mb-12">
          While most ESG systems rely on opaque scoring and manual verification,{" "}
          <br />
          Calyx transforms the process with
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="border-t border-orange-300 absolute top-10 left-0 right-0 mx-8"></div>

          {/* Timeline points */}
          <div className="flex justify-between items-start relative z-10">
            {[2021, 2022, 2023, 2024, 2025].map((year, index) => (
              <div key={year} className="flex flex-col items-center w-1/5">
                {/* Timeline dot */}
                <div className="w-3 h-3 bg-orange-300 rounded-full border border-orange-300"></div>

                {/* Year label */}
                <div className="mt-2 text-green-900 font-semibold font-serif">
                  {year}
                </div>

                {/* Text box */}
                <div className="mt-3 bg-orange-400 text-white text-xs max-w-xs text-center p-3 rounded-md relative">
                  Every score is backed by verifiable sources. Every score is
                  backed by verifiable sources.
                  {/* Arrow pointing up for alternating boxes (2022 and 2024) */}
                  {(index === 1 || index === 3) && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-orange-400"></div>
                    </div>
                  )}
                  {/* Arrow pointing down for 2021, 2023, 2025 */}
                  {(index === 0 || index === 2 || index === 4) && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-orange-400"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
