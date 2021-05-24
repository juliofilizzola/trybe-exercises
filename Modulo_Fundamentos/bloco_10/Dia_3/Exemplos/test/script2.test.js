const service = require("../src/script2");

test("#randomRgbColor", () => {
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue("default value")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

