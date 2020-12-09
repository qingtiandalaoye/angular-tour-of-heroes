//D:\lbc\example\angular-tour-of-heroes>ng test --main .\src\app\aa.component.spec.ts
describe('HomeComponent', () => {
  
  it('should same1', () => {
    expect("11" == "11").toBeTruthy();
  });

  it('should same2', () => {
    expect("22").toEqual("22");
  });
  
  it('should same3', () => {
    expect("33").not.toEqual("3");
  });
  
});
