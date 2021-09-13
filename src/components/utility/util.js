export function getCurrentTimeIndex(data) {
  //returns the index in the data array the correspond to the current time
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  for (let i = 0; i < data.hourly.time.length; i++) {
    let dataTime = Date.parse(data.hourly.time[i]);
    if (currentTime < dataTime) {
      return i;
    }
  }
}

export function getNext7Days() {
  const currentDate = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let index = currentDate.getDay();
  let counter = 0;
  let ret = [];
  while (counter < 7) {
    counter++;
    if (index >= 7) {
      index = 0;
    }
    ret.push(weekday[index]);
    index++;
  }
  return ret;
}

export function WMOtoString(n) {
  switch (n) {
    case 0:
      return "Sunny";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "rime fog";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense drizzle";
    case 56:
      return "Light freezing drizzle";
    case 57:
      return "Dense freezing drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy rain";
    case 66:
      return "light freezing Rain";
    case 67:
      return "Heavy freezing Rain";
    case 71:
      return "Slight snow fall";
    case 73:
      return "Moderate snow fall";
    case 75:
      return "Heavy snow fall";
    case 77:
      return "Snow Grains";
    case 80:
      return "Slight show showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Heavy rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with heavy hail";

    default:
      return "Sunny";
  }
}

export function WMOtoIcon(n) {
  switch (n) {
    case 0:
      return "sun";
    case 1:
    case 2:
    case 3:
      return "cloud";
    case 45:
    case 48:
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "smog";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return "cloud-showers-heavy";
    case 71:
    case 73:
    case 75:
    case 77:
      return "snowflake";
    case 80:
    case 81:
    case 82:
      return "cloud-showers-heavy";
    case 85:
    case 86:
      return "snowflake";
    case 95:
    case 96:
    case 99:
      return "poo-storm";
  }
}
