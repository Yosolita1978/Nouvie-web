export function OrganicShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large flowing shape - top right */}
      <svg
        className="absolute -top-20 -right-20 w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-float-slow"
        viewBox="0 0 800 800"
        fill="none"
      >
        <path
          d="M400 0C600 0 800 200 800 400C800 600 600 800 400 800C200 800 100 700 50 500C0 300 200 0 400 0Z"
          className="fill-nouvie-pale-blue/30"
        />
      </svg>

      {/* Medium organic shape - bottom left */}
      <svg
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] animate-float-medium"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M250 0C400 50 500 150 450 300C400 450 250 500 150 450C50 400 0 250 50 150C100 50 150 0 250 0Z"
          className="fill-nouvie-turquoise/20"
        />
      </svg>

      {/* Small accent shape - center left */}
      <svg
        className="absolute top-1/3 left-10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] animate-float-fast"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          className="fill-nouvie-gold/25"
        />
      </svg>

      {/* Tiny floating dot - decorative */}
      <svg
        className="absolute top-20 left-1/4 w-[60px] h-[60px] animate-float-fast"
        viewBox="0 0 60 60"
        fill="none"
      >
        <circle
          cx="30"
          cy="30"
          r="30"
          className="fill-nouvie-light-blue/30"
        />
      </svg>

      {/* Another small accent - right side */}
      <svg
        className="absolute bottom-1/4 right-1/4 w-[100px] h-[100px] animate-float-medium hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 0C80 20 100 50 80 80C60 100 20 90 10 60C0 30 20 0 50 0Z"
          className="fill-nouvie-gold/20"
        />
      </svg>
    </div>
  );
}
