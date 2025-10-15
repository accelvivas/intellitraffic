// Ambient module declarations to satisfy TypeScript in this workspace
// This avoids "Cannot find module" errors for UI/demo dependencies used in TSX files.

// Framer Motion v11+ import path
declare module 'motion/react' {
  const motion: any;
  const AnimatePresence: any;
  export { motion, AnimatePresence };
}

// Lucide React icons
declare module 'lucide-react' {
  export const Menu: any;
  export const X: any;
  export const MapPin: any;
  export const Navigation: any;
  export const BarChart3: any;
  export const AlertTriangle: any;
  export const Home: any;
  export const TrendingUp: any;
  export const TrendingDown: any;
  export const Activity: any;
  export const AlertCircle: any;
  export const CheckCircle: any;
  export const CheckCircle2: any;
  export const Calendar: any;
  export const Car: any;
  export const Construction: any;
  export const CloudRain: any;
  export const Clock: any;
  export const Zap: any;
}

// Recharts
declare module 'recharts' {
  export const LineChart: any;
  export const Line: any;
  export const BarChart: any;
  export const Bar: any;
  export const XAxis: any;
  export const YAxis: any;
  export const CartesianGrid: any;
  export const Tooltip: any;
  export const ResponsiveContainer: any;
  export const Legend: any;
}

// Figma asset virtual import used in Navbar logo
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

// Minimal React ambient types so TSX and React.* references work in this no-deps workspace
declare namespace React {
  type ReactNode = any;
  interface CSSProperties { [key: string]: any }
  interface HTMLAttributes<T> { [key: string]: any }
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {}
  function useState<T = any>(
    initialState: T | (() => T)
  ): [T, (value: T | ((prev: T) => T)) => void];
}

declare module 'react' {
  export = React;
}

// Allow JSX usage
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Fallback for any other external modules (e.g., versioned specifiers like "@radix-ui/react-slot@1.1.2")
// This ensures TypeScript doesn't error on unresolved module names in this no-deps workspace.
declare module '*';
