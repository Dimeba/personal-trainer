// styles
import styles from './Footer.module.scss'

// components
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

// hooks
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Footer = ({ questions, contact }) => {
	return (
		<footer className={styles.footer}>
			{/* FAQ */}
			<Container newClass={styles.questionsContainer}>
				<h3 id='pitanja'>{questions.fields.title}</h3>

				<div className={styles.questions}>
					{questions.fields.questions.map(item => (
						<div key={item.sys.id} className={styles.question}>
							<p className={styles.questionText}>{item.fields.question}</p>
							<hr />
							<p>{item.fields.answer}</p>
						</div>
					))}
				</div>
			</Container>

			{/* Contact */}
			<Container newClass={styles.contact}>
				<div className={styles.description} id='kontakt'>
					{documentToReactComponents(contact.fields.description)}
				</div>

				<p>
					{contact.fields.phone} / {contact.fields.email}
				</p>

				<div className={styles.socialMedia}>
					<Link
						href={contact.fields.instagram}
						aria-label='Instagram'
						target='_blank'
					>
						<Image
							src='/instagram.svg'
							width={32}
							height={32}
							alt='Instagram'
						/>
					</Link>

					<Link
						href={contact.fields.facebook}
						aria-label='Facebook'
						target='_blank'
					>
						<Image src='/facebook.svg' width={32} height={32} alt='Facebook' />
					</Link>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
