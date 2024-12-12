export function Card({ title, image, className }) {
  return (
    <div className="relative mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className={`w-[300px] h-[400px] ${className}`}
        src={image}
        alt={title}
      />
      <p className="text-center text-lg text-white bg-black w-full p-3 absolute bottom-0">
        {title}
      </p>
    </div>
  );
}
