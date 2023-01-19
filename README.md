## Temperature Converter

> Nesse desafio, você deverá construir um método/função que deve conseguir receber um parâmetro com o valor da temperatura, o nome da escala da temperatura e a escala que deseja converter. Utilize a linguagem de programação Typescript.

## ❓ Case para o desafio

- Deve ser possível converter de qualquer escala termométrica para outra.
- Deve ser possível enviar três parâmetros: o valor da temperatura, o nome da escala da temperatura e a escala que deseja converter.
- Deve retornar um objeto com o nome/valor da temperatura inicial e nome/valor da temperatura convertida ;
- Deve conter testes unitários para validar os casos listados no exemplo.
  [Testes Unitários](https://www.notion.so/Testes-Unit-rios-b31647b73c8b45d99deff35cff5539ce)

## 🎲 Exemplo

```jsx
console.log(
  temperatureConverter({
    temperature: 293.15,
    scale: 'kelvin',
    scaleToConvert: 'celsius',
  })
);
// { "kelvin": 293.15, "celsius": 20 }

console.log(
  temperatureConverter({
    temperature: 100,
    scale: 'celsius',
    scaleToConvert: 'fahrenheit',
  })
);
// { "celsius": 100, "fahrenheit": 212 }

console.log(
  temperatureConverter({
    temperature: 356,
    scale: 'fahrenheit',
    scaleToConvert: 'kelvin',
  })
);
// { "fahrenheit": 356, "kelvin": 180 }
```

### **[💻](https://emojiterra.com/pt/pc/) Tecnologias**

- Utilizar TypeScript;
- Fazer testes unitários com Jest
- Utilizar POO;

### ❌ Restrições

- Utilizar Libs;
- Não copiar código.

## ❓Como utilizar

```typescript
// install dependecies
$ yarn add

// run code
$ yarn dev
```
