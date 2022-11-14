import * as id from './id.js';

export const clickMe = id.onlineAuctions.onclick = () => {
    
    if(id.onlineAuctions.className != 'menu selected topBottom'){
        
        id.onlineAuctions.className = 'menu selected topBottom';

        const middleOnlineAuctions = [id.liveAuctions, id.ourStory, id.contactUs];
            middleOnlineAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
            });

        id.onlineAuctionsInfo.className = 'info opened';

        id.onlineAuctionsInfo.style.textAlign = 'center';
        
        id.auctionTimeLink.className = 'linkOpened';

        id.leaveFeedback.className = 'menu copyrightClosed opening topBottom'; 

    }else{

        const middleOnlineAuctions = [id.liveAuctions, id.ourStory, id.contactUs];
            middleOnlineAuctions.forEach(menus => {
                menus.className = 'menu opening closing middle';   
            }); 

        id.onlineAuctions.className = 'menu selected deselected topBottom';

        id.onlineAuctionsInfo.className = 'info opened closed';

        id.auctionTimeLink.className = 'linkOpened linkClosed';

        id.leaveFeedback.className = 'menu copyright opening closing topBottom';

    };     
};