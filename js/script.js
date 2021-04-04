import { SlideNav } from './slide.js'

const slide = new SlideNav('.slide','.slide-wrapper')
slide.init()
slide.addArraw('.prev', '.next')

slide.addControl()
