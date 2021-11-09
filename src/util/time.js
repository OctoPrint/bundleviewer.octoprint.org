
function diffInSeconds(d1, d2) {
    return Math.floor(Math.abs(d1 - d2) / 1000);
}

function formatTimeDiff(seconds) {
    const conversion = [
        { factor: 60 * 60 * 24 * 365, unit1: "year", unitn: "years" },
        { factor: 60 * 60 * 24 * 30, unit1: "month", unitn: "months" },
        { factor: 60 * 60 * 24 * 7, unit1: "week", unitn: "weeks" },
        { factor: 60 * 60 * 24, unit1: "day", unitn: "days" },
        { factor: 60 * 60, unit1: "hour", unitn: "hours" },
        { factor: 60, unit1: "minute", unitn: "minutes" },
    ]

    for (const c of conversion) {
        const n = Math.floor(seconds / c.factor);
        if (n > 0) {
            return n + " " + (n === 1 ? c.unit1 : c.unitn);
        }
    }
    return seconds + " " + (seconds === 1 ? "second" : "seconds");
}

const utils = {
    diffInSeconds: diffInSeconds,
    formatTimeDiff: formatTimeDiff
}
export default utils;