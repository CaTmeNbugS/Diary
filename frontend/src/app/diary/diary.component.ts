import { Component, OnInit } from '@angular/core';
import { Diary } from '../scripts';

@Component({
  selector: 'diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  Diary: Diary[] = [];

  constructor() {}

  ngOnInit(): void {
    this.Diary = [
      {
        Date: {
          Day: 'Понедельник',
          Date: '13.09',
        },
        Syllabus: [
          {
            Name: 'Алгебра',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Геометрия',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Обществознание',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Музыка',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Иностранный язык',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
        ],
      },
      {
        Date: {
          Day: 'Вторник',
          Date: '14.09',
        },
        Syllabus: [
          {
            Name: 'Родной язык',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Биология',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Алгебра',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'История',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Геометрия',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
          {
            Name: 'Физкультура',
            Homework: null,
            Info: {
              State: 1,
              Class: '306',
              Teacher: 'тест',
            },
          },
        ],
      },
    ];
  }
}
