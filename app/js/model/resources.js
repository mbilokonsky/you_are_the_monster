app.service('HRService', function() {
  var employees = [
    {id: 0, name: "Joe Smith", morale: 100, department: "Electronics", profit: 100},
    {id: 1, name: "Mary Sue", morale: 100, department: "Lawn Care", profit: 250},
    {id: 2, name: "Pat Johnson", morale: 100, department: "Web Services", profit: -20}
  ];

  function getEmployeeById(id) {
    return employees.reduce(function(target, subject) {
      if (target) { return target; }
      if (subject.id === id) { return subject; }
    }, null);
  }

  return {
    name: "employees",
    snapshot: function() {
      var count = employees.length;
      var totalMorale = employees.reduce(function(morale, person) {
        return morale + person.morale;
      }, 0);
      var averageMorale = totalMorale / count;

      return count + " employees @ " + averageMorale + " morale.";
    },
    updateMorale: function(id, delta) {
      getEmployeeById(id).morale += delta;
    },
    updateProfit: function(id, delta) {
      getEmployeeById(id).profit += delta;
    },
    getStaff: function() {
      var output = [];
      angular.copy(employees, output);
      return output;
    }
  };
}).service('financials', function() {
  var money = 1000000;

  return {
    name: 'money',
    snapshot: function() { return money; }
  };
}).service('misery', function() {
  var misery = 0;

  return {
    name: 'misery',
    snapshot: function() { return misery; }
  };
});

app.service('resources', function(HRService, financials, misery) {
  var resources = {
    HR: HRService,
    Financials: financials,
    Misery: misery
  };

  return resources;
});