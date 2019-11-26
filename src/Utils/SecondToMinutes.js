exports.SecondToMinutes = (numberOfSecs) => {
    const minutes = Math.floor(numberOfSecs / 60)
    const seconds = numberOfSecs % 60
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}