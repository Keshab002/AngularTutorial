import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Container } from './container';
import { provideHttpClient } from '@angular/common/http';

describe('Container', () => {
  let component: Container;
  let fixture: ComponentFixture<Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Container],
      providers: [
        provideHttpClient(),     // required if your component uses HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Container);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
