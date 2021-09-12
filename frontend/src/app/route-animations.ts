import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => diary', slideTo('left')),
  transition('diary => *', slideTo('right')),
  transition('* => syllabus', slideTo('left')),
  transition('syllabus => *', slideTo('right')),
  transition('* => homework', slideTo('left')),
  transition('homework => *', slideTo('right')),
  transition('* => settings', slideTo('left')),
  transition('settings => *', slideTo('right')),
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('200ms ease-in', style({ [direction]: '0%' }))],
        optional
      ),
      query(':enter', [
        animate('275ms ease-out', style({ [direction]: '0%' })),
      ]),
    ]),
  ];
}
