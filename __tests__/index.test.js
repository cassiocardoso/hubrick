const rules = require('../src/rules.json');
const getRuleById = require('../src/index').getRuleById;
const log = require('../src/index').log;
const applyRule = require('../src/index').applyRule;
const startFlowEngine = require('../src/index').startFlowEngine;

describe('getRuleById', () => {
  it('should be a function', () => {
    expect(typeof getRuleById).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof getRuleById(1)).toBe('object');
  });

  it('should return ID=1 for first call', () => {
    expect(getRuleById(1).id).toBe(1);
  });
});

describe('log', () => {
  it('should be a function', () => {
    expect(typeof log).toBe('function');
  });
});

describe('applyRule', () => {
  it('should be a function', () => {
    expect(typeof applyRule).toBe('function');
  });
});

describe('startFlowEngine', () => {
  it('should be a function', () => {
    expect(typeof startFlowEngine).toBe('function');
  });
});
