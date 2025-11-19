import {
  Code, Puzzle, Lock, Layers, Zap, BookOpen,
  ShieldCheck, BarChart3, Users
} from 'lucide-react';

const icons = {
  code: Code,
  puzzle: Puzzle,
  lock: Lock,
  layers: Layers,
  zap: Zap,
  'book-open': BookOpen,
  'shield-check': ShieldCheck,
  'bar-chart-3': BarChart3,
  users: Users,
};

export default function Icon({ name, className = "w-6 h-6" }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
