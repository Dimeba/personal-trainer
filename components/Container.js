'use client'

// styles
import styles from './Container.module.scss'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Container = ({ children, newClass }) => {
	// Scroll Animation

	const options = {
		root: null,
		rootMargin: '10%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<div
			ref={targetRef}
			className={`${styles.container} ${
				isIntersecting ? styles.animatedContainer : styles.hiddenContainer
			} ${newClass}`}
		>
			{children}
		</div>
	)
}

export default Container
