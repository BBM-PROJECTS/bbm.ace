export const generateUniqueRandomString = (length: number = 16): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const seenStrings = new Set<string>();

  while (true) {
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    if (!seenStrings.has(randomString)) {
      seenStrings.add(randomString);
      return randomString;
    }
  }
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  if (cleanedNumber.length !== 11) {
    throw new Error("Invalid phone number length");
  }

  const formattedNumber = `(+234) ${cleanedNumber.slice(1, 4)} ${cleanedNumber.slice(4, 7)} ${cleanedNumber.slice(7)}`;

  return formattedNumber;
};

export function getCumulativeFormattedTimeWords(subOutlines: { duration: string }[]): string {
  let totalSeconds = 0;

  for (const outline of subOutlines) {
    const [minutesString, secondsString] = outline.duration.split(":");

    const minutes = parseInt(minutesString, 10);
    const seconds = parseInt(secondsString, 10);

    totalSeconds += minutes * 60 + seconds;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  let timeString = "";

  if (hours > 0) {
    timeString += `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    if (timeString.length > 0) {
      timeString += " and ";
    }
    timeString += `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }

  if (timeString.length === 0 && totalSeconds > 0) {
    timeString = `${totalSeconds} second${totalSeconds > 1 ? "s" : ""}`;
  }

  return timeString;
}