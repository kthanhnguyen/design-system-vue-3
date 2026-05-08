export type TextScale =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  | 's1' | 's2'
  | 'b1' | 'b2' | 'b3' | 'b4'
  | 'c1' | 'c2' | 'c3'
  | 'label'

export type ButtonScale = 'giant' | 'large' | 'medium' | 'small' | 'tiny'

export type TextTag =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div' | 'label' | 'caption'

export interface TypographySpec {
  scale: TextScale
  label: string
  weight: string
  size: number
  line: number
  spacing: number
  category: 'heading' | 'subtitle' | 'body' | 'caption' | 'label'
}

export interface ButtonTypographySpec {
  scale: ButtonScale
  label: string
  weight: string
  size: number
  line: number
  spacing: number
}
