export const competitionBegin = "Oct 16 2021 5:00";
export const registerEnd = "Oct 14 2021 00:00";

// Checks if registrations are closed
export const isClosed = () => new Date() > new Date(registerEnd);
