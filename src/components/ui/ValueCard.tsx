// Define the color configuration type
type ColorConfig = {
  from: string;
  border: string;
  number: string;
};

// Define the props interface with our awesome new color options
interface ValueCardProps {
  number: string | number;
  title: string;
  description: string | React.ReactNode;
  highlightColor?: 'js-yellow' | 'alpine-blue' | 'zurich-teal' | 'swiss-red' | 'syntax-plum' | 'code-slate';
  className?: string;
}

export default function ValueCard({
  number,
  title,
  description,
  highlightColor = "js-yellow",
  className = ""
}: ValueCardProps) {
  // Define color map with our gorgeous JS and Swiss-inspired palette!
  const colorMap: Record<string, ColorConfig> = {
    'js-yellow': {
      from: "from-js-yellow-600/30",
      border: "border-js-yellow-500/30",
      number: "text-js-yellow-400"
    },
    'alpine-blue': {
      from: "from-alpine-blue-900/40",
      border: "border-alpine-blue-700/30",
      number: "text-alpine-blue-400"
    },
    'zurich-teal': {
      from: "from-zurich-teal-900/40",
      border: "border-zurich-teal-700/30",
      number: "text-zurich-teal-400"
    },
    'swiss-red': {
      from: "from-swiss-red-900/40",
      border: "border-swiss-red-700/30",
      number: "text-swiss-red-400"
    },
    'syntax-plum': {
      from: "from-syntax-plum-900/40",
      border: "border-syntax-plum-700/30",
      number: "text-syntax-plum-400"
    },
    'code-slate': {
      from: "from-code-slate-800/40",
      border: "border-code-slate-700/30",
      number: "text-code-slate-400"
    }
  };
  
  // Get color classes or fall back to js-yellow
  const colors = colorMap[highlightColor] || colorMap['js-yellow'];
  
  return (
    <div className={`bg-gradient-to-br ${colors.from} to-code-slate-900/60 p-8 rounded-xl border ${colors.border} ${className}`}>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className={`${colors.number} mr-3`}>{number}</span>
        <span className="text-white">{title}</span>
      </h3>
      <div className="text-code-slate-300">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
}