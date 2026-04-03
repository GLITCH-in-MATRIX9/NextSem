"use client";

import Header from "./components/college/Header";
import Calendar from "./components/college/Calendar";
import SocietyList from "./components/college/SocietyList";
import SocietyDetails from "./components/college/SocietyDetails";

export default function CollegeSocietiesEventsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT - MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Societies */}
            <SocietyList />
          </div>

          {/* RIGHT - SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Calendar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
