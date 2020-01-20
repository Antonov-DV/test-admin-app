export const countAll = `query CountAll {
countTestBadges {
    count
  }
countTestGrades {
    count
  }  
countTestLevels {
    count
  }  
countTestMilestones {
    count
  }  
countTestMilestoneCategories {
    count
  }  
countTestQuestions {
    count
  }  
countTestQuestionOptions {
    count
  }  
countTestUsers {
    count
  }  
  countTestCreditPackages {
  count
  }
  countTestInstructors {
    count
  }
}
`;


export const listTestUsersByIds = `query ListTestUsersByIds(
  $ids: [String]
  $limit: Int
  $nextToken: String
) {
listTestUsersByIds(ids: $ids, limit: $limit, nextToken: $nextToken) {
   	items {        
        userId
      	email      	
      	firstName
      	lastName
      	attributes {
          userId
          name
          value
          attribute {
            name
            label
          }
          label
        }
      }
   }	
}
`;
