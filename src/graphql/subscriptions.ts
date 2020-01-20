// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTestBadge = `subscription OnCreateTestBadge(
  $badgeId: String
  $name: String
  $imageUrl: String
  $maxMinutes: Int
  $minCorrectAnswers: Int
) {
  onCreateTestBadge(
    badgeId: $badgeId
    name: $name
    imageUrl: $imageUrl
    maxMinutes: $maxMinutes
    minCorrectAnswers: $minCorrectAnswers
  ) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const onUpdateTestBadge = `subscription OnUpdateTestBadge(
  $badgeId: String
  $name: String
  $imageUrl: String
  $maxMinutes: Int
  $minCorrectAnswers: Int
) {
  onUpdateTestBadge(
    badgeId: $badgeId
    name: $name
    imageUrl: $imageUrl
    maxMinutes: $maxMinutes
    minCorrectAnswers: $minCorrectAnswers
  ) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const onDeleteTestBadge = `subscription OnDeleteTestBadge(
  $badgeId: String
  $name: String
  $imageUrl: String
  $maxMinutes: Int
  $minCorrectAnswers: Int
) {
  onDeleteTestBadge(
    badgeId: $badgeId
    name: $name
    imageUrl: $imageUrl
    maxMinutes: $maxMinutes
    minCorrectAnswers: $minCorrectAnswers
  ) {
    badgeId
    name
    imageUrl
    maxMinutes
    minCorrectAnswers
    minHelpersUse
  }
}
`;
export const onCreateTestGrade = `subscription OnCreateTestGrade($gradeId: String, $name: String) {
  onCreateTestGrade(gradeId: $gradeId, name: $name) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const onUpdateTestGrade = `subscription OnUpdateTestGrade($gradeId: String, $name: String) {
  onUpdateTestGrade(gradeId: $gradeId, name: $name) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const onDeleteTestGrade = `subscription OnDeleteTestGrade($gradeId: String, $name: String) {
  onDeleteTestGrade(gradeId: $gradeId, name: $name) {
    gradeId
    name
    vocabularyUrl
  }
}
`;
export const onCreateTestLevel = `subscription OnCreateTestLevel($levelName: String, $points: Int) {
  onCreateTestLevel(levelName: $levelName, points: $points) {
    levelName
    points
  }
}
`;
export const onUpdateTestLevel = `subscription OnUpdateTestLevel($levelName: String, $points: Int) {
  onUpdateTestLevel(levelName: $levelName, points: $points) {
    levelName
    points
  }
}
`;
export const onDeleteTestLevel = `subscription OnDeleteTestLevel($levelName: String, $points: Int) {
  onDeleteTestLevel(levelName: $levelName, points: $points) {
    levelName
    points
  }
}
`;
export const onCreateTestMilestone = `subscription OnCreateTestMilestone(
  $milestoneId: String
  $categoryId: String
  $name: String
) {
  onCreateTestMilestone(
    milestoneId: $milestoneId
    categoryId: $categoryId
    name: $name
  ) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const onUpdateTestMilestone = `subscription OnUpdateTestMilestone(
  $milestoneId: String
  $categoryId: String
  $name: String
) {
  onUpdateTestMilestone(
    milestoneId: $milestoneId
    categoryId: $categoryId
    name: $name
  ) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const onDeleteTestMilestone = `subscription OnDeleteTestMilestone(
  $milestoneId: String
  $categoryId: String
  $name: String
) {
  onDeleteTestMilestone(
    milestoneId: $milestoneId
    categoryId: $categoryId
    name: $name
  ) {
    milestoneId
    categoryId
    name
    videoUrl
  }
}
`;
export const onCreateTestMilestoneCategory = `subscription OnCreateTestMilestoneCategory(
  $categoryId: String
  $gradeId: String
  $name: String
) {
  onCreateTestMilestoneCategory(
    categoryId: $categoryId
    gradeId: $gradeId
    name: $name
  ) {
    categoryId
    gradeId
    name
  }
}
`;
export const onUpdateTestMilestoneCategory = `subscription OnUpdateTestMilestoneCategory(
  $categoryId: String
  $gradeId: String
  $name: String
) {
  onUpdateTestMilestoneCategory(
    categoryId: $categoryId
    gradeId: $gradeId
    name: $name
  ) {
    categoryId
    gradeId
    name
  }
}
`;
export const onDeleteTestMilestoneCategory = `subscription OnDeleteTestMilestoneCategory(
  $categoryId: String
  $gradeId: String
  $name: String
) {
  onDeleteTestMilestoneCategory(
    categoryId: $categoryId
    gradeId: $gradeId
    name: $name
  ) {
    categoryId
    gradeId
    name
  }
}
`;
export const onCreateTestQuestion = `subscription OnCreateTestQuestion(
  $questionId: String
  $milestoneId: String
  $levelName: String
  $solution: String
  $text: String
) {
  onCreateTestQuestion(
    questionId: $questionId
    milestoneId: $milestoneId
    levelName: $levelName
    solution: $solution
    text: $text
  ) {
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
export const onUpdateTestQuestion = `subscription OnUpdateTestQuestion(
  $questionId: String
  $milestoneId: String
  $levelName: String
  $solution: String
  $text: String
) {
  onUpdateTestQuestion(
    questionId: $questionId
    milestoneId: $milestoneId
    levelName: $levelName
    solution: $solution
    text: $text
  ) {
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
export const onDeleteTestQuestion = `subscription OnDeleteTestQuestion(
  $questionId: String
  $milestoneId: String
  $levelName: String
  $solution: String
  $text: String
) {
  onDeleteTestQuestion(
    questionId: $questionId
    milestoneId: $milestoneId
    levelName: $levelName
    solution: $solution
    text: $text
  ) {
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
export const onCreateTestQuestionOption = `subscription OnCreateTestQuestionOption(
  $optionId: String
  $questionId: String
  $isCorrect: Boolean
  $position: Int
  $text: String
) {
  onCreateTestQuestionOption(
    optionId: $optionId
    questionId: $questionId
    isCorrect: $isCorrect
    position: $position
    text: $text
  ) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const onUpdateTestQuestionOption = `subscription OnUpdateTestQuestionOption(
  $optionId: String
  $questionId: String
  $isCorrect: Boolean
  $position: Int
  $text: String
) {
  onUpdateTestQuestionOption(
    optionId: $optionId
    questionId: $questionId
    isCorrect: $isCorrect
    position: $position
    text: $text
  ) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const onDeleteTestQuestionOption = `subscription OnDeleteTestQuestionOption(
  $optionId: String
  $questionId: String
  $isCorrect: Boolean
  $position: Int
  $text: String
) {
  onDeleteTestQuestionOption(
    optionId: $optionId
    questionId: $questionId
    isCorrect: $isCorrect
    position: $position
    text: $text
  ) {
    optionId
    questionId
    isCorrect
    position
    text
  }
}
`;
export const onCreateTestUser = `subscription OnCreateTestUser(
  $userId: String
  $activationCode: String
  $email: String
  $password: String
  $phone: String
) {
  onCreateTestUser(
    userId: $userId
    activationCode: $activationCode
    email: $email
    password: $password
    phone: $phone
  ) {
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
export const onUpdateTestUser = `subscription OnUpdateTestUser(
  $userId: String
  $activationCode: String
  $email: String
  $password: String
  $phone: String
) {
  onUpdateTestUser(
    userId: $userId
    activationCode: $activationCode
    email: $email
    password: $password
    phone: $phone
  ) {
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
export const onDeleteTestUser = `subscription OnDeleteTestUser(
  $userId: String
  $activationCode: String
  $email: String
  $password: String
  $phone: String
) {
  onDeleteTestUser(
    userId: $userId
    activationCode: $activationCode
    email: $email
    password: $password
    phone: $phone
  ) {
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
export const onCreateTestUserMilestone = `subscription OnCreateTestUserMilestone(
  $userMilestoneId: String
  $userId: String
  $milestoneId: String
  $assignedAt: String
  $completeBy: String
) {
  onCreateTestUserMilestone(
    userMilestoneId: $userMilestoneId
    userId: $userId
    milestoneId: $milestoneId
    assignedAt: $assignedAt
    completeBy: $completeBy
  ) {
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
export const onUpdateTestUserMilestone = `subscription OnUpdateTestUserMilestone(
  $userMilestoneId: String
  $userId: String
  $milestoneId: String
  $assignedAt: String
  $completeBy: String
) {
  onUpdateTestUserMilestone(
    userMilestoneId: $userMilestoneId
    userId: $userId
    milestoneId: $milestoneId
    assignedAt: $assignedAt
    completeBy: $completeBy
  ) {
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
export const onDeleteTestUserMilestone = `subscription OnDeleteTestUserMilestone(
  $userMilestoneId: String
  $userId: String
  $milestoneId: String
  $assignedAt: String
  $completeBy: String
) {
  onDeleteTestUserMilestone(
    userMilestoneId: $userMilestoneId
    userId: $userId
    milestoneId: $milestoneId
    assignedAt: $assignedAt
    completeBy: $completeBy
  ) {
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
export const onCreateTestUserQuestion = `subscription OnCreateTestUserQuestion(
  $userQuestionId: String
  $userId: String
  $questionId: String
  $selectedOptionId: String
  $answeredAt: String
) {
  onCreateTestUserQuestion(
    userQuestionId: $userQuestionId
    userId: $userId
    questionId: $questionId
    selectedOptionId: $selectedOptionId
    answeredAt: $answeredAt
  ) {
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
export const onUpdateTestUserQuestion = `subscription OnUpdateTestUserQuestion(
  $userQuestionId: String
  $userId: String
  $questionId: String
  $selectedOptionId: String
  $answeredAt: String
) {
  onUpdateTestUserQuestion(
    userQuestionId: $userQuestionId
    userId: $userId
    questionId: $questionId
    selectedOptionId: $selectedOptionId
    answeredAt: $answeredAt
  ) {
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
export const onDeleteTestUserQuestion = `subscription OnDeleteTestUserQuestion(
  $userQuestionId: String
  $userId: String
  $questionId: String
  $selectedOptionId: String
  $answeredAt: String
) {
  onDeleteTestUserQuestion(
    userQuestionId: $userQuestionId
    userId: $userId
    questionId: $questionId
    selectedOptionId: $selectedOptionId
    answeredAt: $answeredAt
  ) {
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
export const onCreateTestUserBadge = `subscription OnCreateTestUserBadge(
  $userBadgeId: String
  $userMilestoneId: String
  $badgeId: String
  $userId: String
  $createdAt: String
) {
  onCreateTestUserBadge(
    userBadgeId: $userBadgeId
    userMilestoneId: $userMilestoneId
    badgeId: $badgeId
    userId: $userId
    createdAt: $createdAt
  ) {
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
export const onUpdateTestUserBadge = `subscription OnUpdateTestUserBadge(
  $userBadgeId: String
  $userMilestoneId: String
  $badgeId: String
  $userId: String
  $createdAt: String
) {
  onUpdateTestUserBadge(
    userBadgeId: $userBadgeId
    userMilestoneId: $userMilestoneId
    badgeId: $badgeId
    userId: $userId
    createdAt: $createdAt
  ) {
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
export const onDeleteTestUserBadge = `subscription OnDeleteTestUserBadge(
  $userBadgeId: String
  $userMilestoneId: String
  $badgeId: String
  $userId: String
  $createdAt: String
) {
  onDeleteTestUserBadge(
    userBadgeId: $userBadgeId
    userMilestoneId: $userMilestoneId
    badgeId: $badgeId
    userId: $userId
    createdAt: $createdAt
  ) {
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
export const onCreateTestMyPalMessage = `subscription OnCreateTestMyPalMessage(
  $messageId: String
  $text: String
  $case: String
) {
  onCreateTestMyPalMessage(messageId: $messageId, text: $text, case: $case) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const onUpdateTestMyPalMessage = `subscription OnUpdateTestMyPalMessage(
  $messageId: String
  $text: String
  $case: String
) {
  onUpdateTestMyPalMessage(messageId: $messageId, text: $text, case: $case) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const onDeleteTestMyPalMessage = `subscription OnDeleteTestMyPalMessage(
  $messageId: String
  $text: String
  $case: String
) {
  onDeleteTestMyPalMessage(messageId: $messageId, text: $text, case: $case) {
    messageId
    text
    case
    caseTitle
  }
}
`;
export const onCreateTestMyPal = `subscription OnCreateTestMyPal(
  $MyPalId: String
  $instructorUserId: String
  $learnerUserId: String
  $MyPalParams: String
) {
  onCreateTestMyPal(
    MyPalId: $MyPalId
    instructorUserId: $instructorUserId
    learnerUserId: $learnerUserId
    MyPalParams: $MyPalParams
  ) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const onUpdateTestMyPal = `subscription OnUpdateTestMyPal(
  $MyPalId: String
  $instructorUserId: String
  $learnerUserId: String
  $MyPalParams: String
) {
  onUpdateTestMyPal(
    MyPalId: $MyPalId
    instructorUserId: $instructorUserId
    learnerUserId: $learnerUserId
    MyPalParams: $MyPalParams
  ) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const onDeleteTestMyPal = `subscription OnDeleteTestMyPal(
  $MyPalId: String
  $instructorUserId: String
  $learnerUserId: String
  $MyPalParams: String
) {
  onDeleteTestMyPal(
    MyPalId: $MyPalId
    instructorUserId: $instructorUserId
    learnerUserId: $learnerUserId
    MyPalParams: $MyPalParams
  ) {
    MyPalId
    instructorUserId
    learnerUserId
    MyPalParams
  }
}
`;
export const onCreateTestCreditPackage = `subscription OnCreateTestCreditPackage(
  $creditPackageId: String
  $name: String
  $costUSD: Float
  $amountCredits: Float
) {
  onCreateTestCreditPackage(
    creditPackageId: $creditPackageId
    name: $name
    costUSD: $costUSD
    amountCredits: $amountCredits
  ) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
export const onUpdateTestCreditPackage = `subscription OnUpdateTestCreditPackage(
  $creditPackageId: String
  $name: String
  $costUSD: Float
  $amountCredits: Float
) {
  onUpdateTestCreditPackage(
    creditPackageId: $creditPackageId
    name: $name
    costUSD: $costUSD
    amountCredits: $amountCredits
  ) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
export const onDeleteTestCreditPackage = `subscription OnDeleteTestCreditPackage(
  $creditPackageId: String
  $name: String
  $costUSD: Float
  $amountCredits: Float
) {
  onDeleteTestCreditPackage(
    creditPackageId: $creditPackageId
    name: $name
    costUSD: $costUSD
    amountCredits: $amountCredits
  ) {
    creditPackageId
    name
    costUSD
    amountCredits
  }
}
`;
