// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTestBadge = `query GetTestBadge($badgeId: String!) {
  getTestBadge(badgeId: $badgeId) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const listTestBadges = `query ListTestBadges(
  $filter: TableTestBadgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      badgeId
      name
      imageUrl
      maxMinutes
      minCorrectAnswers
      minHelpersUse
    }
    nextToken
  }
}
`;
export const getTestGrade = `query GetTestGrade($gradeId: String!) {
  getTestGrade(gradeId: $gradeId) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const listTestGrades = `query ListTestGrades(
  $filter: TableTestGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      gradeId
      name
      vocabularyUrl
    }
    nextToken
  }
}
`;
export const getTestLevel = `query GetTestLevel($levelName: String!) {
  getTestLevel(levelName: $levelName) {
    levelName
    points
  }
}
`;
export const listTestLevels = `query ListTestLevels(
  $filter: TableTestLevelFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      levelName
      points
    }
    nextToken
  }
}
`;
export const getTestMilestone = `query GetTestMilestone($milestoneId: String!) {
  getTestMilestone(milestoneId: $milestoneId) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const listTestMilestones = `query ListTestMilestones(
  $filter: TableTestMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestMilestones(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      milestoneId
      categoryId
      name
      videoUrl
    }
    nextToken
  }
}
`;
export const getTestMilestoneCategory = `query GetTestMilestoneCategory($categoryId: String!) {
  getTestMilestoneCategory(categoryId: $categoryId) {
    categoryId
    gradeId
    name
  }
}
`;
export const listTestMilestoneCategories = `query ListTestMilestoneCategories(
  $filter: TableTestMilestoneCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestMilestoneCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      categoryId
      gradeId
      name
    }
    nextToken
  }
}
`;
export const getTestQuestion = `query GetTestQuestion($questionId: String!) {
  getTestQuestion(questionId: $questionId) {
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
export const getTestQuestionFull = `query GetTestQuestionFull($questionId: String!) {
  getTestQuestionFull(questionId: $questionId) {
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
`;
export const listTestQuestions = `query ListTestQuestions(
  $filter: TableTestQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTestQuestionOption = `query GetTestQuestionOption($optionId: String!) {
  getTestQuestionOption(optionId: $optionId) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const listTestQuestionOptions = `query ListTestQuestionOptions(
  $filter: TableTestQuestionOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestQuestionOptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      optionId
      questionId
      isCorrect
      position
      text
    }
    nextToken
  }
}
`;
export const getTestUser = `query GetTestUser($userId: String!) {
  getTestUser(userId: $userId) {
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
export const getTestLearner = `query GetTestLearner($userId: String!) {
  getTestLearner(userId: $userId) {
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
    grade {
      gradeId
      name
      vocabularyUrl
    }
    categoryId
    milestoneId
    targetDate
    targetAnswers
    targetHelpers
    instructorUser {
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
    currentUserMilestoneId
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
    badges {
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
  }
}
`;
export const listTestLearners = `query ListTestLearners(
  $filter: TableTestLearnerFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      grade {
        gradeId
        name
        vocabularyUrl
      }
      categoryId
      milestoneId
      targetDate
      targetAnswers
      targetHelpers
      instructorUser {
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
      currentUserMilestoneId
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
      badges {
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
    }
    nextToken
  }
}
`;
export const listTestUsers = `query ListTestUsers(
  $filter: TableTestUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTestCount = `query GetTestCount {
  getTestCount {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const getTestLevelsCount = `query GetTestLevelsCount {
  getTestLevelsCount {
    count
  }
}
`;
export const getTestCountArray = `query GetTestCountArray {
  getTestCountArray {
    items {
      count
      entity
      levels {
        count
      }
    }
  }
}
`;
export const countTestBadges = `query CountTestBadges(
  $filter: TableTestBadgeFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestGrades = `query CountTestGrades(
  $filter: TableTestGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestLevels = `query CountTestLevels(
  $filter: TableTestLevelFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestMilestones = `query CountTestMilestones(
  $filter: TableTestMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestMilestones(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestMilestoneCategories = `query CountTestMilestoneCategories(
  $filter: TableTestMilestoneCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestMilestoneCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestQuestions = `query CountTestQuestions(
  $filter: TableTestQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestQuestionOptions = `query CountTestQuestionOptions(
  $filter: TableTestQuestionOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestQuestionOptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestUsers = `query CountTestUsers(
  $filter: TableTestUserFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestCreditPackages = `query CountTestCreditPackages(
  $filter: TableTestCreditPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  countTestCreditPackages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const countTestInstructors = `query CountTestInstructors {
  countTestInstructors {
    count
    entity
    levels {
      count
    }
  }
}
`;
export const getTestUserMilestone = `query GetTestUserMilestone($userMilestoneId: String!) {
  getTestUserMilestone(userMilestoneId: $userMilestoneId) {
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
export const listTestUserMilestones = `query ListTestUserMilestones(
  $filter: TableTestUserMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestUserMilestones(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getTestUserQuestion = `query GetTestUserQuestion($userQuestionId: String!) {
  getTestUserQuestion(userQuestionId: $userQuestionId) {
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
export const listTestUserQuestions = `query ListTestUserQuestions(
  $filter: TableTestUserQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestUserQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getTestMilestoneFull = `query GetTestMilestoneFull($milestoneId: String!) {
  getTestMilestoneFull(milestoneId: $milestoneId) {
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
}
`;
export const getTestUserBadge = `query GetTestUserBadge($userBadgeId: String!) {
  getTestUserBadge(userBadgeId: $userBadgeId) {
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
export const listTestUserBadges = `query ListTestUserBadges(
  $filter: TableTestUserBadgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestUserBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTestMyPalMessage = `query GetTestMyPalMessage($messageId: String!) {
  getTestMyPalMessage(messageId: $messageId) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const listTestMyPalMessages = `query ListTestMyPalMessages(
  $filter: TableTestMyPalMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestMyPalMessages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      messageId
      text
      case
      caseTitle
    }
    nextToken
  }
}
`;
export const getTestMyPal = `query GetTestMyPal($MyPalId: String!) {
  getTestMyPal(MyPalId: $MyPalId) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const getTestMyPalByLearnerId = `query GetTestMyPalByLearnerId($learnerUserId: String!) {
  getTestMyPalByLearnerId(learnerUserId: $learnerUserId) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const getTestMyPalByInstructorId = `query GetTestMyPalByInstructorId(
  $filter: TableTestMyPalFilterInput
  $limit: Int
  $nextToken: String
) {
  getTestMyPalByInstructorId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      MyPalId
      instructorUserId
      learnerUserId
      MyPalParams
    }
    nextToken
  }
}
`;
export const listTestMyPals = `query ListTestMyPals(
  $filter: TableTestMyPalFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestMyPals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      MyPalId
      instructorUserId
      learnerUserId
      MyPalParams
    }
    nextToken
  }
}
`;
export const getTestCreditPackage = `query GetTestCreditPackage($creditPackageId: String!) {
  getTestCreditPackage(creditPackageId: $creditPackageId) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
export const listTestCreditPackages = `query ListTestCreditPackages(
  $filter: TableTestCreditPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestCreditPackages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      creditPackageId
      name
      costUSD
      amountCredits
    }
    nextToken
  }
}
`;
export const confirmPayment = `query ConfirmPayment($orderId: String, $packageId: String, $userId: String) {
  confirmPayment(orderId: $orderId, packageId: $packageId, userId: $userId)
}
`;
