import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
    {path: '', loadChildren: './pages/loading/loading.module#LoadingPageModule'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'grades',
        canActivate: [AuthGuard],
        loadChildren: './pages/grades/grades.module#GradesPageModule'
    },
    {
        path: 'password-confirm',
        loadChildren: './pages/password-confirm/password-confirm.module#PasswordConfirmPageModule'
    },
    {
        path: 'milestones',
        canActivate: [AuthGuard],
        loadChildren: './pages/milestones/milestones.module#MilestonesPageModule'
    },
    {
        path: 'grade-edit/:gradeId',
        canActivate: [AuthGuard],
        loadChildren: './pages/grade-edit/grade-edit.module#GradeEditPageModule'
    },
    {
        path: 'grade-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/grade-edit/grade-edit.module#GradeEditPageModule'
    },
    {
        path: 'categories',
        canActivate: [AuthGuard],
        loadChildren: './pages/categories/categories.module#CategoriesPageModule'
    },
    {
        path: 'category-edit/:categoryId',
        canActivate: [AuthGuard],
        loadChildren: './pages/category-edit/category-edit.module#CategoryEditPageModule'
    },
    {
        path: 'category-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/category-edit/category-edit.module#CategoryEditPageModule'
    },
    {
        path: 'levels',
        canActivate: [AuthGuard],
        loadChildren: './pages/levels/levels.module#LevelsPageModule'
    },
    {
        path: 'level-edit/:levelName',
        canActivate: [AuthGuard],
        loadChildren: './pages/level-edit/level-edit.module#LevelEditPageModule'
    },
    {
        path: 'level-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/level-edit/level-edit.module#LevelEditPageModule'
    },
    {
        path: 'questions',
        canActivate: [AuthGuard],
        loadChildren: './pages/questions/questions.module#QuestionsPageModule'
    },
    {
        path: 'question-edit',
        canActivate: [AuthGuard],
        loadChildren: './pages/question-edit/question-edit.module#QuestionEditPageModule'
    },
    {
        path: 'question-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/question-edit/question-edit.module#QuestionEditPageModule'
    },
    {
        path: 'milestone-edit/:milestoneId',
        canActivate: [AuthGuard],
        loadChildren: './pages/milestone-edit/milestone-edit.module#MilestoneEditPageModule'
    },
    {
        path: 'milestone-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/milestone-edit/milestone-edit.module#MilestoneEditPageModule'
    },
    // TODO uncomment for directly show modal
    // {
    //     path: 'modal',
    //     canActivate: [AuthGuard],
    //     loadChildren: './pages/modal-page/modal-page.module#ModalPagePageModule'
    // },
    {
        path: 'modals',
        canActivate: [AuthGuard],
        loadChildren: './pages/modal-example/modal-example.module#ModalExamplePageModule'
    },
    {
        path: 'alerts',
        canActivate: [AuthGuard],
        loadChildren: './pages/alert-example/alert-example.module#AlertExamplePageModule'
    },
    {
        path: 'badges',
        canActivate: [AuthGuard],
        loadChildren: './pages/badges/badges.module#BadgesPageModule'
    },
    {
        path: 'badge-edit/:badgeId',
        canActivate: [AuthGuard],
        loadChildren: './pages/badge-edit/badge-edit.module#BadgeEditPageModule'
    },
    {
        path: 'badge-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/badge-edit/badge-edit.module#BadgeEditPageModule'
    },
    {
        path: 'instructors',
        canActivate: [AuthGuard],
        loadChildren: './pages/instructors/instructors.module#InstructorsPageModule'
    },
    {
        path: 'instructor-edit/:instructorId',
        canActivate: [AuthGuard],
        loadChildren: './pages/instructor-edit/instructor-edit.module#InstructorEditPageModule'
    },
    {
        path: 'instructor-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/instructor-edit/instructor-edit.module#InstructorEditPageModule'
    },
    {
        path: 'learners',
        canActivate: [AuthGuard],
        loadChildren: './pages/learners/learners.module#LearnersPageModule'
    },
    {
        path: 'learner-card/:learnerId',
        canActivate: [AuthGuard],
        loadChildren: './pages/learner-card/learner-card.module#LearnerCardPageModule'
    },
    {
        path: 'learner-edit/:learnerId',
        canActivate: [AuthGuard],
        loadChildren: './pages/learner-edit/learner-edit.module#LearnerEditPageModule'
    },
    {
        path: 'learner-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/learner-edit/learner-edit.module#LearnerEditPageModule'
    },
    {
        path: 'messages',
        canActivate: [AuthGuard],
        loadChildren: './pages/messages/messages.module#MessagesPageModule'
    },
    {
        path: 'message-edit/:messageId',
        canActivate: [AuthGuard],
        loadChildren: './pages/message-edit/message-edit.module#MessageEditPageModule'
    },
    {
        path: 'credit-packages',
        canActivate: [AuthGuard],
        loadChildren: './pages/credit-packages/credit-packages.module#CreditPackagesPageModule'
    },
    {
        path: 'credit-package-edit/:creditPackageId',
        canActivate: [AuthGuard],
        loadChildren: './pages/credit-package-edit/credit-package-edit.module#CreditPackageEditPageModule'
    },
    {
        path: 'credit-package-create',
        canActivate: [AuthGuard],
        loadChildren: './pages/credit-package-edit/credit-package-edit.module#CreditPackageEditPageModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
