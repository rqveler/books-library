export default daysSicnce = (date) => {
     if (!moment(date).isValid()) return;
    var momentLoanDate = moment(date);
    var today = moment();
    return today.diff(momentLoanDate, 'days');
}