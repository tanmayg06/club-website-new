import { Card } from "../components/Card";

export default function Third() {
  return (
    <div className="relative bg-[#000D3F] flex flex-col justify-center items-center min-h-screen overflow-hidden text-white">
      <img src="/ellipse.svg" alt="" className="absolute" />

      {/* Cards Section */}
      <div className="relative w-full grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="NIT Calicut"
          image="/nit.png"
          link="https://www.nitc.ac.in"
          className="object-cover"
        />
        <Card
          title="SPARC"
          image="/sparc.jpeg"
          link="https://www.sparc.iitkgp.ac.in"
          className="object-contain"
        />
        <Card
          title="University of Utah"
          image="/utah.jpeg"
          link="https://www.utah.edu"
        />
      </div>

      {/* Venue and Contact Section */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 p-4">
        {/* Venue Section */}
        <div className="bg-[#111A57] p-6 rounded-lg shadow-md border border-gray-600">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Workshop Venue
          </h2>
          <p className="text-lg leading-7">
            <strong>Department:</strong> Computer Science and Engineering<br />
            <strong>Institute:</strong> National Institute of Technology Calicut<br />
            <strong>Address:</strong> NIT Campus Post, Pin 673 601, Kerala, India
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-[#111A57] p-6 rounded-lg shadow-md border border-gray-600">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Coordinators
          </h2>
          <p className="text-lg leading-7 mb-4">
            <strong>Dr. Jayaraj P B:</strong> 9633701066<br />
            <strong>Dr. Pournami P.N:</strong> 9995651542
          </p>
          <p className="text-lg leading-7 mb-4">
            <strong>Designation:</strong> Associate Professors<br />
            <strong>Department:</strong> Computer Science and Engineering,<br />
            National Institute of Technology Calicut
          </p>
          <p className="text-lg leading-7">
            <strong>Email IDs:</strong><br />
            <a
              href="mailto:jayarajpb@nitc.ac.in"
              className="text-blue-400 hover:underline font-semibold"
            >
              jayarajpb@nitc.ac.in
            </a>
            <br />
            <a
              href="mailto:pournamipn@nitc.ac.in"
              className="text-blue-400 hover:underline font-semibold"
            >
              pournamipn@nitc.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
