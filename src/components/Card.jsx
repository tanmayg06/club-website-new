export function Card({ title, image, className, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="relative mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <img
          className={`w-[600px] h-[400px] ${className}`}
          src={image}
          alt={title}
        />
        <p className="text-center text-lg text-white bg-black w-full p-3 absolute bottom-0">
          {title}
        </p>
      </div>
    </a>
  );
}
