import { Scales, TemperatureConverter } from './TemperatureConverter';

describe('Convert temperature', () => {
  const temperatureConverter = new TemperatureConverter();

  it('should be able to throw an error if invalid scale is provided', () => {
    expect(() =>
      temperatureConverter.execute({
        temperature: 293.15,
        scale: 'invalid scale',
        scaleToConvert: Scales.celsius,
      })
    ).toThrowError('Invalid scale!');
  });

  it('should be able to throw an error if the scale is the same as the scaleToConvert', () => {
    expect(() =>
      temperatureConverter.execute({
        temperature: 293.15,
        scale: Scales.celsius,
        scaleToConvert: Scales.celsius,
      })
    ).toThrowError("You're trying to convert a temperature to the same scale!");
  });

  it('should be able to convert a temperature in kelvin to celsius and to fahreinheit', () => {
    expect(
      temperatureConverter.execute({
        temperature: 180,
        scale: Scales.kelvin,
        scaleToConvert: Scales.celsius,
      })
    ).toEqual({ kelvin: 180, celsius: -93.15 });

    expect(
      temperatureConverter.execute({
        temperature: 180,
        scale: Scales.kelvin,
        scaleToConvert: Scales.fahreinheit,
      })
    ).toEqual({ kelvin: 180, fahreinheit: -135.67 });
  });

  it('should be able to convert a temperature in celsius to kelvin and to fahreinheit', () => {
    expect(
      temperatureConverter.execute({
        temperature: 50,
        scale: Scales.celsius,
        scaleToConvert: Scales.kelvin,
      })
    ).toEqual({ celsius: 50, kelvin: 323.15 });

    expect(
      temperatureConverter.execute({
        temperature: 50,
        scale: Scales.celsius,
        scaleToConvert: Scales.fahreinheit,
      })
    ).toEqual({ celsius: 50, fahreinheit: 122 });
  });

  it('should be able to convert a temperature in fahreinheit to celsius and to kelvin', () => {
    expect(
      temperatureConverter.execute({
        temperature: 122,
        scale: Scales.fahreinheit,
        scaleToConvert: Scales.celsius,
      })
    ).toEqual({ fahreinheit: 122, celsius: 50 });

    expect(
      temperatureConverter.execute({
        temperature: 122,
        scale: Scales.fahreinheit,
        scaleToConvert: Scales.kelvin,
      })
    ).toEqual({ fahreinheit: 122, kelvin: 323.15 });
  });
});
