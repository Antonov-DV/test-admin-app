import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryDataProviderService} from '../../services/category/category-data-provider.service';
import {CategoryItemInterface} from '../../interfaces/category-item.interface';
import {takeUntil} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';
import {LoadingController} from '@ionic/angular';
import {PreloaderComponent} from '../../components/preloader/preloader.component';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy {

    public categoriesList: Array<CategoryItemInterface>;

    protected destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router,
                private categoryDataService: CategoryDataProviderService,
                private preloader: PreloaderComponent) {
    }

    async ngOnInit() {

        await this.preloader.displayLoader();

        this.categoryDataService.categories$.pipe(takeUntil(this.destroy$)).subscribe(categories => {
            this.categoriesList = categories;

            this.preloader.dismissLoader();
        });
    }

    async ionViewWillEnter() {
        this.categoryDataService.fetchCategories();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editCategory(CategoryId) {
        this.router.navigate(['category-edit', CategoryId]);
    }

    createCategory() {
        this.router.navigate(['category-create']);
    }

    backToMainMenu() {
        this.router.navigate(['home']);
    }

}
