import Location1 from '../icons/home/location1.svg';
import Location2 from '../icons/home/location2.svg';
import Mail1 from '../icons/home/mail1.svg';
import Mail2 from '../icons/home/mail2.svg';
import Question1 from '../icons/home/question1.svg';
import Question2 from '../icons/home/question2.svg';

const initialState = {
    data: [
        {
            img1: Location1,
            img2: Location2,
            title: 'Address',
            body: `Address: 26A Lewis Street, Asiwaju House, 1st Floor, Lagos Island, Lagos NG.`
        },
        {
            img1: Mail1,
            img2: Mail2,
            title: 'Get in touch',
            body: 'Give us a call: +234 9026509478',
            body2: 'Opening Hours: 9am - 5pm',
            body3: 'Email us: support@cuesoft.io'
        },
        {
            img1: Question1,
            img2: Question2,
            title: 'Have questions?',
            body: `Being a software development company, we understand that every enterprise has a different
            software requirement and therefore, we provide custom software development services to meet their
            expectations.`
        }
    ]
}

export default function locationData( state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}