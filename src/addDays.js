import moment from 'moment'
const addDays = (date, days) => {
    if (!moment(date).isValid()) return;
    const startDate = moment(date);
    const futureDate = startDate.add(days,'days');
    return futureDate.format();  
}

export default addDays