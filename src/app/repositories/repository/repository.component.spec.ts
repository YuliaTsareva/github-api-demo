import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RepositoryComponent } from './repository.component';

describe('RepositoryComponent', () => {
    let component: RepositoryComponent;
    let fixture: ComponentFixture<RepositoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RepositoryComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RepositoryComponent);
        component = fixture.componentInstance;
        component.repository = <any>{
            name: 'Angular',
            language: 'TypeScript',
            owner: {
                login: 'angular'
            }
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
