const { expect, describe, it } = require('@jest/globals');
const { gameLevelingUpCalculator, calcByExp, calcByLevel } = require('./main');

describe('test calcByExp function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(calcByExp(1000)).not.toBeNull();
      expect(calcByExp(200)).not.toBeNull();
      expect(typeof calcByExp(1000)).toBe('string');
      expect(typeof calcByExp(200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string when have sufficient exp to leveling up', () => {
      expect(calcByExp(1500)).toBe('Cukup untuk mencapai level 2, dan masih ada 300 exp point yang tersisa!');
      expect(calcByExp(2000)).toBe('Cukup untuk mencapai level 2, dan masih ada 800 exp point yang tersisa!');
      expect(calcByExp(3000)).toBe('Cukup untuk mencapai level 3, dan masih ada 600 exp point yang tersisa!');
      expect(calcByExp(4000)).toBe('Cukup untuk mencapai level 4, dan masih ada 400 exp point yang tersisa!');
      expect(calcByExp(5000)).toBe('Cukup untuk mencapai level 5, dan masih ada 200 exp point yang tersisa!');
      expect(calcByExp(10000)).toBe('Cukup untuk mencapai level 9, dan masih ada 400 exp point yang tersisa!');
      expect(calcByExp(30000)).toBe('Cukup untuk mencapai level 20, dan masih ada 1800 exp point yang tersisa!');
      expect(calcByExp(50000)).toBe('Cukup untuk mencapai level 27, dan masih ada 800 exp point yang tersisa!');
    });

    it('should return correct string when have insufficient exp to leveling up', () => {
      expect(calcByExp(500)).toBe('Exp point sebanyak 500 tidak cukup untuk naik ke level selanjutnya!');
      expect(calcByExp(100)).toBe('Exp point sebanyak 100 tidak cukup untuk naik ke level selanjutnya!');
      expect(calcByExp(1000)).toBe('Exp point sebanyak 1000 tidak cukup untuk naik ke level selanjutnya!');
    });
  });
});

describe('test calcByLevel function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(calcByLevel(10)).not.toBeNull();
      expect(calcByLevel(200)).not.toBeNull();
      expect(typeof calcByLevel(10)).toBe('string');
      expect(typeof calcByLevel(200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string', () => {
      expect(calcByLevel(3)).toBe('Untuk mencapai level 3 membutuhkan 2400 exp point!');
      expect(calcByLevel(4)).toBe('Untuk mencapai level 4 membutuhkan 3600 exp point!');
      expect(calcByLevel(10)).toBe('Untuk mencapai level 10 membutuhkan 10800 exp point!');
      expect(calcByLevel(15)).toBe('Untuk mencapai level 15 membutuhkan 16800 exp point!');
    });
  });
});

describe('test gameLevelingUpCalculator function', () => {
  describe('function should not return null', () => {
    it('should return a string', () => {
      expect(gameLevelingUpCalculator('level', 10)).not.toBeNull();
      expect(gameLevelingUpCalculator('level', 100)).not.toBeNull();
      expect(gameLevelingUpCalculator('level', 1)).not.toBeNull();
      expect(gameLevelingUpCalculator('exp', 2000)).not.toBeNull();
      expect(gameLevelingUpCalculator('exp', 200)).not.toBeNull();
      expect(gameLevelingUpCalculator('exp', 2500)).not.toBeNull();
      expect(gameLevelingUpCalculator('volue', 2500)).not.toBeNull();
      expect(gameLevelingUpCalculator('coins', 2500)).not.toBeNull();
      expect(typeof gameLevelingUpCalculator('level', 10)).toBe('string');
      expect(typeof gameLevelingUpCalculator('exp', 200)).toBe('string');
      expect(typeof gameLevelingUpCalculator('value', 200)).toBe('string');
      expect(typeof gameLevelingUpCalculator('coins', 200)).toBe('string');
    });
  });

  describe('function should return correct value', () => {
    it('should return correct string when input type is level', () => {
      expect(gameLevelingUpCalculator('level', 10)).toBe('Untuk mencapai level 10 membutuhkan 10800 exp point!');
      expect(gameLevelingUpCalculator('level', 1)).toBe('Untuk mencapai level 1 membutuhkan 0 exp point!');
      expect(gameLevelingUpCalculator('level', 12)).toBe('Untuk mencapai level 12 membutuhkan 13200 exp point!');
      expect(gameLevelingUpCalculator('level', 3)).toBe('Untuk mencapai level 3 membutuhkan 2400 exp point!');
      expect(gameLevelingUpCalculator('level', 40)).toBe('Untuk mencapai level 40 membutuhkan 86400 exp point!');
    });

    it('should return correct string when input type is exp', () => {
      expect(gameLevelingUpCalculator('exp', 5750)).toBe('Cukup untuk mencapai level 5, dan masih ada 950 exp point yang tersisa!');
      expect(gameLevelingUpCalculator('exp', 2750)).toBe('Cukup untuk mencapai level 3, dan masih ada 350 exp point yang tersisa!');
      expect(gameLevelingUpCalculator('exp', 15000)).toBe('Cukup untuk mencapai level 13, dan masih ada 600 exp point yang tersisa!');
      expect(gameLevelingUpCalculator('exp', 100)).toBe('Exp point sebanyak 100 tidak cukup untuk naik ke level selanjutnya!');
      expect(gameLevelingUpCalculator('exp', 550)).toBe('Exp point sebanyak 550 tidak cukup untuk naik ke level selanjutnya!');
    });

    it('should return correct string when input type not level/exp', () => {
      expect(gameLevelingUpCalculator('value', 5750)).toBe('Please input the correct type!');
      expect(gameLevelingUpCalculator('coins', 2750)).toBe('Please input the correct type!');
      expect(gameLevelingUpCalculator('gold', 15000)).toBe('Please input the correct type!');
    });
  });
});
