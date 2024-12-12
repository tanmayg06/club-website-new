import { Card } from "../components/Card";

export default function Third() {
  return (
    <div className="relative bg-[#000D3F] flex justify-center items-center min-h-screen overflow-hidden">
      <img src="/ellipse.svg" alt="" className="absolute" />
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
    </div>
  );
}
