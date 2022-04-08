const calculateAge = (birthDate = "1990-04-29") => {
    const formattedDate = birthDate.split("-").map((el) => +el);
    let now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDay = now.getDate();
    if (formattedDate[1] < nowMonth) {
        return nowYear - formattedDate[0];
    } else if (formattedDate[1] === nowMonth && formattedDate[2] <= nowDay) {
        return nowYear - formattedDate[0];
    } else {
        return nowYear - formattedDate[0] - 1;
    }
};

export default calculateAge;
