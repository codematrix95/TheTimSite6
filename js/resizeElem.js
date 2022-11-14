import * as id from './id.js';

export const resizeElem = window.onload = () => {
    if(id.body.clientWidth >= 750){
        
        const topBottomImg = [id.bannerimg1, id.bannerimg3];
        topBottomImg.forEach((banners) => {
            banners.className = 'bannerimg closeBanner'
        })
    
    }else{  
        
        const topBottomImg = [id.bannerimg1, id.bannerimg3];
        topBottomImg.forEach((banners) => {
            banners.className = 'bannerimg'
        })
    
    };

    // this is setting the container height dynamically
    let bodyHeight = id.body.clientHeight 
    let bannerHeight = id.banner.clientHeight

    let containerHeight = (bodyHeight -= bannerHeight)

    id.content.style.minHeight = (containerHeight += 1).toString() + 'px';
};

// I know this looks weird but the page won't load properly if the function
// is not called globally and if the function does not have the window.onload event
// you would think you could just do what is being done on window.resize but you can't

export const resize = window.onresize = () => {
    resizeElem()
};

// window.onscroll = () => {
//     let scrolled = window.scrollY;
//     if(scrolled > 20){
//         buttonContainer.style.opacity = '1';
//     }else{
//         buttonContainer.style.opacity = '0';    
//     }
// };

// buttonContainer.onclick = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// };

