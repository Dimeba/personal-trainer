'use client'

// styles
import styles from './Header.module.scss'

// components
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useState } from 'react'

const Header = ({ contact }) => {
	// Scroll Animation
	const options = {
		root: null,
		rootMargin: '10%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<>
			<div ref={targetRef}></div>
			<header
				className={styles.header}
				style={{
					backgroundColor: isIntersecting ? '' : 'black',
					height: openMenu ? '100vh' : ''
				}}
			>
				<Container newClass={styles.nav}>
					<Image src='/logo.png' width={99} height={90} alt='Logo' />

					<div className={styles.hamburger}>
						<Hamburger
							color='#FFF'
							size={24}
							toggled={openMenu}
							toggle={setOpenMenu}
						/>
					</div>

					<div className={`${styles.menu} ${!openMenu && styles.hidden}`}>
						<p>
							<a href='#o-meni' onClick={() => setOpenMenu(false)}>
								O Meni
							</a>
						</p>

						<p>
							<a href='#usluge' onClick={() => setOpenMenu(false)}>
								Usluge
							</a>
						</p>

						<p>
							<a href='#transformacije' onClick={() => setOpenMenu(false)}>
								Transformacije
							</a>
						</p>

						<p>
							<a href='#pitanja' onClick={() => setOpenMenu(false)}>
								Česta Pitanja
							</a>
						</p>

						<p>
							<a href='#kontakt' onClick={() => setOpenMenu(false)}>
								Kontakt
							</a>
						</p>
					</div>

					<div
						className={`${styles.socialMedia} ${!openMenu && styles.hidden}`}
					>
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
							<Image
								src='/facebook.svg'
								width={32}
								height={32}
								alt='Facebook'
							/>
						</Link>
					</div>
				</Container>
			</header>
		</>
	)
}

export default Header
