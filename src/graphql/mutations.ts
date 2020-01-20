// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTestBadge = `mutation CreateTestBadge($input: CreateTestBadgeInput!) {
  createTestBadge(input: $input) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const updateTestBadge = `mutation UpdateTestBadge($input: UpdateTestBadgeInput!) {
  updateTestBadge(input: $input) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const deleteTestBadge = `mutation DeleteTestBadge($input: DeleteTestBadgeInput!) {
  deleteTestBadge(input: $input) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const createTestGrade = `mutation CreateTestGrade($input: CreateTestGradeInput!) {
  createTestGrade(input: $input) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const updateTestGrade = `mutation UpdateTestGrade($input: UpdateTestGradeInput!) {
  updateTestGrade(input: $input) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const deleteTestGrade = `mutation DeleteTestGrade($input: DeleteTestGradeInput!) {
  deleteTestGrade(input: $input) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const createTestLevel = `mutation CreateTestLevel($input: CreateTestLevelInput!) {
  createTestLevel(input: $input) {
    levelName
    points
  }
}
`;
export const updateTestLevel = `mutation UpdateTestLevel($input: UpdateTestLevelInput!) {
  updateTestLevel(input: $input) {
    levelName
    points
  }
}
`;
export const deleteTestLevel = `mutation DeleteTestLevel($input: DeleteTestLevelInput!) {
  deleteTestLevel(input: $input) {
    levelName
    points
  }
}
`;
export const createTestMilestone = `mutation CreateTestMilestone($input: CreateTestMilestoneInput!) {
  createTestMilestone(input: $input) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const updateTestMilestone = `mutation UpdateTestMilestone($input: UpdateTestMilestoneInput!) {
  updateTestMilestone(input: $input) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const deleteTestMilestone = `mutation DeleteTestMilestone($input: DeleteTestMilestoneInput!) {
  deleteTestMilestone(input: $input) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const createTestMilestoneCategory = `mutation CreateTestMilestoneCategory(
  $input: CreateTestMilestoneCategoryInput!
) {
  createTestMilestoneCategory(input: $input) {
    categoryId
    gradeId
    name
  }
}
`;
export const updateTestMilestoneCategory = `mutation UpdateTestMilestoneCategory(
  $input: UpdateTestMilestoneCategoryInput!
) {
  updateTestMilestoneCategory(input: $input) {
    categoryId
    gradeId
    name
  }
}
`;
export const deleteTestMilestoneCategory = `mutation DeleteTestMilestoneCategory(
  $input: DeleteTestMilestoneCategoryInput!
) {
  deleteTestMilestoneCategory(input: $input) {
    categoryId
    gradeId
    name
  }
}
`;
export const createTestQuestion = `mutation CreateTestQuestion($input: CreateTestQuestionInput!) {
  createTestQuestion(input: $input) {
    questionId
    milestoneId
    levelName
    solution
    shortSolution
    text
    videoUrl
    vocabularyUrl
    position
  }
}
`;
export const createTestQuestionFull = `mutation CreateTestQuestionFull($input: CreateTestQuestionFullInput!) {
  createTestQuestionFull(input: $input) {
    questionId
    milestoneId
    levelName
    solution
    shortSolution
    text
    videoUrl
    vocabularyUrl
    position
  }
}
`;
export const updateTestQuestion = `mutation UpdateTestQuestion($input: UpdateTestQuestionInput!) {
  updateTestQuestion(input: $input) {
    questionId
    milestoneId
    levelName
    solution
    shortSolution
    text
    videoUrl
    vocabularyUrl
    position
  }
}
`;
export const deleteTestQuestion = `mutation DeleteTestQuestion($input: DeleteTestQuestionInput!) {
  deleteTestQuestion(input: $input) {
    questionId
    milestoneId
    levelName
    solution
    shortSolution
    text
    videoUrl
    vocabularyUrl
    position
  }
}
`;
export const createTestQuestionOption = `mutation CreateTestQuestionOption(
  $input: CreateTestQuestionOptionInput!
) {
  createTestQuestionOption(input: $input) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const updateTestQuestionOption = `mutation UpdateTestQuestionOption(
  $input: UpdateTestQuestionOptionInput!
) {
  updateTestQuestionOption(input: $input) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const deleteTestQuestionOption = `mutation DeleteTestQuestionOption(
  $input: DeleteTestQuestionOptionInput!
) {
  deleteTestQuestionOption(input: $input) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const createTestUser = `mutation CreateTestUser($input: CreateTestUserInput!) {
  createTestUser(input: $input) {
    userId
    activationCode
    email
    password
    phone
    firstName
    lastName
    role
    instructorUserId
    gradeId
    categoryId
    milestoneId
    targetDate
    targetAnswers
    targetHelpers
    creditsBalance
  }
}
`;
export const updateTestUser = `mutation UpdateTestUser($input: UpdateTestUserInput!) {
  updateTestUser(input: $input) {
    userId
    activationCode
    email
    password
    phone
    firstName
    lastName
    role
    instructorUserId
    gradeId
    categoryId
    milestoneId
    targetDate
    targetAnswers
    targetHelpers
    creditsBalance
  }
}
`;
export const deleteTestUser = `mutation DeleteTestUser($input: DeleteTestUserInput!) {
  deleteTestUser(input: $input) {
    userId
    activationCode
    email
    password
    phone
    firstName
    lastName
    role
    instructorUserId
    gradeId
    categoryId
    milestoneId
    targetDate
    targetAnswers
    targetHelpers
    creditsBalance
  }
}
`;
export const createTestUserMilestone = `mutation CreateTestUserMilestone($input: CreateTestUserMilestoneInput!) {
  createTestUserMilestone(input: $input) {
    userMilestoneId
    userId
    milestoneId
    assignedAt
    completeBy
    completedAt
    emotionAtBeginning
    emotionAfterCompletion
    points
    correctPercentage
    targetCorrectPercentage
    targetHelpersUsePercentage
    milestone {
      milestoneId
      categoryId
      name
      questions {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
    }
    questionAnswers {
      userQuestionId
      userId
      questionId
      question {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
      userMilestoneId
      selectedOptionId
      answeredAt
      readHelperUsed
      videoHelperUsed
      vocabularyHelperUsed
      solutionHelperUsed
    }
    userBadges {
      userBadgeId
      userMilestoneId
      badgeId
      userId
      createdAt
      badge {
        badgeId
        name
        imageUrl
        maxMinutes
        minCorrectAnswers
        minHelpersUse
      }
      userMilestone {
        userMilestoneId
        userId
        milestoneId
        assignedAt
        completeBy
        completedAt
        emotionAtBeginning
        emotionAfterCompletion
        points
        correctPercentage
        targetCorrectPercentage
        targetHelpersUsePercentage
        questionAnswers {
          userQuestionId
          userId
          questionId
          userMilestoneId
          selectedOptionId
          answeredAt
          readHelperUsed
          videoHelperUsed
          vocabularyHelperUsed
          solutionHelperUsed
        }
        userBadges {
          userBadgeId
          userMilestoneId
          badgeId
          userId
          createdAt
        }
      }
    }
  }
}
`;
export const updateTestUserMilestone = `mutation UpdateTestUserMilestone($input: UpdateTestUserMilestoneInput!) {
  updateTestUserMilestone(input: $input) {
    userMilestoneId
    userId
    milestoneId
    assignedAt
    completeBy
    completedAt
    emotionAtBeginning
    emotionAfterCompletion
    points
    correctPercentage
    targetCorrectPercentage
    targetHelpersUsePercentage
    milestone {
      milestoneId
      categoryId
      name
      questions {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
    }
    questionAnswers {
      userQuestionId
      userId
      questionId
      question {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
      userMilestoneId
      selectedOptionId
      answeredAt
      readHelperUsed
      videoHelperUsed
      vocabularyHelperUsed
      solutionHelperUsed
    }
    userBadges {
      userBadgeId
      userMilestoneId
      badgeId
      userId
      createdAt
      badge {
        badgeId
        name
        imageUrl
        maxMinutes
        minCorrectAnswers
        minHelpersUse
      }
      userMilestone {
        userMilestoneId
        userId
        milestoneId
        assignedAt
        completeBy
        completedAt
        emotionAtBeginning
        emotionAfterCompletion
        points
        correctPercentage
        targetCorrectPercentage
        targetHelpersUsePercentage
        questionAnswers {
          userQuestionId
          userId
          questionId
          userMilestoneId
          selectedOptionId
          answeredAt
          readHelperUsed
          videoHelperUsed
          vocabularyHelperUsed
          solutionHelperUsed
        }
        userBadges {
          userBadgeId
          userMilestoneId
          badgeId
          userId
          createdAt
        }
      }
    }
  }
}
`;
export const deleteTestUserMilestone = `mutation DeleteTestUserMilestone($input: DeleteTestUserMilestoneInput!) {
  deleteTestUserMilestone(input: $input) {
    userMilestoneId
    userId
    milestoneId
    assignedAt
    completeBy
    completedAt
    emotionAtBeginning
    emotionAfterCompletion
    points
    correctPercentage
    targetCorrectPercentage
    targetHelpersUsePercentage
    milestone {
      milestoneId
      categoryId
      name
      questions {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
    }
    questionAnswers {
      userQuestionId
      userId
      questionId
      question {
        questionId
        milestoneId
        levelName
        solution
        shortSolution
        text
        videoUrl
        vocabularyUrl
        position
        options {
          optionId
          questionId
          isCorrect
          position
          text
        }
      }
      userMilestoneId
      selectedOptionId
      answeredAt
      readHelperUsed
      videoHelperUsed
      vocabularyHelperUsed
      solutionHelperUsed
    }
    userBadges {
      userBadgeId
      userMilestoneId
      badgeId
      userId
      createdAt
      badge {
        badgeId
        name
        imageUrl
        maxMinutes
        minCorrectAnswers
        minHelpersUse
      }
      userMilestone {
        userMilestoneId
        userId
        milestoneId
        assignedAt
        completeBy
        completedAt
        emotionAtBeginning
        emotionAfterCompletion
        points
        correctPercentage
        targetCorrectPercentage
        targetHelpersUsePercentage
        questionAnswers {
          userQuestionId
          userId
          questionId
          userMilestoneId
          selectedOptionId
          answeredAt
          readHelperUsed
          videoHelperUsed
          vocabularyHelperUsed
          solutionHelperUsed
        }
        userBadges {
          userBadgeId
          userMilestoneId
          badgeId
          userId
          createdAt
        }
      }
    }
  }
}
`;
export const createTestUserQuestion = `mutation CreateTestUserQuestion($input: CreateTestUserQuestionInput!) {
  createTestUserQuestion(input: $input) {
    userQuestionId
    userId
    questionId
    question {
      questionId
      milestoneId
      levelName
      solution
      shortSolution
      text
      videoUrl
      vocabularyUrl
      position
      options {
        optionId
        questionId
        isCorrect
        position
        text
      }
    }
    userMilestoneId
    selectedOptionId
    answeredAt
    readHelperUsed
    videoHelperUsed
    vocabularyHelperUsed
    solutionHelperUsed
  }
}
`;
export const updateTestUserQuestion = `mutation UpdateTestUserQuestion($input: UpdateTestUserQuestionInput!) {
  updateTestUserQuestion(input: $input) {
    userQuestionId
    userId
    questionId
    question {
      questionId
      milestoneId
      levelName
      solution
      shortSolution
      text
      videoUrl
      vocabularyUrl
      position
      options {
        optionId
        questionId
        isCorrect
        position
        text
      }
    }
    userMilestoneId
    selectedOptionId
    answeredAt
    readHelperUsed
    videoHelperUsed
    vocabularyHelperUsed
    solutionHelperUsed
  }
}
`;
export const deleteTestUserQuestion = `mutation DeleteTestUserQuestion($input: DeleteTestUserQuestionInput!) {
  deleteTestUserQuestion(input: $input) {
    userQuestionId
    userId
    questionId
    question {
      questionId
      milestoneId
      levelName
      solution
      shortSolution
      text
      videoUrl
      vocabularyUrl
      position
      options {
        optionId
        questionId
        isCorrect
        position
        text
      }
    }
    userMilestoneId
    selectedOptionId
    answeredAt
    readHelperUsed
    videoHelperUsed
    vocabularyHelperUsed
    solutionHelperUsed
  }
}
`;
export const createTestUserBadge = `mutation CreateTestUserBadge($input: CreateTestUserBadgeInput!) {
  createTestUserBadge(input: $input) {
    userBadgeId
    userMilestoneId
    badgeId
    userId
    createdAt
    badge {
      badgeId
      name
      imageUrl
      maxMinutes
      minCorrectAnswers
      minHelpersUse
    }
    userMilestone {
      userMilestoneId
      userId
      milestoneId
      assignedAt
      completeBy
      completedAt
      emotionAtBeginning
      emotionAfterCompletion
      points
      correctPercentage
      targetCorrectPercentage
      targetHelpersUsePercentage
      questionAnswers {
        userQuestionId
        userId
        questionId
        userMilestoneId
        selectedOptionId
        answeredAt
        readHelperUsed
        videoHelperUsed
        vocabularyHelperUsed
        solutionHelperUsed
      }
      userBadges {
        userBadgeId
        userMilestoneId
        badgeId
        userId
        createdAt
      }
    }
  }
}
`;
export const updateTestUserBadge = `mutation UpdateTestUserBadge($input: UpdateTestUserBadgeInput!) {
  updateTestUserBadge(input: $input) {
    userBadgeId
    userMilestoneId
    badgeId
    userId
    createdAt
    badge {
      badgeId
      name
      imageUrl
      maxMinutes
      minCorrectAnswers
      minHelpersUse
    }
    userMilestone {
      userMilestoneId
      userId
      milestoneId
      assignedAt
      completeBy
      completedAt
      emotionAtBeginning
      emotionAfterCompletion
      points
      correctPercentage
      targetCorrectPercentage
      targetHelpersUsePercentage
      questionAnswers {
        userQuestionId
        userId
        questionId
        userMilestoneId
        selectedOptionId
        answeredAt
        readHelperUsed
        videoHelperUsed
        vocabularyHelperUsed
        solutionHelperUsed
      }
      userBadges {
        userBadgeId
        userMilestoneId
        badgeId
        userId
        createdAt
      }
    }
  }
}
`;
export const deleteTestUserBadge = `mutation DeleteTestUserBadge($input: DeleteTestUserBadgeInput!) {
  deleteTestUserBadge(input: $input) {
    userBadgeId
    userMilestoneId
    badgeId
    userId
    createdAt
    badge {
      badgeId
      name
      imageUrl
      maxMinutes
      minCorrectAnswers
      minHelpersUse
    }
    userMilestone {
      userMilestoneId
      userId
      milestoneId
      assignedAt
      completeBy
      completedAt
      emotionAtBeginning
      emotionAfterCompletion
      points
      correctPercentage
      targetCorrectPercentage
      targetHelpersUsePercentage
      questionAnswers {
        userQuestionId
        userId
        questionId
        userMilestoneId
        selectedOptionId
        answeredAt
        readHelperUsed
        videoHelperUsed
        vocabularyHelperUsed
        solutionHelperUsed
      }
      userBadges {
        userBadgeId
        userMilestoneId
        badgeId
        userId
        createdAt
      }
    }
  }
}
`;
export const createTestMyPalMessage = `mutation CreateTestMyPalMessage($input: CreateTestMyPalMessageInput!) {
  createTestMyPalMessage(input: $input) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const updateTestMyPalMessage = `mutation UpdateTestMyPalMessage($input: UpdateTestMyPalMessageInput!) {
  updateTestMyPalMessage(input: $input) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const deleteTestMyPalMessage = `mutation DeleteTestMyPalMessage($input: DeleteTestMyPalMessageInput!) {
  deleteTestMyPalMessage(input: $input) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const createTestMyPal = `mutation CreateTestMyPal($input: CreateTestMyPalInput!) {
  createTestMyPal(input: $input) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const updateTestMyPal = `mutation UpdateTestMyPal($input: UpdateTestMyPalInput!) {
  updateTestMyPal(input: $input) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const deleteTestMyPal = `mutation DeleteTestMyPal($input: DeleteTestMyPalInput!) {
  deleteTestMyPal(input: $input) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const createTestCreditPackage = `mutation CreateTestCreditPackage($input: CreateTestCreditPackageInput!) {
  createTestCreditPackage(input: $input) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
export const updateTestCreditPackage = `mutation UpdateTestCreditPackage($input: UpdateTestCreditPackageInput!) {
  updateTestCreditPackage(input: $input) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
export const deleteTestCreditPackage = `mutation DeleteTestCreditPackage($input: DeleteTestCreditPackageInput!) {
  deleteTestCreditPackage(input: $input) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
