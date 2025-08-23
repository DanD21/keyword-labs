'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
	/** Dot size (default: 8) */
	dotSize?: number;
	/** Spacing between dots (default: 10) */
	spacing?: number;
	/** Animation duration (default: 30) */
	duration?: number;
	/** Color cycle duration (default: 6) */
	colorCycleDuration?: number;
	/** Background color (default: 'var(--background)') */
	backgroundColor?: string;
};

export function GradientDots({
	dotSize = 2,
	spacing = 30,
	duration = 20,
	colorCycleDuration = 8,
	backgroundColor = '#1a1f1a',
	className,
	...props
}: GradientDotsProps) {
	return (
		<motion.div
			className={`absolute inset-0 ${className}`}
			style={{
				backgroundColor: '#1a1f1a',
				backgroundImage: `
					radial-gradient(circle at 25% 25%, rgba(0, 240, 255, 0.4), transparent 50%),
					radial-gradient(circle at 75% 75%, rgba(255, 0, 120, 0.3), transparent 50%),
					radial-gradient(circle at 50% 50%, rgba(120, 255, 0, 0.2), transparent 50%),
					radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.3), transparent 50%),
					repeat radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 1px, transparent 2px)
				`,
				backgroundSize: `
					300% 300%,
					400% 400%,
					350% 350%,
					450% 450%,
					${spacing}px ${spacing}px
				`,
				backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 0% 100%, 0 0',
			}}
			animate={{
				backgroundPosition: [
					'0% 0%, 100% 100%, 50% 50%, 0% 100%, 0 0',
					'100% 100%, 0% 0%, 0% 0%, 100% 0%, 0 0',
					'0% 100%, 100% 0%, 100% 100%, 0% 0%, 0 0',
					'0% 0%, 100% 100%, 50% 50%, 0% 100%, 0 0'
				],
			}}
			transition={{
				backgroundPosition: {
					duration: duration,
					ease: 'linear',
					repeat: Number.POSITIVE_INFINITY,
				},
			}}
			{...props}
		/>
	);
}
