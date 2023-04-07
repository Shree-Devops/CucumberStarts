$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\w2\\cucumber\\test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#I want to use this template for my feature file"
    },
    {
      "line": 23,
      "value": "#@tag1"
    }
  ],
  "line": 24,
  "name": "Login",
  "description": "",
  "id": "title-of-your-feature;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters username string",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters password string",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User navigates to \"First\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 11
    }
  ],
  "location": "stepDefinition.login(String)"
});
formatter.result({
  "duration": 241785328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    }
  ],
  "location": "stepDefinition.username(String)"
});
formatter.result({
  "duration": 300726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    }
  ],
  "location": "stepDefinition.username(String)"
});
formatter.result({
  "duration": 218104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 15
    }
  ],
  "location": "stepDefinition.submit(String)"
});
formatter.result({
  "duration": 490604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First",
      "offset": 19
    }
  ],
  "location": "stepDefinition.nextPage(String)"
});
formatter.result({
  "duration": 339216,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "onboarding",
  "description": "",
  "id": "title-of-your-feature;onboarding;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is on Onboarding page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters shree string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Ok button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User navigates to \"next\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Onboarding",
      "offset": 11
    }
  ],
  "location": "stepDefinition.login(String)"
});
formatter.result({
  "duration": 186286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shree",
      "offset": 12
    }
  ],
  "location": "stepDefinition.username(String)"
});
formatter.result({
  "duration": 169864,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.password()"
});
formatter.result({
  "duration": 95452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ok",
      "offset": 15
    }
  ],
  "location": "stepDefinition.submit(String)"
});
formatter.result({
  "duration": 197576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 19
    }
  ],
  "location": "stepDefinition.nextPage(String)"
});
formatter.result({
  "duration": 292515,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "onboarding",
  "description": "",
  "id": "title-of-your-feature;onboarding;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is on Onboarding page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters mohini string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Ok button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User navigates to \"next\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Onboarding",
      "offset": 11
    }
  ],
  "location": "stepDefinition.login(String)"
});
formatter.result({
  "duration": 232985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohini",
      "offset": 12
    }
  ],
  "location": "stepDefinition.username(String)"
});
formatter.result({
  "duration": 152929,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.password()"
});
formatter.result({
  "duration": 113414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ok",
      "offset": 15
    }
  ],
  "location": "stepDefinition.submit(String)"
});
formatter.result({
  "duration": 424404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 19
    }
  ],
  "location": "stepDefinition.nextPage(String)"
});
formatter.result({
  "duration": 299700,
  "status": "passed"
});
});