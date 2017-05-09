import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../model/topic';

const POPULAR_TOPICS = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Webpack'
];

@Component({
  selector: 'gh-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  topics: Topic[] = [];

  constructor() {
    this.topics = POPULAR_TOPICS.map(topic => {
      return {
        name: topic,
        selected: false
      };
    });
  }

  @Input() set selectedTopic(value: string) {
    const lowerCaseTopic = value && value.toLowerCase();

    this.topics.forEach(topic => {
      topic.selected = topic.name.toLowerCase() === lowerCaseTopic;
    });
  }
}
