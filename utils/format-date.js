const { DateTime } = require('luxon')

const formatDate = (date) => {

    return date.toLocaleString(DateTime.DATETIME_MED)
}

module.exports = formatDate
