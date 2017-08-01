const rules = require('./rules.json');
const chalk = require('chalk');
const appliedRules = [];

getRuleById = id => {
  return rules.rules.find(d => d.id === id)
}

log = (msg, type) => {
  const result = type === 'success' ? chalk.green(msg) : chalk.red(msg)

  console.log(result);
}

applyRule = (rule, obj) => {
  // if rule hasn't been applied yet move on
  if (!appliedRules.includes(rule.id)) {
    const result = eval(`(${rule.function})`).call(null, obj);
    const nextRuleId = result ? rule.true_id : rule.false_id
    const nextRule = nextRuleId ? getRuleById(nextRuleId) : null

    if (result) {
      appliedRules.push(rule.id)
      log(`Rule ${rule.id} passed`, 'success')
    }
    else {
      log(`Rule ${rule.id} failed`, 'error')
    }

    nextRule ? applyRule(nextRule, obj) : ''
  }
}

startFlowEngine = (rules, obj) => {
  applyRule(rules[0], obj)
}

startFlowEngine(rules.rules, {
  firstname: 'Cassio',
  lastname: 'Cardoso'
})

module.exports = {
    getRuleById: getRuleById,
    log: log,
    applyRule: applyRule,
    startFlowEngine: startFlowEngine
};
