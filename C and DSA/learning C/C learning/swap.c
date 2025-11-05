#include <stdio.h>
/*t swap(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;
    // return a,b; //more than one variables can't be returned this way.

    // swap using function can only be done by updating the value in the addresses not manually.

    // In C, we may employ pointers to return more than one value from a function by passing pointers as function arguments and using them to set several values visible in the caller function.

}
*/

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
    return;
}

int main()
{
    int a = 5;
    int b = 7;

    swap(&a, &b);
    printf("The number after swaping a and b  is %d and %d", a, b); // The number after swaping is 7 and 5

    // swapping without function

    double x, y, temp;
    printf("\nEnter First number : ");
    scanf("%lf", &x);
    printf("Enter second number : ");
    scanf("%lf", &y);
    printf("The number before swaping is %.2lf and %.2lf", x, y);
    temp = x;
    x = y;
    y = temp;
    printf("\nThe number after swaping is %.2lf and %.2lf\n", x, y);

/*output : 
Enter First number : 576
Enter second number : 56.6566
The number before swaping is 576.00 and 56.66 
The number after swaping is 56.66 and 576.00
*/


//Swap Numbers Without Using Temporary Variables
// x = (initial_x - initial_y)
  x = x - y;   //

  // y = (initial_x - initial_y) + initial_y = initial_x
  y = x + y; //=> y=(x - y)+y=x =>y=x

  // x = initial_x - (initial_x - initial_y) = initial_y
  x = y - x;//x=(y=x) -(x - y)=>x=x-(x - y)=y

  // %.2lf displays numbers up to 2 decimal places
  printf("After swapping, x = %.2lf\n", x);
  printf("After swapping, y = %.2lf", y);

/*
Enter a: 10.25
Enter b: -12.5
After swapping, a = -12.50
After swapping, b = 10.25
*/









    return 0;
}
