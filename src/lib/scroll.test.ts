import { describe, expect, it } from "vitest";
import { activeIndex, railFill } from "./scroll";

describe("railFill", () => {
  it("está vacía antes de llegar a la línea de tiempo", () => {
    expect(railFill(900, 1000, 1000)).toBe(0);
  });

  it("se llena a la mitad cuando pasó la mitad", () => {
    expect(railFill(100, 1000, 1000)).toBe(50);
  });

  it("no pasa de 100 aunque sigas bajando", () => {
    expect(railFill(-5000, 1000, 1000)).toBe(100);
  });
});

describe("activeIndex", () => {
  it("no marca nada arriba de todo", () => {
    expect(activeIndex([800, 1600, 2400], 1000)).toBe(-1);
  });

  it("marca la última sección que ya pasó", () => {
    expect(activeIndex([-900, 200, 1400], 1000)).toBe(1);
  });
});
