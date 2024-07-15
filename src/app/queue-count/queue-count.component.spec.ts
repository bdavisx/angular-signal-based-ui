import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCountComponent } from './queue-count.component';

describe('QueueCountComponent', () => {
  let component: QueueCountComponent;
  let fixture: ComponentFixture<QueueCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
