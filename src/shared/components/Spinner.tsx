export const Spinner = () => (
  <div className="absolute z-10 flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500 opacity-60">
    <div className="flex items-center">
      <span className="mr-4 text-3xl">Loading</span>
      <svg
        className="h-8 w-8 animate-spin text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  </div>
);
