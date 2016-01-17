var featureEmpty = {
  title: '',
  descript: {
    userType: '',
    goal: '',
    reason: '',
  },
  background: {
    steps: [
      {
        detail: '',
      },
    ],
  },
  scenarios: [
    {
      id: '0',
      title: '',
      tags: '',
      steps: [
        {
          id: '0',
          detail: '',
        },
      ], 
    },
  ],
};

var featuresListOfItems = [
  {
  feature: {
    title: 'Share widget',
    link: 'share-widget'
    }
  },
  {
  feature: {
    title: 'Close Browser',
    link: 'close-browser'
    }
  },
  {
  feature: {
    title: 'Eat Lentils',
    link: 'eat-lentils'
    }
  },  
]

var featureStickyFooter = {"title":"View Subscribe Form in Sticky Footer","descript":{"userType":"As an anonymous user","goal":"I want to view the subscribe form","reason":"So that I can receive e-mail updates regarding Teach For America"},"background":{"steps":[{"detail":"","$$hashKey":"object:3"}]},"scenarios":[{"title":"","steps":[{"detail":"Given I am an anonymous user","$$hashKey":"object:8"},{"id":2,"$$hashKey":"object:11","detail":"And I am a new user"},{"id":3,"$$hashKey":"object:14","detail":"When I go to any page"},{"id":4,"$$hashKey":"object:17","detail":"Then I should see the Subscribe form in the \"Sticky Footer\" region"},{"id":5,"$$hashKey":"object:20","detail":"And I should see \"Join Our E-mail List\" as the title"},{"id":6,"$$hashKey":"object:23","detail":"And I should see \"Email\" as an input placeholder"},{"id":7,"$$hashKey":"object:26","detail":"And I should see \"Zip Code\" as an input placeholder"},{"id":8,"$$hashKey":"object:29","detail":"And I should see an input element of type \"checkbox\""},{"id":9,"$$hashKey":"object:32","detail":"And the checkbox should be checked"},{"id":10,"$$hashKey":"object:35","detail":"And I should see \"SIGN ME UP\" in the submit button"},{"id":11,"$$hashKey":"object:38"}],"$$hashKey":"object:5"}]};

var featureEmbedly = {
  title: 'TFA Embed.ly',
  descript: {
    userType: 'As an author',
    goal: 'I want to embed rich media from another provider',
    reason: 'So that I can author a richer experience for the reader and more strongly convey TFA\'s feelings regarding a subject.',
  },  
  background: {
    steps: [
      {
        detail: 'Given I am logged in as a user with the "system administrator" role',
      },
      {
        detail: 'Given "image" atoms:',
        example: 'Placeholder',
      },
    ],
  },
  scenarios: [
    {
      title: 'View a list of Atoms.',
      steps: [
        {
          id: '0',
          detail: 'When I visit "/admin/content/atoms"',
        },
        {
          id: '1',
          detail: 'And I click "Scald ID"',          
        },
        {
          id: '2',
          detail: 'Then I should see the text "Placeholder #1"',
        },
      ],
    },
    /*{
      title: 'Delete a list of Atoms.',
      steps: [
        {
          id: '0',
          detail: 'When I visit "/admin/content/atoms"',
        },
        {
          id: '1',
          detail: 'And I click "Scald ID"',          
        },
        {
          id: '2',
          detail: 'Then I should see the text "Placeholder #2"',
        },
      ],
    },*/   
  ],
};