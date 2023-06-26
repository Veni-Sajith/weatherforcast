export interface TWSGUSTMAX {
  TIME_STRING: string;
  VALUE: string;
}

export interface Weather {
  TWS_GUST_MAX: TWSGUSTMAX;
  TWD: number;
  HUMIDEX: number;
  TWS: number;
  LOCALTIME: number;
  HUMIDITY_IN: number;
  WINDCHILL: number;
  TEMP_IN: number;
  ICON_NOW: string;
  ICON_FOR: string;
  TEMPERATURE: number;
  TWS_GUST: number;
  RAIN: number;
  PRESSURE: number;
  LONGITUDE: number;
  ACTIVE: string;
  PRESSURE_TR: number;
  RAIN_MONTH: number;
  RAIN_DAY: number;
  HUMIDITY: number;
  TIME_STRING: string;
  TIME: number;
  LATITUDE: number;
  WEATHER_DES: string;
}
