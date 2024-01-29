'use client'

// styles
import styles from './Slider.module.scss'

// components
import ImageContainer from './ImageContainer'

// hooks
import { useEffect } from 'react'

const Slider = ({
	children,
	content,
	current,
	setCurrent,
	columns,
	setColumns,
	mobileColumns,
	autoUpdate,
	showArrows
}) => {
	// Updating Number of columns based on screend width
	setColumns &&
		mobileColumns &&
		useEffect(() => {
			const updateColumns = () => {
				if (window.innerWidth < 1024) {
					setColumns(mobileColumns)
				} else {
					setColumns(columns)
				}
			}
			window.addEventListener('resize', updateColumns)
			updateColumns()

			return () => {
				window.removeEventListener('resize', updateColumns)
			}
		}, [])

	// total number of slides
	const totalSlides = Math.ceil(content.length / columns)

	// getting next and previoous slide
	const getNextSlide = () => {
		return (current + 1) % totalSlides
	}

	const getPrevSlide = () => {
		return (current - 1 + totalSlides) % totalSlides
	}

	// changing slides
	const nextSlide = () => {
		setCurrent(getNextSlide())
	}

	const prevSlide = () => {
		setCurrent(getPrevSlide())
	}

	// Auto scroll
	autoUpdate &&
		useEffect(() => {
			const updateContent = setInterval(() => setCurrent(getNextSlide()), 6000)

			// Clear the interval when the component unmounts
			return () => clearInterval(updateContent)
		}, [current, setCurrent])

	// Bullets
	const handleBulletClick = index => {
		setCurrent(index)
	}

	return (
		<>
			<div className={styles.slider}>
				{showArrows && (
					<div className={styles.sliderArrowContainer} onClick={prevSlide}>
						<ImageContainer
							src='/arrow-left.svg'
							className={styles.sliderArrow}
							alt='Slider button to the left side'
						/>
					</div>
				)}

				<div className={styles.sliderContent}>{children}</div>

				{showArrows && (
					<div className={styles.sliderArrowContainer} onClick={nextSlide}>
						<ImageContainer
							src='/arrow-right.svg'
							className={styles.sliderArrow}
							alt='Slider button to the right side'
						/>
					</div>
				)}
			</div>
			<div className={styles.bullets}>
				{Array.from({ length: totalSlides }).map((_, index) => (
					<div
						key={index}
						className={`${styles.bullet} ${
							index === current ? styles.active : ''
						}`}
						onClick={() => handleBulletClick(index)}
					></div>
				))}
			</div>
		</>
	)
}

export default Slider
