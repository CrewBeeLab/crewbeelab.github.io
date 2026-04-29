import type { ReactNode } from 'react';
import { designSystem } from '../config/designSystem';

interface AccentLabelProps {
  children: ReactNode;
  className?: string;
}

export const AccentLabel = ({ children, className = '' }: AccentLabelProps) => (
  <span className={`${designSystem.typography.eyebrow} ${className}`}>{children}</span>
);
