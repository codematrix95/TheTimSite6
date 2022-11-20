import * as id from './id.js';

export const clickMe = ourStory.onclick = () =>{

    if(id.onlineAuctions.className != 'menu opening topBottom'){

        id.onlineAuctions.className = 'menu opening topBottom';

        const middleOurStory = [id.liveAuctions, id.contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        id.ourStory.className = 'menu selected middle';

        id.ourStoryInfo.className = 'info paragraphOpened';

        id.leaveFeedback.className = 'menu copyrightClosed opening topBottom';

    }else{

        id.onlineAuctions.className = 'menu opening closing topBottom'

        const middleOurStory = [id.liveAuctions, id.contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        id.ourStory.className = 'menu selected deselected middle';

        id.ourStoryInfo.className = 'info paragraphOpened closed';

        id.leaveFeedback.className = 'menu copyright opening closing topBottom'; 

    };       
};


