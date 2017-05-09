import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/finally';

import { RepositoriesService } from './repositories.service';
import { Repository } from './model/repository';

const DEFAULT_TRENDING_TOPIC = 'open source';

@Component({
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
    topic: string;
    trendingText: string;
    searchInProgress: boolean;
    repositories: Repository[] = [];

    constructor(private route: ActivatedRoute,
                private repositoriesService: RepositoriesService) {
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(() => this.updateSelectedTopic());
    }

    private updateSelectedTopic() {
        this.topic = this.route.snapshot.queryParams['topic'];

        this.searchRepositories();
    }

    private searchRepositories() {
        this.searchInProgress = true;

        this.trendingText = this.topic || DEFAULT_TRENDING_TOPIC;
        this.repositories = [];

        this.repositoriesService.getPopularRepositories(this.topic)
            .finally(() => {
                this.searchInProgress = false;
            })
            .subscribe(response => {
                this.repositories = response.items;

                this.repositories.forEach(repository => {
                    repository.created_at = new Date(repository.created_at);
                });
            });
    }
}
