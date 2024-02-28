import { keyframes, style } from '@vanilla-extract/css'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const loader = style({
  border: '16px solid #f3f3f3',
  borderTop: '16px solid #3498db',
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  animation: `${rotate} 2s linear infinite`
})
