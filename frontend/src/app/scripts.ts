export function RippleEffect(btns) {
  btns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.x;
      const y = event.clientY - rect.y;
      const ripple = document.createElement('div');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
}
export class Diary {
  public Date: {
    Day: string;
    Date: string;
  };
  public Syllabus: Subject[];
}
export class Subject {
  public Name: string;
  public Homework: any;
  public Info: {
    State: number;
    Class: string;
    Teacher: string;
  };
}
