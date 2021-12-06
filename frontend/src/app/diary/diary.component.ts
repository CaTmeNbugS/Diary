import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Diary } from '../scripts';

@Component({
  selector: 'diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit, AfterViewInit {
  Diary: Diary[] = [
    {
      Date: {
        Day: 'Понедельник',
        Date: '13.09',
      },
      Syllabus: [
        {
          Name: 'Алгебра',
          Homework:
            'параграф 12, теорема 12.5, пример 6 записать в тетрадь, 12.10',
          Info: {
            State: 1,
            Class: '306',
            Teacher: 'тест',
          },
        },
        {
          Name: 'Геометрия',
          Homework: 'стр. 26-27',
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
    {
      Date: {
        Day: 'Среда',
        Date: '15.09',
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
  ExtendedTables: HTMLElement[] = [];

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const DiaryTable = document.querySelectorAll<HTMLElement>('.DiaryTable');
    const DiaryTableHomework = document.querySelector<HTMLElement>(
      '.DiaryTableHomework'
    );
    for (let i = 0; i < DiaryTable.length; i++) {
      DiaryTable[i].addEventListener('click', (event) => {
        if (event.target != DiaryTableHomework.firstChild) {
          console.log(event.target);
          DiaryTable[i].classList.add('Extended');
          this.ExtendedTables.unshift(DiaryTable[i]);
          if (this.ExtendedTables.length > 1) {
            if (this.ExtendedTables[0] == this.ExtendedTables[1]) {
              this.ExtendedTables[1].classList.remove('Extended');
              this.ExtendedTables = [];
            } else {
              this.ExtendedTables[1].classList.remove('Extended');
              this.ExtendedTables.splice(1, 1);
            }
          }
          console.log(this.ExtendedTables);
        }
      });
    }
  }
}
