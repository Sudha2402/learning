#include <stdio.h>

/*
int fab(int a, int b)
{
    int c;
    // if (a == 0 && b == 1)
    // {
    //     if (a == 0)
    //     {
    //         return a;
    //     }
    //     else if (b == 1)
    //     {
    //         return 1;
    //     }
    // }
    // else
    // {

        c = a + b;


        return c;



    // }


}

int main()
{
    int size;
    printf("Enter the numbers of the fabonacii to get : ");
    scanf("%d", &size);
    int a = 0, b = 1 ,c;
printf("%d\t%d\t",a,b);

    for (int i = 0; i < size-2; i++) //or
    //for(int i=2;i<size;++i)//loop starts from 2 because 0 and 1 are already printed
    {
        // printf("%d\t", fab(a, b));
        // fab(a, b); // not working properly

        c=a+b; //works properly
        printf("%d\t", fab(a, b));
        a = b;
        // b = c;//works properly
        b=fab(a, b);//not works properly//it takes 3 as like it is recalling it hence it updates b as 1 and 1 created earlierthen again 1 , it is not like setting ther value hence shows error.
        printf("\nfab(a, b):%d\n",fab(a, b));

    }


// int i=0;
//     while(i < size-2){
// printf("%d\t", fab(a, b));
//         a = b;
//         b = fab(a, b);
//         i++;
//     }

    return 0;
}


*/

// final code

/*
//without recursion
int main(){
    int a=0,b=1,c,size;
    printf("Enter the numbers of the fabonacii to get : ");
    scanf("%d",&size);
    printf("%d\t%d\t",a,b);
    for(int i=0;i<size-2;i++){
        c=a+b;
        printf("%d\t",c);
        a=b;
        b=c;
    }

return 0;
}

*/

/*
// with recursion and breakdown
int fab(int num)
{ // 5
    static int n = 0, m = 1, p; //only for this fab defined

    if (num > 0)
    {
        p = n + m;
        printf("%d\t", p);
        n = m;
        m = p;
        fab(num-1);//4
    }

}

int main()
{
    int a = 0, b = 1, c, size;
    printf("Enter the numbers of the fabonacii to get : ");
    scanf("%d", &size); // 7
    printf("%d\t%d\t", a, b);

    fab(size - 2); // 5
}
*/

// completely with recursion even first two element and find the element at certain position

int fab(int num)
{ // 7

    if (num == 1 || num == 2)
    {
        // printf("%d\t", num - 1);
        return num - 1;
    }
    else // 3
    {

        // printf("%d\t", fab(num-1)+fab(num-2));
        return fab(num - 1) + fab(num - 2);
    }
}

int main()
{
    int a = 0, b = 1, c, position;
    printf("Enter the element position of the fabonacii to get : ");
    scanf("%d", &position); // 7
    // fab(position);          // 7
    printf("%d", fab(position)); 

return 0;
}