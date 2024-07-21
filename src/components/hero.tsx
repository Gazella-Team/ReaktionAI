import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'

export default function Hero() {
	return (
		<section
			style={{
				background:
					'radial-gradient(circle, rgba(30,50,30,1) 0%, rgba(1,25,0,1) 100%)',
			}}
			className="min-h-screen z-10"
		>
			<div className="pt-40 w-[90%] flex flex-col gap-12 mx-auto max-w-5xl text-center text-white">
				<div className="flex flex-col gap-6 z-10 relative">
					<Reveal delayTime={0.1}>
						<div className="flex mb-2">
							<div className="rounded-full px-5 py-1 text-sm mx-auto border border-gray-100/30 text-white bg-white/20 backdrop:blur-100">
								<p>Best Reaktion Alternative ⚡️</p>
							</div>
						</div>
					</Reveal>
					<Reveal delayTime={0.1}>
						<h2 className="text-4xl md:text-5xl xl:text-7xl font-semibold">
							Boost Ad Tracking by 30%+ with our{' '}
							<span className="gradient-text">
								AI-powered tracking script
							</span>
						</h2>
					</Reveal>
					<Reveal delayTime={0.2}>
						<p className="text-lg max-w-xl mx-auto text-gray-200">
							Track 30%+ more orders in Google & Meta Ads with our
							AI-powered server-side tracking. Boost your ROAS and
							stop advertising in the dark.
						</p>
					</Reveal>
				</div>
				<div>
					<RevealLight delayTime={0.4}>
						<Link
							className="rounded-full z-10 text-green-950 font-semibold px-5 py-2 bg-gradient-to-r from-[#c3f1d3] to-[#d3ffd3]"
							href={'/'}
						>
							Sign up for waitlist
						</Link>
					</RevealLight>
				</div>
			</div>
			<img className="z-10 relative" src="/hero.svg"></img>
		</section>
	)
}
