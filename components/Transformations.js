'use client'

// styles
import styles from './Transformations.module.scss'

// components
import Container from './Container'
import Slider from './Slider'
import ImageContainer from './ImageContainer'

// hooks
import { useState } from 'react'

const Transformations = ({ transformations }) => {
	// slider
	const [current, setCurrent] = useState(0)
	const [columns, setColumns] = useState(3)
	const first = current * columns
	const last = first + columns

	return (
		<section className={styles.transformationsContainer}>
			<Container>
				<h3 id='transformacije'>{transformations.fields.title}</h3>

				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					setColumns={setColumns}
					mobileColumns={1}
					content={transformations.fields.images}
					showArrows
				>
					{transformations.fields.images.slice(first, last).map(image => (
						<div key={image.sys.id} className={styles.transformation}>
							<ImageContainer
								src={'https:' + image.fields.file.url}
								alt='Transformation Photo'
								className={styles.image}
								quality={60}
							/>
						</div>
					))}
				</Slider>
			</Container>
			<Container>
				<div>
					<p className={styles.description}>
						{transformations.fields.description}
					</p>
				</div>
			</Container>
		</section>
	)
}

export default Transformations
