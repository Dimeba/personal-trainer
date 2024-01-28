import { Montserrat } from 'next/font/google'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Petar Šalović | Personalni Trener',
	description: 'Vaš partner u zdravlju i fitnesu',
	keywords:
		'Trening, Trener, Personalni Trener, Licni Trener, Fitness, Fitnes Instruktor, Nutricionista, Ishrana, Zdrava Ishrana, Zdravlje, Sport, Teretana',
	icons: {
		icon: '/favicon.jpg'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
