import * as id from "./id.js"

export const clickMe = contactUs.onclick = () => {
    
    if(id.onlineAuctions.className != 'menu opening topBottom'){
        
        id.onlineAuctions.className = 'menu opening topBottom';

        const middleContactUs = [id.liveAuctions, id.ourStory];
                middleContactUs.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        id.contactUs.className = 'menu selected middle';

        id.contactUsInfo.className = 'info opened';

        id.contactUsLink.className = 'linkOpened';

        id.copyright.className = 'menu copyrightClosed opening topBottom';

    }else{
        
        id.onlineAuctions.className = 'menu opening closing topBottom'

        const middleOurStory = [id.liveAuctions, id.ourStory];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        id.contactUs.className = 'menu selected deselected middle';

        id.contactUsInfo.className = 'info opened closed';

        id.contactUsLink.className = 'linkOpened linkClosed';

        id.copyright.className = 'menu copyright opening closing topBottom';

    };  
};