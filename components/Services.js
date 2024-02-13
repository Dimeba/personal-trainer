// styles
import styles from './Services.module.scss'

// components
import Container from './Container'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Services = ({ services }) => {
	return (
		<section id='usluge' className={styles.servicesContainer}>
			<Container>
				<div className={styles.services}>
					{services.fields.services.map(service => (
						<div className={styles.service} key={service.sys.id}>
							<Image
								src={'https:' + service.fields.image.fields.file.url}
								alt='Service Image'
								fill
							/>
							<div className={styles.content}>
								<h3>{service.fields.title}</h3>
								<hr />
								<p>{service.fields.description}</p>

								<div className={styles.highlights}>
									{documentToReactComponents(service.fields.highlights)}
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
			<Container>
				<div>
					<p className={styles.description}>{services.fields.description}</p>
				</div>
			</Container>
		</section>
	)
}

export default Services
