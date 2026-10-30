import type { ComponentType, CSSProperties } from 'react';
export interface FluxLinesProps {
 colors?: string[]; speed?: number; scale?: number; turbulence?: number; fluidity?: number;
 rimWidth?: number; sharpness?: number; shimmer?: number; glow?: number; lineWidth?: number;
 flowDirection?: 'up' | 'down' | 'left' | 'right'; opacity?: number;
 mouseInteraction?: boolean; mouseStrength?: number; mouseRadius?: number; mouseDampening?: number;
 clickSwirl?: boolean; intro?: boolean; lightMode?: boolean; transparent?: boolean;
 backgroundColor?: string; paused?: boolean; respectReducedMotion?: boolean;
 dpr?: number; mixBlendMode?: CSSProperties['mixBlendMode']; className?: string; style?: CSSProperties;
}
declare const FluxLines: ComponentType<FluxLinesProps>;
export default FluxLines;
