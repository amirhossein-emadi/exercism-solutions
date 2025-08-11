// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
    const appointmentDate = new Date(now ?? new Date().getTime());
    appointmentDate.setDate(appointmentDate.getDate() + days);
    return appointmentDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
    return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
    const date = new Date(timestamp);
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
    const date = getAppointmentDetails(timestamp);
    for (const opt in options) {
        if (opt in date) {
            date[opt] = options[opt];
        }
    }
    const jsDate = new Date(
        date.year,
        date.month,
        date.date,
        date.hour,
        date.minute
    );
    return {
        year: jsDate.getFullYear(),
        month: jsDate.getMonth(),
        date: jsDate.getDate(),
        hour: jsDate.getHours(),
        minute: jsDate.getMinutes()
    };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
    return Math.round((new Date(timestampB).getTime() -
        new Date(timestampA).getTime()) / 1000); // 1000 ms -> 1 s
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 * @return {boolean}
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
    return timeBetween(currentTimestamp, appointmentTimestamp) > 0;
}
