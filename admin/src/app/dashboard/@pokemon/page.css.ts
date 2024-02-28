import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '12px',
  backgroundColor: 'cornsilk'
})

export const title = style({
  margin: 0,
})

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  gap: '40px'
})

export const select = style({
  margin: '20px 0'
})
