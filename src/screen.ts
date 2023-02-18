export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type Screen = {
  height: number
  width: number
  orientation: Orientation
  responsive: { factor: number }
  isFullScreen: boolean
}

export class ScreenHook implements Screen {
  height: number = 0
  width: number = 0
  orientation: Orientation = Orientation.Landscape
  responsive: { factor: number } = { factor: 1 }
  isFullScreen: boolean = false

  constructor() {
    this.getFeature()
    window.onresize = () => this.getFeature()
  }

  private getFeature() {
    const { innerWidth, innerHeight, screen } = window
    const orientation: Orientation = innerWidth >= innerHeight ? Orientation.Landscape : Orientation.Portrait

    const responsive = { factor: 1 }
    if (orientation === Orientation.Landscape) {
      if (innerWidth < 1400) responsive.factor = 0.8
      if (innerWidth < 1000) responsive.factor = 0.6
    } else {
      if (innerWidth < 480) responsive.factor = 0.6
      if (innerWidth < 320) responsive.factor = 0.8
    }

    this.height = innerHeight
    this.width = innerWidth
    this.orientation = orientation
    this.responsive = responsive
    this.isFullScreen = window.innerWidth === screen.width && window.innerHeight === screen.height
  }
}
