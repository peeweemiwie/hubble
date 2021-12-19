import { useState, useEffect } from 'react';
import { BaseButton } from './styled/Button.styled';
// import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';
import { StyledSwitch } from './styled/Switch.styled';

const Switch = ({ onReceivedTheme }) => {
	const [theme, setTheme] = useState('dark');

	const handleClick = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	useEffect(() => {
		onReceivedTheme(theme);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);
	return (
		<StyledSwitch>
			<BaseButton onClick={handleClick}>
				{theme && theme === 'dark' ? <span>dark</span> : <span>light</span>}
			</BaseButton>
		</StyledSwitch>
	);
};

export default Switch;
