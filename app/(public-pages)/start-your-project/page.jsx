import { ArrowRightIcon } from "lucide-react";

export default function StartProjectPage() {
  const stages = ["Idea", "Prototype", "MVP", "Production"];

  return (
    <main className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Start Your Project</h1>
          <p className="text-white/70">
            Tell us about your idea, current stage, and goals — we’ll help turn
            it into a real, market-ready product.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <div>
              <label className="block text-sm mb-3 text-white/80">
                Project Stage
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stages.map((stage) => (
                  <label
                    key={stage}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition"
                  >
                    <input
                      type="radio"
                      name="project_stage"
                      value={stage.toLowerCase()}
                      className="accent-primary"
                    />
                    <span className="text-sm text-white/90">{stage}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-white/80">
                Project Type
              </label>
              <select
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-primary"
              >
                <option value="" disabled className="text-black">
                  Project Type
                </option>
                <option className="text-black">IoT</option>
                <option className="text-black">Embedded System</option>
                <option className="text-black">Mobile App</option>
              </select>
            </div>

            <textarea
              rows="5"
              placeholder="Project Details"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary resize-none"
            />

            <input
              type="text"
              placeholder="Expected Timeline (e.g. 2 months)"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <input
              type="text"
              placeholder="Estimated Budget"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <button className="btn rounded-lg flex items-center justify-center gap-2 px-6 py-3 w-full">
              Submit Project
              <ArrowRightIcon className="size-4" />
            </button>
          </form>
        </div>

        <p className="text-center text-white/60 mt-6 text-sm">
          Prefer email? Reach us at{" "}
          <a
            href="mailto:contact@nullabz.com"
            className="underline hover:text-white"
          >
            contact@nullabz.com
          </a>
        </p>
      </div>
    </main>
  );
}