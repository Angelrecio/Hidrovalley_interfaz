import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsectorComponent } from './newsector.component';

describe('NewsectorComponent', () => {
  let component: NewsectorComponent;
  let fixture: ComponentFixture<NewsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
