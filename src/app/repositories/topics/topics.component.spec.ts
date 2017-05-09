import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { TopicsComponent } from './topics.component';
import { POPULAR_TOPICS } from './topics';

@Component({
    template: `
        <gh-topics [selectedTopic]="topic"></gh-topics>
    `
})
class TestHostComponent {
    topic = 'Angular';
}

describe('TopicsComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let topicsComponent: TopicsComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, TopicsComponent],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();

        const topicsDebugElement = fixture.debugElement.query(By.css('gh-topics'));

        topicsComponent = topicsDebugElement.componentInstance;
    });

    it('should show list of topics', () => {
        const topics = getTopicElements();

        expect(topics.length).toBe(POPULAR_TOPICS.length);
    });

    it('should show selected topic', () => {
        expectSelectedTopicIs('Angular');
    });

    it('should change selected topic if new topic passed', () => {
        hostComponent.topic = 'Webpack';
        fixture.detectChanges();

        expectSelectedTopicIs('Webpack');
    });

    it('should compare topics case-insensitive', () => {
        hostComponent.topic = 'webpack';
        fixture.detectChanges();

        expectSelectedTopicIs('Webpack');
    });

    it('should update query params on click', async(() => {
        const topics = getTopicElements();

        topics[0].nativeElement.click();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const route = TestBed.get(ActivatedRoute);

            expect(route.snapshot.queryParams['topic']).toBe('JavaScript');
        });
    }));

    function getTopicElements(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('.topic'));
    }

    function getSelectedTopicElements(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('.topic.selected'));
    }

    function expectSelectedTopicIs(expectedTopic: string) {
        const selectedTopics = getSelectedTopicElements();

        expect(selectedTopics.length).toBe(1);
        expect(selectedTopics[0].nativeElement.innerText.trim()).toBe(expectedTopic);
    }
});
