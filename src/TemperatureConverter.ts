export enum Scales {
  fahreinheit = 'fahreinheit',
  celsius = 'celsius',
  kelvin = 'kelvin',
}

interface ConversionRequest {
  temperature: number;
  scale: Scales;
  scaleToConvert: Scales;
}

export class TemperatureConverter {
  static execute({ temperature, scale, scaleToConvert }: ConversionRequest) {
    const isValidScale = scale in Scales;
    const isValidScaleToConvert = scaleToConvert in Scales;

    if (!isValidScale || !isValidScaleToConvert)
      throw new Error('Invalid scale and/or convert scale!');

    if (scale === scaleToConvert)
      throw new Error(
        "You're trying to convert a temperature to the same scale!"
      );

    const key = `${scale}to${scaleToConvert}`;

    const conversions: Record<string, number> = {
      celsiustofahreinheit: temperature * (9 / 5) + 32,
      celsiustokelvin: temperature + 273.15,
      fahreinheittocelsius: (temperature - 32) * (5 / 9),
      fahreinheittokelvin: (temperature - 32) * (5 / 9) + 273.15,
      kelvintocelsius: temperature - 273.15,
      kelvintofahreinheit: (temperature - 273.15) * (9 / 5) + 32,
    };

    const convertedTemperature = conversions[key];

    return {
      [scale]: temperature,
      [scaleToConvert]: Number(convertedTemperature.toFixed(2)),
    };
  }
}
