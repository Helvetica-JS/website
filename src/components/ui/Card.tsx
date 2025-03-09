// Define types for the component props
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  className?: string;
  highlightColor?: 'alpine-blue' | 'syntax-plum' | 'zurich-teal' | 'swiss-red' | 'js-yellow' | 'code-slate';
}

// Define type for the color mapping
interface ColorConfig {
  icon: string;
  border: string;
}

interface ColorMap {
  [key: string]: ColorConfig;
}

export default function Card({
  title,
  description,
  icon,
  tags = [],
  className = "",
  highlightColor = "alpine-blue"
}: CardProps) {
  // Define color map for different highlight colors with our awesome new palette!
  const colorMap: ColorMap = {
    'alpine-blue': {
      icon: "bg-alpine-blue-600/20 text-alpine-blue-400 group-hover:bg-alpine-blue-600 group-hover:text-white",
      border: "hover:border-alpine-blue-500"
    },
    'syntax-plum': {
      icon: "bg-syntax-plum-600/20 text-syntax-plum-400 group-hover:bg-syntax-plum-600 group-hover:text-white",
      border: "hover:border-syntax-plum-500"
    },
    'zurich-teal': {
      icon: "bg-zurich-teal-600/20 text-zurich-teal-400 group-hover:bg-zurich-teal-600 group-hover:text-white",
      border: "hover:border-zurich-teal-500"
    },
    'swiss-red': {
      icon: "bg-swiss-red-600/20 text-swiss-red-400 group-hover:bg-swiss-red-600 group-hover:text-white",
      border: "hover:border-swiss-red-500"
    },
    'js-yellow': {
      icon: "bg-js-yellow-500/20 text-js-yellow-600 group-hover:bg-js-yellow-500 group-hover:text-code-slate-900",
      border: "hover:border-js-yellow-500"
    },
    'code-slate': {
      icon: "bg-code-slate-600/20 text-code-slate-400 group-hover:bg-code-slate-600 group-hover:text-white",
      border: "hover:border-code-slate-500"
    }
  };
  
  // Get color classes or fall back to alpine-blue
  const colors = colorMap[highlightColor] || colorMap['alpine-blue'];
  
  return (
    <div className={`bg-code-slate-900 p-6 rounded-xl border border-code-slate-700 ${colors.border} transition group ${className} cursor-pointer`}>
      {icon && (
        <div className={`h-14 w-14 rounded-lg mb-6 flex items-center justify-center ${colors.icon} transition`}>
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      
      <p className="text-code-slate-400 mb-4">
        {description}
      </p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-code-slate-800 text-code-slate-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}