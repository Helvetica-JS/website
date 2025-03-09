// Define types for the component props
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  className?: string;
  highlightColor?: 'blue' | 'purple' | 'green' | 'red' | 'amber' | 'cyan';
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
  highlightColor = "blue"
}: CardProps) {
  // Define color map for different highlight colors
  const colorMap: ColorMap = {
    blue: {
      icon: "bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
      border: "hover:border-blue-500"
    },
    purple: {
      icon: "bg-purple-600/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
      border: "hover:border-purple-500"
    },
    green: {
      icon: "bg-green-600/20 text-green-400 group-hover:bg-green-600 group-hover:text-white",
      border: "hover:border-green-500"
    },
    red: {
      icon: "bg-red-600/20 text-red-400 group-hover:bg-red-600 group-hover:text-white",
      border: "hover:border-red-500"
    },
    amber: {
      icon: "bg-amber-600/20 text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
      border: "hover:border-amber-500"
    },
    cyan: {
      icon: "bg-cyan-600/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white",
      border: "hover:border-cyan-500"
    }
  };
  
  // Get color classes or fall back to blue
  const colors = colorMap[highlightColor] || colorMap.blue;
  
  return (
    <div className={`bg-gray-900 p-6 rounded-xl border border-gray-700 ${colors.border} transition group ${className}`}>
      {icon && (
        <div className={`h-14 w-14 rounded-lg mb-6 flex items-center justify-center ${colors.icon} transition`}>
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}