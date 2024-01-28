// styles
import styles from './Services.module.scss'

// components
import Container from './Container'
import Image from 'next/image'

const Services = ({ services }) => {
	return (
		<section id='usluge'>
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
