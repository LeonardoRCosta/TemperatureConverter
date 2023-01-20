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
  validate(scale: string, scaleToConvert: string) {
    const scales = Object.values(Scales);

    const isValidScale = scales.find((value) => value === scale);

    const isValidScaleToConvert = scales.find(
      (value) => value === scaleToConvert
    );

    if (!isValidScale) throw new Error('Invalid scale!');

    if (!isValidScaleToConvert) throw new Error('Invalid convert scale!');

    if (scale === scaleToConvert)
      throw new Error(
        "You're trying to convert a temperature to the same scale!"
      );
  }

  execute({ temperature, scale, scaleToConvert }: ConversionRequest) {
    this.validate(scale, scaleToConvert);

    const key = `${scale}To${scaleToConvert}`;

    const conversions: Record<string, number> = {
      celsiusTofahreinheit: temperature * (9 / 5) + 32,
      celsiusTokelvin: temperature + 273.15,
      fahreinheitTocelsius: (temperature - 32) * (5 / 9),
      fahreinheitTokelvin: (temperature - 32) * (5 / 9) + 273.15,
      kelvinTocelsius: temperature - 273.15,
      kelvinTofahreinheit: (temperature - 273.15) * (9 / 5) + 32,
    };

    const convertedTemperature = conversions[key];

    return {
      [scale]: temperature,
      [scaleToConvert]: Number(convertedTemperature.toFixed(2)),
    };
  }
}
