import { Stack } from './Stack';

describe('Stack', () => {
  let stack: Stack<Number>;

  beforeEach(() => {
    stack = new Stack();
  })

  it('Create stack', () => {
    expect(stack).not.toBeNull();
    expect(stack).toBeDefined()
  });

  it('Push', () => {
    stack.push(1);

    expect(stack.length()).toBe(1);
  });

  it('Pop is not empty', () => {
    stack.push(1);
    expect(stack.pop()).toBeDefined();
  });

  it('Pop is empty', () => {
    expect(() => {
      stack.pop()
    }).toThrow('Stack is empty');
  })

  it('Top', ()=>{
    stack.push(1);

    expect(stack.top()).toEqual(1)
    expect(stack.length()).toEqual(1);
  })

  it('Stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('stack is not empty', () => {
    stack.push(1)

    expect(stack.isEmpty()).toBeFalsy()
  })

  it('Add a few elements to stack', () => {
    const stubArr = [1,4,53,64,74543,445,67]
    stubArr.map(el => stack.push(el))

    expect(stack.length()).toEqual(stubArr.length);
  })
})
