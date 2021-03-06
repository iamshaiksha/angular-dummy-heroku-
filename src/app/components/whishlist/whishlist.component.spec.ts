import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhishlistComponent } from "./whishlist.component";

xdescribe("WhishlistComponent", () => {
  let component: WhishlistComponent;
  let fixture: ComponentFixture<WhishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhishlistComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
