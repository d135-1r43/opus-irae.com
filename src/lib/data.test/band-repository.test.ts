import { describe, it, expect } from 'vitest';
import { BandRepository } from "../data/band-repository";

describe('BandRepository', () => {
  it('should return "bands"', () => {
    const bandManager = new BandRepository();
    expect(bandManager.getBands()).toBe("bands");
  });
});
