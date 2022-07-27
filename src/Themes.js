import desktopdark from './images/bg-desktop-dark.jpg'
import desktoplight from './images/bg-desktop-light.jpg'
import mobiledark from './images/bg-mobile-dark.jpg'
import mobilelight from './images/bg-mobile-light.jpg'


export const lightTheme = {
    brightblue:'hsl(220, 98%, 61%)',
    checkcolor:'linear-gradient(160deg, rgba(54,225,226,1) 0%, rgba(184,29,152,1) 100%)',
    body:'hsl(236, 33%, 92%)',
    background:'hsl(0, 0%, 98%)',
    text:'hsl(235, 19%, 35%)',
    text2:'hsl(236, 9%, 61%)',
    bgd: desktoplight,
    bgm: mobilelight,
    hr:'hsl(234, 39%, 85%)',
}
export const darkTheme = {
    brightblue:'hsl(220, 98%, 61%)',
    checkcolor:'linear-gradient(160deg, rgba(54,225,226,1) 0%, rgba(184,29,152,1) 100%)',
    body:'hsl(235, 21%, 11%)',
    background:'hsl(235, 24%, 19%)',
    text:'hsl(234, 39%, 85%)',
    text2:'hsl(234, 11%, 52%)',
    bgd: desktopdark,
    bgm: mobiledark,
    hr:'hsl(237, 14%, 26%)',
}