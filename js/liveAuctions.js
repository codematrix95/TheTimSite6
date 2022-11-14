import * as id from "./id.js"

export const clickMe = id.liveAuctions.onclick = () => {

    if(id.onlineAuctions.className != 'menu opening topBottom'){

        id.onlineAuctions.className = 'menu opening topBottom';

        const middleLiveAuctions = [id.ourStory, id.contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        id.liveAuctions.className = 'menu selected middle';

        id.liveAuctionsInfo.className = 'info paragraphOpened';

        id.leaveFeedback.className = 'menu copyrightClosed opening topBottom';

        setTimeout(() => {
            id.body.style.overflowY = 'auto';
        }, 750)

    }else{

        id.onlineAuctions.className = 'menu opening closing topBottom'

        const middleLiveAuctions = [id.ourStory, id.contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        id.liveAuctions.className = 'menu selected deselected middle';

        id.liveAuctionsInfo.className = 'info paragraphOpened closed';

        id.leaveFeedback.className = 'menu copyright opening closing topBottom';

        id.body.style.overflowY = 'hidden';
    };  
};