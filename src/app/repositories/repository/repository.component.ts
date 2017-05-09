import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../model/repository';
import starIcon from '!!raw-loader!../../icons/star.svg';
import forkIcon from '!!raw-loader!../../icons/fork.svg';

@Component({
    selector: 'gh-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
    starIcon = starIcon;
    forkIcon = forkIcon;
    @Input() repository: Repository;

    constructor() {
    }

    ngOnInit() {
    }
}
