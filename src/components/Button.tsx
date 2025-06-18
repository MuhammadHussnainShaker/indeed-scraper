export const Button = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => (
  <button
    className={`px-4 py-2 text-white font-bold hover:opacity-90 transition rounded-lg ${className}`}
  >
    {text}
  </button>
)
