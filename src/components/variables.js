export const FontFamily = {
	montserrat: 'Montserrat, sans-serif',
	PTMono: 'PT Mono, monospace',
	roboto: 'Roboto, sans-serif',
	robotoMono: 'Roboto Mono, monospace',
};

export const Color = {
	primary: '#27d0ff',
	success: '#22da93',
	warning: '#feb900',
	danger: '#f23557',
	light: '#eee',
	dark: '#1a1a1a',
	white: '#fff',
	black: '#000',
	gray: '#414141',
	lightGray: '#7a7a7a',
	darkGray: '#202124',
	navy: '#031f41',
};

const baseFontSize = 1.6;
export const FontSize = {
	fontXl: baseFontSize * 3 + 'rem',
	fontLg: baseFontSize * 2 + 'rem',
	fontMd: Math.round(baseFontSize * 1.5 * 10) / 10 + 'rem',
	fontReg: baseFontSize + 'rem',
	fontSm: Math.round(baseFontSize * 0.9 * 10) / 10 + 'rem',
	fontXs: Math.round(baseFontSize * 0.8 * 10) / 10 + 'rem',
};

export const Bp = {
	sm: '768px',
};
