#include <stdio.h>
#define PI 3.14
int main()
{
    int a;
    printf("Enter the number which table is needed :");
    scanf("%d", &a);
    printf("The table of %d is \n", a);
    for (int i = 1; i <= 10; i++)
    {
        printf("%d * %d = %d\n", a, i, a * i);
    }
    printf("the area of circle having radius %d is :\n", a);
    printf("PI * %d * %d = %d\n", a, a, (PI * a * a));
    printf("%d\n",(PI * a * a));//0
    printf("%f\n",(PI * a * a));//78.500000 when a=5

    return 0;
}