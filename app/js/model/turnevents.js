app.service("TurnEventService", function(resources) {
  var shitty_getaway = {
    label: "Schedule retreat for hurricane season",
    image: "/img/shitty_trip.png",
    flavor: "Great news! This year's mandatory team-building retreat will be held on a private carribean island in september...",
    actions: [],
    details: {},
    choose: function() {

    }
  };

  var fire_someone = {
    label: "Fire a populare employee",
    image: "/img/fired.png",
    flavor: "It's not personal, it's just that everyone really likes you and the company feels like you're clearly spending too much time socializing and not enough time working.",
    actions: [
      {type: "chooseOne", from: "employees", bindTo: "victim", label: "Who will you fire?"}
    ],
    details: {
      employees: resources.HR.getStaff().map(function(employee) { return employee.name; })
    },
    choose: function(details) {
      var employeeToFire = details.victim;
      id = resources.HR.getEmployeeIdFromName(employeeToFire);
      resources.HR.fire(id);
    }
  };

  var increase_workload = {
    label: "Increase department workload.",
    image: "/img/work_late.png",
    flavor: "We're going to need everyone to pull a little harder for a little while - please come to our kickoff meeting at 8pm tonight.",
    actions: [
      {type: "chooseOne", from: "departments", bindTo: "department", label: "What department gets the extra work?"},
      {type: "inputNumber", range:[1, 10], bindTo: "weeks", label: "For how many weeks will this department be doing extra work?"}
    ],
    details: {
      departments: resources.HR.getStaff().reduce(function(depts, employee) {
        if (depts.indexOf(employee.department) === -1) {
          depts.push(employee.department);
        }

        return depts;
      }, [])
    },
    choose: function(details) {
      console.log("You have chosen to increase the workload of department " + details.department.value + " for " + details.weeks.value + " weeks.");

      var departmentEmployees = resources.HR.getStaff().reduce(function(ids, employee) {
        if (employee.department === details.department.value) {
          ids.push(employee.id);
        }

        return ids;
      }, []);

      console.log("The employees affected are:", departmentEmployees);

      departmentEmployees.forEach(function(id) {
        resources.HR.updateMorale(id, -10);
        resources.HR.updateProfit(id, 10);
      });
    }
  };

  return {
    generateEvents: function() {
      return [increase_workload, shitty_getaway, fire_someone];
    }
  };
});