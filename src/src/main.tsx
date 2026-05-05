import React from 'react'
import ReactDOM from 'react-dom/client'
import { ArrowRight } from 'lucide-react'
import './index.css'

const LogoIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox='0 0 128 128' fill='none' aria-hidden>
    <path d='M16 62c0-24 21-42 48-42s48 18 48 42H16Z' fill='currentColor' />
    <rect x='53' y='62' width='22' height='34' rx='10' fill='currentColor' />
    <circle cx='43' cy='47' r='6' fill='#F5F5F5' />
    <circle cx='64' cy='41' r='7' fill='#F5F5F5' />
    <circle cx='86' cy='49' r='5' fill='#F5F5F5' />
    <rect x='46' y='96' width='36' height='8' rx='4' fill='currentColor' opacity='.6' />
  </svg>
)

const heroBrands = [
  { n: 'Stripe', s: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { n: 'Coinbase', s: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { n: 'Uniswap', s: { fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' as const } },
  { n: 'Aave', s: { fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { n: 'Compound', s: { fontFamily: 'Palatino, Book Antiqua, serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
  { n: 'MakerDAO', s: { fontFamily: 'Impact, Arial Narrow, sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
  { n: 'Chainlink', s: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } }
]

const backers = [
  { n: 'Fundamental Labs', s: { fontFamily: 'Times New Roman, serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
  { n: 'KUCOIN', s: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
  { n: 'NGC', s: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
  { n: 'NxGen', s: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
  { n: 'Matter Labs', s: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
  { n: 'DEXTools', s: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' as const } },
  { n: 'NGRAVE', s: { fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' } },
  { n: 'Polychain', s: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
]

const App = () => (
  <div className='flex flex-col bg-[#F3E9D2]'>
    <div className='h-screen flex flex-col overflow-hidden'>
      <nav className='absolute top-0 left-0 right-0 z-20 px-6 py-5'>
        <div className='max-w-[88rem] mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'><LogoIcon className='w-7 h-7 text-black'/><span className='text-2xl font-medium tracking-tight text-black'>灵感菇</span></div>
          <div className='hidden md:flex gap-8 text-base text-gray-700 hover:text-black font-medium transition-colors duration-200'>{['Network','Ecosystem','Rewards','Help','News'].map(i=><a key={i}>{i}</a>)}</div>
          <button className='bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200'>Open Wallet</button>
        </div>
      </nav>

      <section className='flex-1 px-6 pt-20 pb-6 flex items-end'>
        <div className='max-w-[88rem] mx-auto relative w-full rounded-2xl overflow-hidden' style={{ height: 'calc(100vh - 96px)' }}>
          <video autoPlay muted loop playsInline className='object-cover absolute inset-0 w-full h-full' src='https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4'/>
          <div className='relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36'>
            <h1 className='text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4' style={{ letterSpacing: '-0.04em' }}>Your Wealth<br/>Works</h1>
            <p className='text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed' style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.</p>
            <button className='inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>Join us<span className='bg-white rounded-full p-2 hover:bg-white transition-colors duration-200'><ArrowRight className='w-5 h-5 text-black'/></span></button>
            <div className='mt-24 w-full max-w-md overflow-hidden'>
              <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .marquee-track{display:flex;width:max-content;animation:marquee 22s linear infinite;}`}</style>
              <div className='marquee-track'>{[...heroBrands, ...heroBrands].map((b, i) => <span key={i} className='mx-7 shrink-0 text-black/60 whitespace-nowrap' style={b.s}>{b.n}</span>)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section className='bg-[#F3E9D2] px-6 py-24'>
      <div className='max-w-[88rem] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start'>
          <div>
            <h2 className='text-black text-4xl md:text-5xl font-medium leading-tight mb-8' style={{ letterSpacing: '-0.03em' }}>Meet USD Halo.</h2>
            <button className='inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>Discover it<span className='bg-white rounded-full p-2'><ArrowRight className='w-5 h-5 text-black'/></span></button>
          </div>
          <p className='text-black/70 text-2xl md:text-3xl leading-relaxed'>USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.</p>
        </div>
      </div>
    </section>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
