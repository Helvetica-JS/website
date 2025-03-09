// Define the color configuration type
type ColorConfig = {
  from: string;
  border: string;
  number: string;
};

// Define the props interface
interface ValueCardProps {
  number: string | number;
  title: string;
  description: string | React.ReactNode;
  highlightColor?: 'blue' | 'purple' | 'green' | 'amber';
  className?: string;
}

export default function ValueCard({
  number,
  title,
  description,
  highlightColor = "blue",
  className = ""
}: ValueCardProps) {
  // Define color map for different highlight colors
  const colorMap: Record<string, ColorConfig> = {
    blue: {
      from: "from-blue-900/40",
      border: "border-blue-800/30",
      number: "text-blue-400"
    },
    purple: {
      from: "from-purple-900/40",
      border: "border-purple-800/30",
      number: "text-purple-400"
    },
    green: {
      from: "from-green-900/40",
      border: "border-green-800/30",
      number: "text-green-400"
    },
    amber: {
      from: "from-amber-900/40",
      border: "border-amber-800/30",
      number: "text-amber-400"
    }
  };
  
  // Get color classes or fall back to blue
  const colors = colorMap[highlightColor] || colorMap.blue;
  
  return (
    <div className={`bg-gradient-to-br ${colors.from} to-indigo-900/40 p-8 rounded-xl border ${colors.border} ${className}`}>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className={`${colors.number} mr-3`}>{number}</span>
        <span>{title}</span>
      </h3>
      <div className="text-gray-300">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
}