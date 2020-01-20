/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTestBadgeInput = {
  name?: string | null,
  imageUrl?: string | null,
  maxMinutes?: number | null,
  minCorrectAnswers?: number | null,
  minHelpersUse?: number | null,
};

export type UpdateTestBadgeInput = {
  badgeId: string,
  name?: string | null,
  imageUrl?: string | null,
  maxMinutes?: number | null,
  minCorrectAnswers?: number | null,
  minHelpersUse?: number | null,
};

export type DeleteTestBadgeInput = {
  badgeId: string,
};

export type CreateTestGradeInput = {
  name?: string | null,
  vocabularyUrl?: string | null,
};

export type UpdateTestGradeInput = {
  gradeId: string,
  name?: string | null,
  vocabularyUrl?: string | null,
};

export type DeleteTestGradeInput = {
  gradeId: string,
};

export type CreateTestLevelInput = {
  levelName: string,
  points?: number | null,
};

export type UpdateTestLevelInput = {
  levelName: string,
  points?: number | null,
};

export type DeleteTestLevelInput = {
  levelName: string,
};

export type CreateTestMilestoneInput = {
  categoryId: string,
  name?: string | null,
  videoUrl?: string | null,
};

export type UpdateTestMilestoneInput = {
  milestoneId: string,
  categoryId?: string | null,
  name?: string | null,
  videoUrl?: string | null,
};

export type DeleteTestMilestoneInput = {
  milestoneId: string,
};

export type CreateTestMilestoneCategoryInput = {
  gradeId: string,
  name?: string | null,
};

export type UpdateTestMilestoneCategoryInput = {
  categoryId: string,
  gradeId?: string | null,
  name?: string | null,
};

export type DeleteTestMilestoneCategoryInput = {
  categoryId: string,
};

export type CreateTestQuestionInput = {
  milestoneId: string,
  levelName?: string | null,
  shortSolution?: string | null,
  solution?: string | null,
  text?: string | null,
  videoUrl?: string | null,
  vocabularyUrl?: string | null,
  position?: number | null,
};

export type CreateTestQuestionFullInput = {
  milestoneId: string,
  levelName?: string | null,
  shortSolution?: string | null,
  solution?: string | null,
  text?: string | null,
  videoUrl?: string | null,
  vocabularyUrl?: string | null,
  position?: number | null,
  options?: Array< CreateTestNewQuestionOptionInput | null > | null,
};

export type CreateTestNewQuestionOptionInput = {
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type UpdateTestQuestionInput = {
  questionId: string,
  milestoneId?: string | null,
  levelName?: string | null,
  shortSolution?: string | null,
  solution?: string | null,
  text?: string | null,
  videoUrl?: string | null,
  vocabularyUrl?: string | null,
  position?: number | null,
};

export type DeleteTestQuestionInput = {
  questionId: string,
};

export type CreateTestQuestionOptionInput = {
  questionId: string,
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type UpdateTestQuestionOptionInput = {
  optionId: string,
  questionId?: string | null,
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type DeleteTestQuestionOptionInput = {
  optionId: string,
};

export type CreateTestUserInput = {
  userId: string,
  activationCode?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
  instructorUserId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  role?: string | null,
  gradeId?: string | null,
  categoryId?: string | null,
  milestoneId?: string | null,
  targetDate?: string | null,
  targetAnswers?: number | null,
  targetHelpers?: number | null,
  creditsBalance?: number | null,
};

export type UpdateTestUserInput = {
  userId: string,
  activationCode?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
  instructorUserId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  role?: string | null,
  gradeId?: string | null,
  categoryId?: string | null,
  milestoneId?: string | null,
  targetDate?: string | null,
  targetAnswers?: number | null,
  targetHelpers?: number | null,
  currentUserMilestoneId?: string | null,
  creditsBalance?: number | null,
};

export type DeleteTestUserInput = {
  userId: string,
};

export type CreateTestUserMilestoneInput = {
  userMilestoneId?: string | null,
  userId: string,
  milestoneId: string,
  assignedAt: string,
  completeBy?: string | null,
  completedAt?: string | null,
  emotionAtBeginning?: string | null,
  emotionAfterCompletion?: string | null,
  points?: number | null,
  correctPercentage?: number | null,
  targetCorrectPercentage?: number | null,
  targetHelpersUsePercentage?: number | null,
};

export type UpdateTestUserMilestoneInput = {
  userMilestoneId: string,
  userId?: string | null,
  milestoneId?: string | null,
  assignedAt?: string | null,
  completeBy?: string | null,
  completedAt?: string | null,
  emotionAtBeginning?: string | null,
  emotionAfterCompletion?: string | null,
  points?: number | null,
  correctPercentage?: number | null,
  targetCorrectPercentage?: number | null,
  targetHelpersUsePercentage?: number | null,
};

export type DeleteTestUserMilestoneInput = {
  userMilestoneId: string,
};

export type CreateTestUserQuestionInput = {
  userQuestionId?: string | null,
  userId: string,
  questionId: string,
  userMilestoneId: string,
  selectedOptionId?: string | null,
  answeredAt?: string | null,
  readHelperUsed?: boolean | null,
  videoHelperUsed?: boolean | null,
  vocabularyHelperUsed?: boolean | null,
  solutionHelperUsed?: boolean | null,
};

export type UpdateTestUserQuestionInput = {
  userQuestionId: string,
  userId?: string | null,
  questionId?: string | null,
  userMilestoneId?: string | null,
  selectedOptionId?: string | null,
  answeredAt?: string | null,
  readHelperUsed?: boolean | null,
  videoHelperUsed?: boolean | null,
  vocabularyHelperUsed?: boolean | null,
  solutionHelperUsed?: boolean | null,
};

export type DeleteTestUserQuestionInput = {
  userQuestionId: string,
};

export type CreateTestUserBadgeInput = {
  userMilestoneId: string,
  badgeId: string,
  userId: string,
  createdAt?: string | null,
};

export type UpdateTestUserBadgeInput = {
  userBadgeId: string,
  userMilestoneId?: string | null,
  badgeId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type DeleteTestUserBadgeInput = {
  userBadgeId: string,
};

export type CreateTestMyPalMessageInput = {
  text: string,
  case: string,
  caseTitle: string,
};

export type UpdateTestMyPalMessageInput = {
  messageId: string,
  text?: string | null,
  case?: string | null,
  caseTitle?: string | null,
};

export type DeleteTestMyPalMessageInput = {
  messageId: string,
};

export type CreateTestMyPalInput = {
  instructorUserId: string,
  learnerUserId: string,
  MyPalParams: string,
};

export type UpdateTestMyPalInput = {
  MyPalId: string,
  instructorUserId?: string | null,
  learnerUserId?: string | null,
  MyPalParams?: string | null,
};

export type DeleteTestMyPalInput = {
  MyPalId: string,
};

export type CreateTestCreditPackageInput = {
  creditPackageId?: string | null,
  name: string,
  costUSD: number,
  amountCredits: number,
};

export type UpdateTestCreditPackageInput = {
  creditPackageId: string,
  name?: string | null,
  costUSD?: number | null,
  amountCredits?: number | null,
};

export type DeleteTestCreditPackageInput = {
  creditPackageId: string,
};

export type TableTestBadgeFilterInput = {
  badgeId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  imageUrl?: TableStringFilterInput | null,
  maxMinutes?: TableIntFilterInput | null,
  minCorrectAnswers?: TableIntFilterInput | null,
  minHelpersUse?: TableIntFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableTestGradeFilterInput = {
  gradeId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  vocabularyUrl?: TableStringFilterInput | null,
};

export type TableTestLevelFilterInput = {
  levelName?: TableStringFilterInput | null,
  points?: TableIntFilterInput | null,
};

export type TableTestMilestoneFilterInput = {
  milestoneId?: TableStringFilterInput | null,
  categoryId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type TableTestMilestoneCategoryFilterInput = {
  categoryId?: TableStringFilterInput | null,
  gradeId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type TableTestQuestionFilterInput = {
  questionId?: TableStringFilterInput | null,
  milestoneId?: TableStringFilterInput | null,
  levelName?: TableStringFilterInput | null,
  shortSolution?: TableStringFilterInput | null,
  solution?: TableStringFilterInput | null,
  text?: TableStringFilterInput | null,
  videoUrl?: TableStringFilterInput | null,
  vocabularyUrl?: TableStringFilterInput | null,
  position?: TableIntFilterInput | null,
};

export type TableTestQuestionOptionFilterInput = {
  optionId?: TableStringFilterInput | null,
  questionId?: TableStringFilterInput | null,
  isCorrect?: TableBooleanFilterInput | null,
  position?: TableIntFilterInput | null,
  text?: TableStringFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableTestLearnerFilterInput = {
  userId?: TableStringFilterInput | null,
  instructorUserId?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
};

export type TableTestUserFilterInput = {
  userId?: TableStringFilterInput | null,
  activationCode?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  password?: TableStringFilterInput | null,
  phone?: TableStringFilterInput | null,
  instructorUserId?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
};

export type TableTestCreditPackageFilterInput = {
  creditPackageId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  costUSD?: TableFloatFilterInput | null,
  amountCredits?: TableFloatFilterInput | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableTestUserMilestoneFilterInput = {
  userMilestoneId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  milestoneId?: TableStringFilterInput | null,
  assignedAt?: TableStringFilterInput | null,
  completeBy?: TableStringFilterInput | null,
  completedAt?: TableStringFilterInput | null,
  emotionAtBeginning?: TableStringFilterInput | null,
  emotionAfterCompletion?: TableStringFilterInput | null,
  points?: TableIntFilterInput | null,
  correctPercentage?: TableIntFilterInput | null,
  targetCorrectPercentage?: TableIntFilterInput | null,
  targetHelpersUsePercentage?: TableIntFilterInput | null,
};

export type TableTestUserQuestionFilterInput = {
  userQuestionId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  questionId?: TableStringFilterInput | null,
  selectedOptionId?: TableStringFilterInput | null,
  answeredAt?: TableStringFilterInput | null,
  readHelperUsed?: TableBooleanFilterInput | null,
  videoHelperUsed?: TableBooleanFilterInput | null,
  vocabularyHelperUsed?: TableBooleanFilterInput | null,
  solutionHelperUsed?: TableBooleanFilterInput | null,
};

export type TableTestUserBadgeFilterInput = {
  userBadgeId?: TableStringFilterInput | null,
  userMilestoneId?: TableStringFilterInput | null,
  badgeId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
};

export type TableTestMyPalMessageFilterInput = {
  messageId?: TableStringFilterInput | null,
  text?: TableStringFilterInput | null,
  case?: TableStringFilterInput | null,
  caseTitle?: TableStringFilterInput | null,
};

export type TableTestMyPalFilterInput = {
  MyPalId?: TableIDFilterInput | null,
  instructorUserId?: TableStringFilterInput | null,
  learnerUserId?: TableStringFilterInput | null,
  MyPalParams?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateTestBadgeMutationVariables = {
  input: CreateTestBadgeInput,
};

export type CreateTestBadgeMutation = {
  createTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type UpdateTestBadgeMutationVariables = {
  input: UpdateTestBadgeInput,
};

export type UpdateTestBadgeMutation = {
  updateTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type DeleteTestBadgeMutationVariables = {
  input: DeleteTestBadgeInput,
};

export type DeleteTestBadgeMutation = {
  deleteTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type CreateTestGradeMutationVariables = {
  input: CreateTestGradeInput,
};

export type CreateTestGradeMutation = {
  createTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type UpdateTestGradeMutationVariables = {
  input: UpdateTestGradeInput,
};

export type UpdateTestGradeMutation = {
  updateTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type DeleteTestGradeMutationVariables = {
  input: DeleteTestGradeInput,
};

export type DeleteTestGradeMutation = {
  deleteTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type CreateTestLevelMutationVariables = {
  input: CreateTestLevelInput,
};

export type CreateTestLevelMutation = {
  createTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type UpdateTestLevelMutationVariables = {
  input: UpdateTestLevelInput,
};

export type UpdateTestLevelMutation = {
  updateTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type DeleteTestLevelMutationVariables = {
  input: DeleteTestLevelInput,
};

export type DeleteTestLevelMutation = {
  deleteTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type CreateTestMilestoneMutationVariables = {
  input: CreateTestMilestoneInput,
};

export type CreateTestMilestoneMutation = {
  createTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type UpdateTestMilestoneMutationVariables = {
  input: UpdateTestMilestoneInput,
};

export type UpdateTestMilestoneMutation = {
  updateTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type DeleteTestMilestoneMutationVariables = {
  input: DeleteTestMilestoneInput,
};

export type DeleteTestMilestoneMutation = {
  deleteTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type CreateTestMilestoneCategoryMutationVariables = {
  input: CreateTestMilestoneCategoryInput,
};

export type CreateTestMilestoneCategoryMutation = {
  createTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type UpdateTestMilestoneCategoryMutationVariables = {
  input: UpdateTestMilestoneCategoryInput,
};

export type UpdateTestMilestoneCategoryMutation = {
  updateTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type DeleteTestMilestoneCategoryMutationVariables = {
  input: DeleteTestMilestoneCategoryInput,
};

export type DeleteTestMilestoneCategoryMutation = {
  deleteTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type CreateTestQuestionMutationVariables = {
  input: CreateTestQuestionInput,
};

export type CreateTestQuestionMutation = {
  createTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type CreateTestQuestionFullMutationVariables = {
  input: CreateTestQuestionFullInput,
};

export type CreateTestQuestionFullMutation = {
  createTestQuestionFull:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type UpdateTestQuestionMutationVariables = {
  input: UpdateTestQuestionInput,
};

export type UpdateTestQuestionMutation = {
  updateTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type DeleteTestQuestionMutationVariables = {
  input: DeleteTestQuestionInput,
};

export type DeleteTestQuestionMutation = {
  deleteTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type CreateTestQuestionOptionMutationVariables = {
  input: CreateTestQuestionOptionInput,
};

export type CreateTestQuestionOptionMutation = {
  createTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type UpdateTestQuestionOptionMutationVariables = {
  input: UpdateTestQuestionOptionInput,
};

export type UpdateTestQuestionOptionMutation = {
  updateTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type DeleteTestQuestionOptionMutationVariables = {
  input: DeleteTestQuestionOptionInput,
};

export type DeleteTestQuestionOptionMutation = {
  deleteTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type CreateTestUserMutationVariables = {
  input: CreateTestUserInput,
};

export type CreateTestUserMutation = {
  createTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type UpdateTestUserMutationVariables = {
  input: UpdateTestUserInput,
};

export type UpdateTestUserMutation = {
  updateTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type DeleteTestUserMutationVariables = {
  input: DeleteTestUserInput,
};

export type DeleteTestUserMutation = {
  deleteTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type CreateTestUserMilestoneMutationVariables = {
  input: CreateTestUserMilestoneInput,
};

export type CreateTestUserMilestoneMutation = {
  createTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type UpdateTestUserMilestoneMutationVariables = {
  input: UpdateTestUserMilestoneInput,
};

export type UpdateTestUserMilestoneMutation = {
  updateTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type DeleteTestUserMilestoneMutationVariables = {
  input: DeleteTestUserMilestoneInput,
};

export type DeleteTestUserMilestoneMutation = {
  deleteTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type CreateTestUserQuestionMutationVariables = {
  input: CreateTestUserQuestionInput,
};

export type CreateTestUserQuestionMutation = {
  createTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type UpdateTestUserQuestionMutationVariables = {
  input: UpdateTestUserQuestionInput,
};

export type UpdateTestUserQuestionMutation = {
  updateTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type DeleteTestUserQuestionMutationVariables = {
  input: DeleteTestUserQuestionInput,
};

export type DeleteTestUserQuestionMutation = {
  deleteTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type CreateTestUserBadgeMutationVariables = {
  input: CreateTestUserBadgeInput,
};

export type CreateTestUserBadgeMutation = {
  createTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type UpdateTestUserBadgeMutationVariables = {
  input: UpdateTestUserBadgeInput,
};

export type UpdateTestUserBadgeMutation = {
  updateTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type DeleteTestUserBadgeMutationVariables = {
  input: DeleteTestUserBadgeInput,
};

export type DeleteTestUserBadgeMutation = {
  deleteTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type CreateTestMyPalMessageMutationVariables = {
  input: CreateTestMyPalMessageInput,
};

export type CreateTestMyPalMessageMutation = {
  createTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type UpdateTestMyPalMessageMutationVariables = {
  input: UpdateTestMyPalMessageInput,
};

export type UpdateTestMyPalMessageMutation = {
  updateTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type DeleteTestMyPalMessageMutationVariables = {
  input: DeleteTestMyPalMessageInput,
};

export type DeleteTestMyPalMessageMutation = {
  deleteTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type CreateTestMyPalMutationVariables = {
  input: CreateTestMyPalInput,
};

export type CreateTestMyPalMutation = {
  createTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type UpdateTestMyPalMutationVariables = {
  input: UpdateTestMyPalInput,
};

export type UpdateTestMyPalMutation = {
  updateTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type DeleteTestMyPalMutationVariables = {
  input: DeleteTestMyPalInput,
};

export type DeleteTestMyPalMutation = {
  deleteTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type CreateTestCreditPackageMutationVariables = {
  input: CreateTestCreditPackageInput,
};

export type CreateTestCreditPackageMutation = {
  createTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type UpdateTestCreditPackageMutationVariables = {
  input: UpdateTestCreditPackageInput,
};

export type UpdateTestCreditPackageMutation = {
  updateTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type DeleteTestCreditPackageMutationVariables = {
  input: DeleteTestCreditPackageInput,
};

export type DeleteTestCreditPackageMutation = {
  deleteTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type GetTestBadgeQueryVariables = {
  badgeId: string,
};

export type GetTestBadgeQuery = {
  getTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type ListTestBadgesQueryVariables = {
  filter?: TableTestBadgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestBadgesQuery = {
  listTestBadges:  {
    __typename: "TestBadgeConnection",
    items:  Array< {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestGradeQueryVariables = {
  gradeId: string,
};

export type GetTestGradeQuery = {
  getTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type ListTestGradesQueryVariables = {
  filter?: TableTestGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestGradesQuery = {
  listTestGrades:  {
    __typename: "TestGradeConnection",
    items:  Array< {
      __typename: "TestGrade",
      gradeId: string,
      name: string | null,
      vocabularyUrl: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestLevelQueryVariables = {
  levelName: string,
};

export type GetTestLevelQuery = {
  getTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type ListTestLevelsQueryVariables = {
  filter?: TableTestLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestLevelsQuery = {
  listTestLevels:  {
    __typename: "TestLevelConnection",
    items:  Array< {
      __typename: "TestLevel",
      levelName: string,
      points: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestMilestoneQueryVariables = {
  milestoneId: string,
};

export type GetTestMilestoneQuery = {
  getTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type ListTestMilestonesQueryVariables = {
  filter?: TableTestMilestoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestMilestonesQuery = {
  listTestMilestones:  {
    __typename: "TestMilestoneConnection",
    items:  Array< {
      __typename: "TestMilestone",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      videoUrl: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestMilestoneCategoryQueryVariables = {
  categoryId: string,
};

export type GetTestMilestoneCategoryQuery = {
  getTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type ListTestMilestoneCategoriesQueryVariables = {
  filter?: TableTestMilestoneCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestMilestoneCategoriesQuery = {
  listTestMilestoneCategories:  {
    __typename: "TestMilestoneCategoryConnection",
    items:  Array< {
      __typename: "TestMilestoneCategory",
      categoryId: string,
      gradeId: string,
      name: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestQuestionQueryVariables = {
  questionId: string,
};

export type GetTestQuestionQuery = {
  getTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type GetTestQuestionFullQueryVariables = {
  questionId: string,
};

export type GetTestQuestionFullQuery = {
  getTestQuestionFull:  {
    __typename: "TestQuestionWithOptions",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
    options:  Array< {
      __typename: "TestQuestionOption",
      optionId: string,
      questionId: string,
      isCorrect: boolean | null,
      position: number | null,
      text: string | null,
    } | null > | null,
  } | null,
};

export type ListTestQuestionsQueryVariables = {
  filter?: TableTestQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestQuestionsQuery = {
  listTestQuestions:  {
    __typename: "TestQuestionConnection",
    items:  Array< {
      __typename: "TestQuestion",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestQuestionOptionQueryVariables = {
  optionId: string,
};

export type GetTestQuestionOptionQuery = {
  getTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type ListTestQuestionOptionsQueryVariables = {
  filter?: TableTestQuestionOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestQuestionOptionsQuery = {
  listTestQuestionOptions:  {
    __typename: "TestQuestionOptionConnection",
    items:  Array< {
      __typename: "TestQuestionOption",
      optionId: string,
      questionId: string,
      isCorrect: boolean | null,
      position: number | null,
      text: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestUserQueryVariables = {
  userId: string,
};

export type GetTestUserQuery = {
  getTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type GetTestLearnerQueryVariables = {
  userId: string,
};

export type GetTestLearnerQuery = {
  getTestLearner:  {
    __typename: "TestLearner",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    grade:  {
      __typename: "TestGrade",
      gradeId: string,
      name: string | null,
      vocabularyUrl: string | null,
    } | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    instructorUser:  {
      __typename: "TestUser",
      userId: string,
      activationCode: string | null,
      email: string | null,
      password: string | null,
      phone: string | null,
      firstName: string | null,
      lastName: string | null,
      role: string | null,
      instructorUserId: string | null,
      gradeId: string | null,
      categoryId: string | null,
      milestoneId: string | null,
      targetDate: string | null,
      targetAnswers: number | null,
      targetHelpers: number | null,
      creditsBalance: number | null,
    } | null,
    currentUserMilestoneId: string | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
    badges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
  } | null,
};

export type ListTestLearnersQueryVariables = {
  filter?: TableTestLearnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestLearnersQuery = {
  listTestLearners:  {
    __typename: "TestLearnerConnection",
    items:  Array< {
      __typename: "TestLearner",
      userId: string,
      activationCode: string | null,
      email: string | null,
      password: string | null,
      phone: string | null,
      firstName: string | null,
      lastName: string | null,
      role: string | null,
      instructorUserId: string | null,
      gradeId: string | null,
      grade:  {
        __typename: "TestGrade",
        gradeId: string,
        name: string | null,
        vocabularyUrl: string | null,
      } | null,
      categoryId: string | null,
      milestoneId: string | null,
      targetDate: string | null,
      targetAnswers: number | null,
      targetHelpers: number | null,
      instructorUser:  {
        __typename: "TestUser",
        userId: string,
        activationCode: string | null,
        email: string | null,
        password: string | null,
        phone: string | null,
        firstName: string | null,
        lastName: string | null,
        role: string | null,
        instructorUserId: string | null,
        gradeId: string | null,
        categoryId: string | null,
        milestoneId: string | null,
        targetDate: string | null,
        targetAnswers: number | null,
        targetHelpers: number | null,
        creditsBalance: number | null,
      } | null,
      currentUserMilestoneId: string | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
      badges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
        badge:  {
          __typename: "TestBadge",
          badgeId: string,
          name: string | null,
          imageUrl: string | null,
          maxMinutes: number | null,
          minCorrectAnswers: number | null,
          minHelpersUse: number | null,
        } | null,
        userMilestone:  {
          __typename: "TestUserMilestone",
          userMilestoneId: string,
          userId: string,
          milestoneId: string,
          assignedAt: string,
          completeBy: string | null,
          completedAt: string | null,
          emotionAtBeginning: string | null,
          emotionAfterCompletion: string | null,
          points: number | null,
          correctPercentage: number | null,
          targetCorrectPercentage: number | null,
          targetHelpersUsePercentage: number | null,
          questionAnswers:  Array< {
            __typename: "TestUserQuestion",
            userQuestionId: string,
            userId: string,
            questionId: string,
            userMilestoneId: string,
            selectedOptionId: string | null,
            answeredAt: string | null,
            readHelperUsed: boolean | null,
            videoHelperUsed: boolean | null,
            vocabularyHelperUsed: boolean | null,
            solutionHelperUsed: boolean | null,
          } | null > | null,
          userBadges:  Array< {
            __typename: "TestUserBadge",
            userBadgeId: string,
            userMilestoneId: string,
            badgeId: string,
            userId: string,
            createdAt: string | null,
          } | null > | null,
        } | null,
      } | null > | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        question:  {
          __typename: "TestQuestionWithOptions",
          questionId: string,
          milestoneId: string,
          levelName: string | null,
          solution: string | null,
          shortSolution: string | null,
          text: string | null,
          videoUrl: string | null,
          vocabularyUrl: string | null,
          position: number | null,
          options:  Array< {
            __typename: "TestQuestionOption",
            optionId: string,
            questionId: string,
            isCorrect: boolean | null,
            position: number | null,
            text: string | null,
          } | null > | null,
        } | null,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTestUsersQueryVariables = {
  filter?: TableTestUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestUsersQuery = {
  listTestUsers:  {
    __typename: "TestUserConnection",
    items:  Array< {
      __typename: "TestUser",
      userId: string,
      activationCode: string | null,
      email: string | null,
      password: string | null,
      phone: string | null,
      firstName: string | null,
      lastName: string | null,
      role: string | null,
      instructorUserId: string | null,
      gradeId: string | null,
      categoryId: string | null,
      milestoneId: string | null,
      targetDate: string | null,
      targetAnswers: number | null,
      targetHelpers: number | null,
      creditsBalance: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestCountQuery = {
  getTestCount:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type GetTestLevelsCountQuery = {
  getTestLevelsCount:  {
    __typename: "TestLevelsCount",
    count: number | null,
  } | null,
};

export type GetTestCountArrayQuery = {
  getTestCountArray:  {
    __typename: "TestCountArray",
    items:  Array< {
      __typename: "TestCount",
      count: number | null,
      entity: string | null,
      levels:  {
        __typename: "TestLevelsCount",
        count: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type CountTestBadgesQueryVariables = {
  filter?: TableTestBadgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestBadgesQuery = {
  countTestBadges:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestGradesQueryVariables = {
  filter?: TableTestGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestGradesQuery = {
  countTestGrades:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestLevelsQueryVariables = {
  filter?: TableTestLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestLevelsQuery = {
  countTestLevels:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestMilestonesQueryVariables = {
  filter?: TableTestMilestoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestMilestonesQuery = {
  countTestMilestones:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestMilestoneCategoriesQueryVariables = {
  filter?: TableTestMilestoneCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestMilestoneCategoriesQuery = {
  countTestMilestoneCategories:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestQuestionsQueryVariables = {
  filter?: TableTestQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestQuestionsQuery = {
  countTestQuestions:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestQuestionOptionsQueryVariables = {
  filter?: TableTestQuestionOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestQuestionOptionsQuery = {
  countTestQuestionOptions:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestUsersQueryVariables = {
  filter?: TableTestUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestUsersQuery = {
  countTestUsers:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestCreditPackagesQueryVariables = {
  filter?: TableTestCreditPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CountTestCreditPackagesQuery = {
  countTestCreditPackages:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type CountTestInstructorsQuery = {
  countTestInstructors:  {
    __typename: "TestCount",
    count: number | null,
    entity: string | null,
    levels:  {
      __typename: "TestLevelsCount",
      count: number | null,
    } | null,
  } | null,
};

export type GetTestUserMilestoneQueryVariables = {
  userMilestoneId: string,
};

export type GetTestUserMilestoneQuery = {
  getTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type ListTestUserMilestonesQueryVariables = {
  filter?: TableTestUserMilestoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestUserMilestonesQuery = {
  listTestUserMilestones:  {
    __typename: "TestUserMilestoneConnection",
    items:  Array< {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      milestone:  {
        __typename: "TestMilestoneWithQuestions",
        milestoneId: string,
        categoryId: string,
        name: string | null,
        questions:  Array< {
          __typename: "TestQuestionWithOptions",
          questionId: string,
          milestoneId: string,
          levelName: string | null,
          solution: string | null,
          shortSolution: string | null,
          text: string | null,
          videoUrl: string | null,
          vocabularyUrl: string | null,
          position: number | null,
          options:  Array< {
            __typename: "TestQuestionOption",
            optionId: string,
            questionId: string,
            isCorrect: boolean | null,
            position: number | null,
            text: string | null,
          } | null > | null,
        } | null > | null,
      } | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        question:  {
          __typename: "TestQuestionWithOptions",
          questionId: string,
          milestoneId: string,
          levelName: string | null,
          solution: string | null,
          shortSolution: string | null,
          text: string | null,
          videoUrl: string | null,
          vocabularyUrl: string | null,
          position: number | null,
          options:  Array< {
            __typename: "TestQuestionOption",
            optionId: string,
            questionId: string,
            isCorrect: boolean | null,
            position: number | null,
            text: string | null,
          } | null > | null,
        } | null,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
        badge:  {
          __typename: "TestBadge",
          badgeId: string,
          name: string | null,
          imageUrl: string | null,
          maxMinutes: number | null,
          minCorrectAnswers: number | null,
          minHelpersUse: number | null,
        } | null,
        userMilestone:  {
          __typename: "TestUserMilestone",
          userMilestoneId: string,
          userId: string,
          milestoneId: string,
          assignedAt: string,
          completeBy: string | null,
          completedAt: string | null,
          emotionAtBeginning: string | null,
          emotionAfterCompletion: string | null,
          points: number | null,
          correctPercentage: number | null,
          targetCorrectPercentage: number | null,
          targetHelpersUsePercentage: number | null,
          questionAnswers:  Array< {
            __typename: "TestUserQuestion",
            userQuestionId: string,
            userId: string,
            questionId: string,
            userMilestoneId: string,
            selectedOptionId: string | null,
            answeredAt: string | null,
            readHelperUsed: boolean | null,
            videoHelperUsed: boolean | null,
            vocabularyHelperUsed: boolean | null,
            solutionHelperUsed: boolean | null,
          } | null > | null,
          userBadges:  Array< {
            __typename: "TestUserBadge",
            userBadgeId: string,
            userMilestoneId: string,
            badgeId: string,
            userId: string,
            createdAt: string | null,
          } | null > | null,
        } | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestUserQuestionQueryVariables = {
  userQuestionId: string,
};

export type GetTestUserQuestionQuery = {
  getTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type ListTestUserQuestionsQueryVariables = {
  filter?: TableTestUserQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestUserQuestionsQuery = {
  listTestUserQuestions:  {
    __typename: "TestUserQuestionConnection",
    items:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestMilestoneFullQueryVariables = {
  milestoneId: string,
};

export type GetTestMilestoneFullQuery = {
  getTestMilestoneFull:  {
    __typename: "TestMilestoneWithQuestions",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    questions:  Array< {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type GetTestUserBadgeQueryVariables = {
  userBadgeId: string,
};

export type GetTestUserBadgeQuery = {
  getTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type ListTestUserBadgesQueryVariables = {
  filter?: TableTestUserBadgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestUserBadgesQuery = {
  listTestUserBadges:  {
    __typename: "TestUserBadgeConnection",
    items:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestMyPalMessageQueryVariables = {
  messageId: string,
};

export type GetTestMyPalMessageQuery = {
  getTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type ListTestMyPalMessagesQueryVariables = {
  filter?: TableTestMyPalMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestMyPalMessagesQuery = {
  listTestMyPalMessages:  {
    __typename: "TestMyPalMessageConnection",
    items:  Array< {
      __typename: "TestMyPalMessage",
      messageId: string,
      text: string,
      case: string,
      caseTitle: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestMyPalQueryVariables = {
  MyPalId: string,
};

export type GetTestMyPalQuery = {
  getTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type GetTestMyPalByLearnerIdQueryVariables = {
  learnerUserId: string,
};

export type GetTestMyPalByLearnerIdQuery = {
  getTestMyPalByLearnerId:  Array< {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null > | null,
};

export type GetTestMyPalByInstructorIdQueryVariables = {
  filter?: TableTestMyPalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTestMyPalByInstructorIdQuery = {
  getTestMyPalByInstructorId:  {
    __typename: "TestMyPalConnection",
    items:  Array< {
      __typename: "TestMyPal",
      MyPalId: string | null,
      instructorUserId: string | null,
      learnerUserId: string | null,
      MyPalParams: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTestMyPalsQueryVariables = {
  filter?: TableTestMyPalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestMyPalsQuery = {
  listTestMyPals:  {
    __typename: "TestMyPalConnection",
    items:  Array< {
      __typename: "TestMyPal",
      MyPalId: string | null,
      instructorUserId: string | null,
      learnerUserId: string | null,
      MyPalParams: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestCreditPackageQueryVariables = {
  creditPackageId: string,
};

export type GetTestCreditPackageQuery = {
  getTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type ListTestCreditPackagesQueryVariables = {
  filter?: TableTestCreditPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestCreditPackagesQuery = {
  listTestCreditPackages:  {
    __typename: "TestCreditPackageConnection",
    items:  Array< {
      __typename: "TestCreditPackage",
      creditPackageId: string,
      name: string | null,
      costUSD: number | null,
      amountCredits: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ConfirmPaymentQueryVariables = {
  orderId?: string | null,
  packageId?: string | null,
  userId?: string | null,
};

export type ConfirmPaymentQuery = {
  confirmPayment: string | null,
};

export type OnCreateTestBadgeSubscriptionVariables = {
  badgeId?: string | null,
  name?: string | null,
  imageUrl?: string | null,
  maxMinutes?: number | null,
  minCorrectAnswers?: number | null,
};

export type OnCreateTestBadgeSubscription = {
  onCreateTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type OnUpdateTestBadgeSubscriptionVariables = {
  badgeId?: string | null,
  name?: string | null,
  imageUrl?: string | null,
  maxMinutes?: number | null,
  minCorrectAnswers?: number | null,
};

export type OnUpdateTestBadgeSubscription = {
  onUpdateTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type OnDeleteTestBadgeSubscriptionVariables = {
  badgeId?: string | null,
  name?: string | null,
  imageUrl?: string | null,
  maxMinutes?: number | null,
  minCorrectAnswers?: number | null,
};

export type OnDeleteTestBadgeSubscription = {
  onDeleteTestBadge:  {
    __typename: "TestBadge",
    badgeId: string,
    name: string | null,
    imageUrl: string | null,
    maxMinutes: number | null,
    minCorrectAnswers: number | null,
    minHelpersUse: number | null,
  } | null,
};

export type OnCreateTestGradeSubscriptionVariables = {
  gradeId?: string | null,
  name?: string | null,
};

export type OnCreateTestGradeSubscription = {
  onCreateTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type OnUpdateTestGradeSubscriptionVariables = {
  gradeId?: string | null,
  name?: string | null,
};

export type OnUpdateTestGradeSubscription = {
  onUpdateTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type OnDeleteTestGradeSubscriptionVariables = {
  gradeId?: string | null,
  name?: string | null,
};

export type OnDeleteTestGradeSubscription = {
  onDeleteTestGrade:  {
    __typename: "TestGrade",
    gradeId: string,
    name: string | null,
    vocabularyUrl: string | null,
  } | null,
};

export type OnCreateTestLevelSubscriptionVariables = {
  levelName?: string | null,
  points?: number | null,
};

export type OnCreateTestLevelSubscription = {
  onCreateTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type OnUpdateTestLevelSubscriptionVariables = {
  levelName?: string | null,
  points?: number | null,
};

export type OnUpdateTestLevelSubscription = {
  onUpdateTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type OnDeleteTestLevelSubscriptionVariables = {
  levelName?: string | null,
  points?: number | null,
};

export type OnDeleteTestLevelSubscription = {
  onDeleteTestLevel:  {
    __typename: "TestLevel",
    levelName: string,
    points: number | null,
  } | null,
};

export type OnCreateTestMilestoneSubscriptionVariables = {
  milestoneId?: string | null,
  categoryId?: string | null,
  name?: string | null,
};

export type OnCreateTestMilestoneSubscription = {
  onCreateTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type OnUpdateTestMilestoneSubscriptionVariables = {
  milestoneId?: string | null,
  categoryId?: string | null,
  name?: string | null,
};

export type OnUpdateTestMilestoneSubscription = {
  onUpdateTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type OnDeleteTestMilestoneSubscriptionVariables = {
  milestoneId?: string | null,
  categoryId?: string | null,
  name?: string | null,
};

export type OnDeleteTestMilestoneSubscription = {
  onDeleteTestMilestone:  {
    __typename: "TestMilestone",
    milestoneId: string,
    categoryId: string,
    name: string | null,
    videoUrl: string | null,
  } | null,
};

export type OnCreateTestMilestoneCategorySubscriptionVariables = {
  categoryId?: string | null,
  gradeId?: string | null,
  name?: string | null,
};

export type OnCreateTestMilestoneCategorySubscription = {
  onCreateTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type OnUpdateTestMilestoneCategorySubscriptionVariables = {
  categoryId?: string | null,
  gradeId?: string | null,
  name?: string | null,
};

export type OnUpdateTestMilestoneCategorySubscription = {
  onUpdateTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type OnDeleteTestMilestoneCategorySubscriptionVariables = {
  categoryId?: string | null,
  gradeId?: string | null,
  name?: string | null,
};

export type OnDeleteTestMilestoneCategorySubscription = {
  onDeleteTestMilestoneCategory:  {
    __typename: "TestMilestoneCategory",
    categoryId: string,
    gradeId: string,
    name: string | null,
  } | null,
};

export type OnCreateTestQuestionSubscriptionVariables = {
  questionId?: string | null,
  milestoneId?: string | null,
  levelName?: string | null,
  solution?: string | null,
  text?: string | null,
};

export type OnCreateTestQuestionSubscription = {
  onCreateTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type OnUpdateTestQuestionSubscriptionVariables = {
  questionId?: string | null,
  milestoneId?: string | null,
  levelName?: string | null,
  solution?: string | null,
  text?: string | null,
};

export type OnUpdateTestQuestionSubscription = {
  onUpdateTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type OnDeleteTestQuestionSubscriptionVariables = {
  questionId?: string | null,
  milestoneId?: string | null,
  levelName?: string | null,
  solution?: string | null,
  text?: string | null,
};

export type OnDeleteTestQuestionSubscription = {
  onDeleteTestQuestion:  {
    __typename: "TestQuestion",
    questionId: string,
    milestoneId: string,
    levelName: string | null,
    solution: string | null,
    shortSolution: string | null,
    text: string | null,
    videoUrl: string | null,
    vocabularyUrl: string | null,
    position: number | null,
  } | null,
};

export type OnCreateTestQuestionOptionSubscriptionVariables = {
  optionId?: string | null,
  questionId?: string | null,
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type OnCreateTestQuestionOptionSubscription = {
  onCreateTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type OnUpdateTestQuestionOptionSubscriptionVariables = {
  optionId?: string | null,
  questionId?: string | null,
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type OnUpdateTestQuestionOptionSubscription = {
  onUpdateTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type OnDeleteTestQuestionOptionSubscriptionVariables = {
  optionId?: string | null,
  questionId?: string | null,
  isCorrect?: boolean | null,
  position?: number | null,
  text?: string | null,
};

export type OnDeleteTestQuestionOptionSubscription = {
  onDeleteTestQuestionOption:  {
    __typename: "TestQuestionOption",
    optionId: string,
    questionId: string,
    isCorrect: boolean | null,
    position: number | null,
    text: string | null,
  } | null,
};

export type OnCreateTestUserSubscriptionVariables = {
  userId?: string | null,
  activationCode?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
};

export type OnCreateTestUserSubscription = {
  onCreateTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type OnUpdateTestUserSubscriptionVariables = {
  userId?: string | null,
  activationCode?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
};

export type OnUpdateTestUserSubscription = {
  onUpdateTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type OnDeleteTestUserSubscriptionVariables = {
  userId?: string | null,
  activationCode?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
};

export type OnDeleteTestUserSubscription = {
  onDeleteTestUser:  {
    __typename: "TestUser",
    userId: string,
    activationCode: string | null,
    email: string | null,
    password: string | null,
    phone: string | null,
    firstName: string | null,
    lastName: string | null,
    role: string | null,
    instructorUserId: string | null,
    gradeId: string | null,
    categoryId: string | null,
    milestoneId: string | null,
    targetDate: string | null,
    targetAnswers: number | null,
    targetHelpers: number | null,
    creditsBalance: number | null,
  } | null,
};

export type OnCreateTestUserMilestoneSubscriptionVariables = {
  userMilestoneId?: string | null,
  userId?: string | null,
  milestoneId?: string | null,
  assignedAt?: string | null,
  completeBy?: string | null,
};

export type OnCreateTestUserMilestoneSubscription = {
  onCreateTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnUpdateTestUserMilestoneSubscriptionVariables = {
  userMilestoneId?: string | null,
  userId?: string | null,
  milestoneId?: string | null,
  assignedAt?: string | null,
  completeBy?: string | null,
};

export type OnUpdateTestUserMilestoneSubscription = {
  onUpdateTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnDeleteTestUserMilestoneSubscriptionVariables = {
  userMilestoneId?: string | null,
  userId?: string | null,
  milestoneId?: string | null,
  assignedAt?: string | null,
  completeBy?: string | null,
};

export type OnDeleteTestUserMilestoneSubscription = {
  onDeleteTestUserMilestone:  {
    __typename: "TestUserMilestone",
    userMilestoneId: string,
    userId: string,
    milestoneId: string,
    assignedAt: string,
    completeBy: string | null,
    completedAt: string | null,
    emotionAtBeginning: string | null,
    emotionAfterCompletion: string | null,
    points: number | null,
    correctPercentage: number | null,
    targetCorrectPercentage: number | null,
    targetHelpersUsePercentage: number | null,
    milestone:  {
      __typename: "TestMilestoneWithQuestions",
      milestoneId: string,
      categoryId: string,
      name: string | null,
      questions:  Array< {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null > | null,
    } | null,
    questionAnswers:  Array< {
      __typename: "TestUserQuestion",
      userQuestionId: string,
      userId: string,
      questionId: string,
      question:  {
        __typename: "TestQuestionWithOptions",
        questionId: string,
        milestoneId: string,
        levelName: string | null,
        solution: string | null,
        shortSolution: string | null,
        text: string | null,
        videoUrl: string | null,
        vocabularyUrl: string | null,
        position: number | null,
        options:  Array< {
          __typename: "TestQuestionOption",
          optionId: string,
          questionId: string,
          isCorrect: boolean | null,
          position: number | null,
          text: string | null,
        } | null > | null,
      } | null,
      userMilestoneId: string,
      selectedOptionId: string | null,
      answeredAt: string | null,
      readHelperUsed: boolean | null,
      videoHelperUsed: boolean | null,
      vocabularyHelperUsed: boolean | null,
      solutionHelperUsed: boolean | null,
    } | null > | null,
    userBadges:  Array< {
      __typename: "TestUserBadge",
      userBadgeId: string,
      userMilestoneId: string,
      badgeId: string,
      userId: string,
      createdAt: string | null,
      badge:  {
        __typename: "TestBadge",
        badgeId: string,
        name: string | null,
        imageUrl: string | null,
        maxMinutes: number | null,
        minCorrectAnswers: number | null,
        minHelpersUse: number | null,
      } | null,
      userMilestone:  {
        __typename: "TestUserMilestone",
        userMilestoneId: string,
        userId: string,
        milestoneId: string,
        assignedAt: string,
        completeBy: string | null,
        completedAt: string | null,
        emotionAtBeginning: string | null,
        emotionAfterCompletion: string | null,
        points: number | null,
        correctPercentage: number | null,
        targetCorrectPercentage: number | null,
        targetHelpersUsePercentage: number | null,
        questionAnswers:  Array< {
          __typename: "TestUserQuestion",
          userQuestionId: string,
          userId: string,
          questionId: string,
          userMilestoneId: string,
          selectedOptionId: string | null,
          answeredAt: string | null,
          readHelperUsed: boolean | null,
          videoHelperUsed: boolean | null,
          vocabularyHelperUsed: boolean | null,
          solutionHelperUsed: boolean | null,
        } | null > | null,
        userBadges:  Array< {
          __typename: "TestUserBadge",
          userBadgeId: string,
          userMilestoneId: string,
          badgeId: string,
          userId: string,
          createdAt: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnCreateTestUserQuestionSubscriptionVariables = {
  userQuestionId?: string | null,
  userId?: string | null,
  questionId?: string | null,
  selectedOptionId?: string | null,
  answeredAt?: string | null,
};

export type OnCreateTestUserQuestionSubscription = {
  onCreateTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type OnUpdateTestUserQuestionSubscriptionVariables = {
  userQuestionId?: string | null,
  userId?: string | null,
  questionId?: string | null,
  selectedOptionId?: string | null,
  answeredAt?: string | null,
};

export type OnUpdateTestUserQuestionSubscription = {
  onUpdateTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type OnDeleteTestUserQuestionSubscriptionVariables = {
  userQuestionId?: string | null,
  userId?: string | null,
  questionId?: string | null,
  selectedOptionId?: string | null,
  answeredAt?: string | null,
};

export type OnDeleteTestUserQuestionSubscription = {
  onDeleteTestUserQuestion:  {
    __typename: "TestUserQuestion",
    userQuestionId: string,
    userId: string,
    questionId: string,
    question:  {
      __typename: "TestQuestionWithOptions",
      questionId: string,
      milestoneId: string,
      levelName: string | null,
      solution: string | null,
      shortSolution: string | null,
      text: string | null,
      videoUrl: string | null,
      vocabularyUrl: string | null,
      position: number | null,
      options:  Array< {
        __typename: "TestQuestionOption",
        optionId: string,
        questionId: string,
        isCorrect: boolean | null,
        position: number | null,
        text: string | null,
      } | null > | null,
    } | null,
    userMilestoneId: string,
    selectedOptionId: string | null,
    answeredAt: string | null,
    readHelperUsed: boolean | null,
    videoHelperUsed: boolean | null,
    vocabularyHelperUsed: boolean | null,
    solutionHelperUsed: boolean | null,
  } | null,
};

export type OnCreateTestUserBadgeSubscriptionVariables = {
  userBadgeId?: string | null,
  userMilestoneId?: string | null,
  badgeId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type OnCreateTestUserBadgeSubscription = {
  onCreateTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type OnUpdateTestUserBadgeSubscriptionVariables = {
  userBadgeId?: string | null,
  userMilestoneId?: string | null,
  badgeId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type OnUpdateTestUserBadgeSubscription = {
  onUpdateTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type OnDeleteTestUserBadgeSubscriptionVariables = {
  userBadgeId?: string | null,
  userMilestoneId?: string | null,
  badgeId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type OnDeleteTestUserBadgeSubscription = {
  onDeleteTestUserBadge:  {
    __typename: "TestUserBadge",
    userBadgeId: string,
    userMilestoneId: string,
    badgeId: string,
    userId: string,
    createdAt: string | null,
    badge:  {
      __typename: "TestBadge",
      badgeId: string,
      name: string | null,
      imageUrl: string | null,
      maxMinutes: number | null,
      minCorrectAnswers: number | null,
      minHelpersUse: number | null,
    } | null,
    userMilestone:  {
      __typename: "TestUserMilestone",
      userMilestoneId: string,
      userId: string,
      milestoneId: string,
      assignedAt: string,
      completeBy: string | null,
      completedAt: string | null,
      emotionAtBeginning: string | null,
      emotionAfterCompletion: string | null,
      points: number | null,
      correctPercentage: number | null,
      targetCorrectPercentage: number | null,
      targetHelpersUsePercentage: number | null,
      questionAnswers:  Array< {
        __typename: "TestUserQuestion",
        userQuestionId: string,
        userId: string,
        questionId: string,
        userMilestoneId: string,
        selectedOptionId: string | null,
        answeredAt: string | null,
        readHelperUsed: boolean | null,
        videoHelperUsed: boolean | null,
        vocabularyHelperUsed: boolean | null,
        solutionHelperUsed: boolean | null,
      } | null > | null,
      userBadges:  Array< {
        __typename: "TestUserBadge",
        userBadgeId: string,
        userMilestoneId: string,
        badgeId: string,
        userId: string,
        createdAt: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type OnCreateTestMyPalMessageSubscriptionVariables = {
  messageId?: string | null,
  text?: string | null,
  case?: string | null,
};

export type OnCreateTestMyPalMessageSubscription = {
  onCreateTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type OnUpdateTestMyPalMessageSubscriptionVariables = {
  messageId?: string | null,
  text?: string | null,
  case?: string | null,
};

export type OnUpdateTestMyPalMessageSubscription = {
  onUpdateTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type OnDeleteTestMyPalMessageSubscriptionVariables = {
  messageId?: string | null,
  text?: string | null,
  case?: string | null,
};

export type OnDeleteTestMyPalMessageSubscription = {
  onDeleteTestMyPalMessage:  {
    __typename: "TestMyPalMessage",
    messageId: string,
    text: string,
    case: string,
    caseTitle: string | null,
  } | null,
};

export type OnCreateTestMyPalSubscriptionVariables = {
  MyPalId?: string | null,
  instructorUserId?: string | null,
  learnerUserId?: string | null,
  MyPalParams?: string | null,
};

export type OnCreateTestMyPalSubscription = {
  onCreateTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type OnUpdateTestMyPalSubscriptionVariables = {
  MyPalId?: string | null,
  instructorUserId?: string | null,
  learnerUserId?: string | null,
  MyPalParams?: string | null,
};

export type OnUpdateTestMyPalSubscription = {
  onUpdateTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type OnDeleteTestMyPalSubscriptionVariables = {
  MyPalId?: string | null,
  instructorUserId?: string | null,
  learnerUserId?: string | null,
  MyPalParams?: string | null,
};

export type OnDeleteTestMyPalSubscription = {
  onDeleteTestMyPal:  {
    __typename: "TestMyPal",
    MyPalId: string | null,
    instructorUserId: string | null,
    learnerUserId: string | null,
    MyPalParams: string | null,
  } | null,
};

export type OnCreateTestCreditPackageSubscriptionVariables = {
  creditPackageId?: string | null,
  name?: string | null,
  costUSD?: number | null,
  amountCredits?: number | null,
};

export type OnCreateTestCreditPackageSubscription = {
  onCreateTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type OnUpdateTestCreditPackageSubscriptionVariables = {
  creditPackageId?: string | null,
  name?: string | null,
  costUSD?: number | null,
  amountCredits?: number | null,
};

export type OnUpdateTestCreditPackageSubscription = {
  onUpdateTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};

export type OnDeleteTestCreditPackageSubscriptionVariables = {
  creditPackageId?: string | null,
  name?: string | null,
  costUSD?: number | null,
  amountCredits?: number | null,
};

export type OnDeleteTestCreditPackageSubscription = {
  onDeleteTestCreditPackage:  {
    __typename: "TestCreditPackage",
    creditPackageId: string,
    name: string | null,
    costUSD: number | null,
    amountCredits: number | null,
  } | null,
};
