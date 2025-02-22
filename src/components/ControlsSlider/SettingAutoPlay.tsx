import { motion } from "motion/react"
import { useGetSliderContext } from "../../hooks/hooks"

const SettingAutoPlay = () => {
  const { autoPlay, setAutoPlay, orientation, setOrientation } =
		useGetSliderContext()

  return (
		<>
			<div style={containerSettings}>
				<div style={containerSettingAuto}>
					<label style={labelAutoPlay}>направление</label>
					<div style={containerAutoPlay}>
						<label>{'<'}</label>
						<button
							className='toggle-container'
							style={{
								...container,
								justifyContent: 'flex-' + (orientation===1 ? 'start' : 'end'),
							}}
							onClick={() => setOrientation(orientation * -1)}
						>
							<motion.div
								className='toggle-handle'
								style={handle}
								layout
								transition={{
									type: 'spring',
									visualDuration: 0.2,
									bounce: 0.2,
								}}
							/>
						</button>
						<label>{'>'}</label>
					</div>
				</div>
				<div style={containerSettingAuto}>
					<label style={labelAutoPlay}>автопрокрутка</label>
					<div style={containerAutoPlay}>
						<label>off</label>
						<button
							className='toggle-container'
							style={{
								...container,
								justifyContent: 'flex-' + (autoPlay ? 'end' : 'start'),
							}}
							onClick={() => setAutoPlay(!autoPlay)}
						>
							<motion.div
								className='toggle-handle'
								style={handle}
								layout
								transition={{
									type: 'spring',
									visualDuration: 0.2,
									bounce: 0.2,
								}}
							/>
						</button>
						<label>on</label>
					</div>
				</div>
			</div>
		</>
	)
}

/**
 * ==============   Styles   ================
 */

const containerSettings = {
  display: 'flex',
  justifyContent: 'end',
}

const containerSettingAuto = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginRight: '2rem',
}

const labelAutoPlay = {
  fontWeight: 200,
  textФlign: 'center',
}

const containerAutoPlay = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'end',
	marginBottom: '2rem',
	marginTop: '0.5rem',
	color: 'rgba(var(--accent), .5)',
}

const container = {
  marginLeft: '.5rem',
  marginRight: '.5rem',
	width: 60,
	height: 28,
  backgroundColor: 'rgba(var(--background-secondary),.1)',
	borderRadius: 50,
	cursor: 'pointer',
	display: 'flex',
}

const handle = {
	width: 20,
	height: 20,
	backgroundColor: 'rgba(var(--accent), 1)',
	borderRadius: '50%',
	border: '1px solid #fff',
}

export default SettingAutoPlay