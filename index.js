const { logger } = require('./logger/log4js.config');
const moment = require('moment');

// calculate age with vanila js
const calculateAge = date => {
    const dob = new Date(new Date(date).getTime());
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const dateDiff = today.getDate() - dob.getDate();

    if (dateDiff) {
        return age - 1;
    }
    return age;
};

// calculate age with momentjs
const calculateAgeWithMoment = date => {
    const dob = moment(new Date(date).getTime());
    const today = moment(new Date());
    return today.diff(dob, 'years');
};

logger.info('Vanilajs = ', calculateAge('12/26/1999'));
logger.info('Momentjs = ', calculateAgeWithMoment('12/26/1999'));
